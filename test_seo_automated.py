#!/usr/bin/env python3
"""
Automated SEO Testing Suite for theo-multimedia.com
Tests: SEO, Local SEO, Performance, Schema, Core Web Vitals
Based on October 2025 standards
"""

import requests
import json
import time
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re
from datetime import datetime
from typing import Dict, List, Tuple
import sys

# ANSI Colors for terminal output
class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    MAGENTA = '\033[95m'
    BOLD = '\033[1m'
    END = '\033[0m'

class SEOTestSuite:
    def __init__(self, base_url: str, pagespeed_api_key: str = None):
        self.base_url = base_url.rstrip('/')
        self.pagespeed_api_key = pagespeed_api_key
        self.results = {
            'general_seo': {},
            'local_seo': {},
            'schema_validation': {},
            'performance': {},
            'images': {},
            'headers': {},
            'summary': {}
        }
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'SEO-Testing-Bot/2025 (theo-multimedia.com quality assurance)'
        })

    def print_header(self, text: str):
        """Print formatted section header"""
        print(f"\n{Colors.CYAN}{Colors.BOLD}{'=' * 80}{Colors.END}")
        print(f"{Colors.CYAN}{Colors.BOLD}{text.center(80)}{Colors.END}")
        print(f"{Colors.CYAN}{Colors.BOLD}{'=' * 80}{Colors.END}\n")

    def print_result(self, test_name: str, passed: bool, details: str = ""):
        """Print test result with color coding"""
        status = f"{Colors.GREEN}✓ PASS{Colors.END}" if passed else f"{Colors.RED}✗ FAIL{Colors.END}"
        print(f"{status} | {test_name}")
        if details:
            print(f"       {Colors.YELLOW}→ {details}{Colors.END}")

    def fetch_page(self, path: str = "/") -> Tuple[requests.Response, BeautifulSoup]:
        """Fetch a page and return response + parsed HTML"""
        url = urljoin(self.base_url, path)
        try:
            response = self.session.get(url, timeout=10, allow_redirects=True)
            soup = BeautifulSoup(response.content, 'html.parser')
            return response, soup
        except Exception as e:
            print(f"{Colors.RED}Error fetching {url}: {e}{Colors.END}")
            return None, None

    # ==================== GENERAL SEO TESTS ====================

    def test_general_seo(self):
        """Test general SEO requirements (2025 standards)"""
        self.print_header("GENERAL SEO TESTS")

        response, soup = self.fetch_page("/")
        if not soup:
            return

        passed = 0
        total = 0

        # Test 1: Title tag (optimal length 50-70 chars)
        total += 1
        title = soup.find('title')
        if title and 30 <= len(title.text) <= 75:
            passed += 1
            self.print_result("Title tag length optimal", True, f"{len(title.text)} chars")
        else:
            self.print_result("Title tag length", False, f"{len(title.text) if title else 0} chars (should be 30-75)")

        # Test 2: Meta description (optimal 120-160 chars)
        total += 1
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc and 100 <= len(meta_desc.get('content', '')) <= 165:
            passed += 1
            self.print_result("Meta description length", True, f"{len(meta_desc['content'])} chars")
        else:
            desc_len = len(meta_desc.get('content', '')) if meta_desc else 0
            self.print_result("Meta description", False, f"{desc_len} chars (should be 100-165)")

        # Test 3: Viewport meta tag
        total += 1
        viewport = soup.find('meta', attrs={'name': 'viewport'})
        if viewport:
            passed += 1
            self.print_result("Viewport meta tag", True)
        else:
            self.print_result("Viewport meta tag", False)

        # Test 4: Canonical URL
        total += 1
        canonical = soup.find('link', attrs={'rel': 'canonical'})
        if canonical:
            passed += 1
            self.print_result("Canonical URL", True, canonical.get('href', ''))
        else:
            self.print_result("Canonical URL", False)

        # Test 5: Robots meta tag
        total += 1
        robots = soup.find('meta', attrs={'name': 'robots'})
        if robots and 'noindex' not in robots.get('content', '').lower():
            passed += 1
            self.print_result("Robots meta tag (indexable)", True, robots.get('content', ''))
        else:
            self.print_result("Robots meta tag", False)

        # Test 6: Open Graph tags
        total += 1
        og_title = soup.find('meta', property='og:title')
        og_desc = soup.find('meta', property='og:description')
        og_image = soup.find('meta', property='og:image')
        og_url = soup.find('meta', property='og:url')

        if all([og_title, og_desc, og_image, og_url]):
            passed += 1
            self.print_result("Open Graph tags complete", True)
        else:
            missing = []
            if not og_title: missing.append('og:title')
            if not og_desc: missing.append('og:description')
            if not og_image: missing.append('og:image')
            if not og_url: missing.append('og:url')
            self.print_result("Open Graph tags", False, f"Missing: {', '.join(missing)}")

        # Test 7: Twitter Card tags
        total += 1
        twitter_card = soup.find('meta', attrs={'name': 'twitter:card'})
        twitter_title = soup.find('meta', attrs={'name': 'twitter:title'})
        twitter_image = soup.find('meta', attrs={'name': 'twitter:image'})

        if all([twitter_card, twitter_title, twitter_image]):
            passed += 1
            self.print_result("Twitter Card tags", True)
        else:
            self.print_result("Twitter Card tags", False)

        # Test 8: H1 tag (exactly 1)
        total += 1
        h1_tags = soup.find_all('h1')
        if len(h1_tags) == 1:
            passed += 1
            self.print_result("H1 tag (exactly 1)", True, h1_tags[0].text.strip()[:50])
        else:
            self.print_result("H1 tag", False, f"Found {len(h1_tags)} (should be exactly 1)")

        # Test 9: H2 tags (multiple)
        total += 1
        h2_tags = soup.find_all('h2')
        if len(h2_tags) >= 3:
            passed += 1
            self.print_result("H2 tags structure", True, f"{len(h2_tags)} H2 tags found")
        else:
            self.print_result("H2 tags", False, f"Only {len(h2_tags)} H2 tags (need 3+)")

        # Test 10: Lang attribute
        total += 1
        html_tag = soup.find('html')
        if html_tag and html_tag.get('lang') == 'fr':
            passed += 1
            self.print_result("HTML lang attribute", True, "fr")
        else:
            self.print_result("HTML lang attribute", False)

        self.results['general_seo'] = {'passed': passed, 'total': total, 'score': (passed/total)*100}
        print(f"\n{Colors.BOLD}General SEO Score: {passed}/{total} ({self.results['general_seo']['score']:.1f}%){Colors.END}")

    # ==================== LOCAL SEO TESTS ====================

    def test_local_seo(self):
        """Test Local SEO for Angoulême (2025 standards)"""
        self.print_header("LOCAL SEO TESTS - ANGOULÊME")

        response, soup = self.fetch_page("/")
        if not soup:
            return

        passed = 0
        total = 0

        # Test 1: Geo meta tags
        total += 1
        geo_region = soup.find('meta', attrs={'name': 'geo.region'})
        geo_placename = soup.find('meta', attrs={'name': 'geo.placename'})
        geo_position = soup.find('meta', attrs={'name': 'geo.position'})
        icbm = soup.find('meta', attrs={'name': 'ICBM'})

        if all([geo_region, geo_placename, geo_position, icbm]):
            passed += 1
            self.print_result("Geo meta tags complete", True, f"Region: {geo_region.get('content', '')}")
        else:
            missing = []
            if not geo_region: missing.append('geo.region')
            if not geo_placename: missing.append('geo.placename')
            if not geo_position: missing.append('geo.position')
            if not icbm: missing.append('ICBM')
            self.print_result("Geo meta tags", False, f"Missing: {', '.join(missing)}")

        # Test 2: GPS coordinates validation
        total += 1
        if geo_position:
            coords = geo_position.get('content', '')
            # Angoulême coordinates: 45.6484, 0.1560
            if '45.6484' in coords and '0.1560' in coords:
                passed += 1
                self.print_result("GPS coordinates Angoulême", True, coords)
            else:
                self.print_result("GPS coordinates", False, f"Got: {coords}")
        else:
            self.print_result("GPS coordinates", False, "No geo.position tag")

        # Test 3: LocalBusiness Schema in JSON-LD
        total += 1
        json_ld_scripts = soup.find_all('script', type='application/ld+json')
        has_local_business = False
        local_business_data = None

        for script in json_ld_scripts:
            try:
                data = json.loads(script.string)
                # Check if it's a single schema or @graph
                schemas = data.get('@graph', [data])
                for schema in schemas:
                    if schema.get('@type') == 'LocalBusiness':
                        has_local_business = True
                        local_business_data = schema
                        break
            except:
                continue

        if has_local_business:
            passed += 1
            self.print_result("LocalBusiness Schema", True, "Found in JSON-LD")
        else:
            self.print_result("LocalBusiness Schema", False)

        # Test 4: LocalBusiness has GPS coordinates
        total += 1
        if local_business_data and 'geo' in local_business_data:
            geo_data = local_business_data['geo']
            if geo_data.get('latitude') == 45.6484 and geo_data.get('longitude') == 0.1560:
                passed += 1
                self.print_result("LocalBusiness GPS in schema", True)
            else:
                self.print_result("LocalBusiness GPS", False, f"Coords mismatch")
        else:
            self.print_result("LocalBusiness GPS", False, "No geo in schema")

        # Test 5: LocalBusiness has complete address
        total += 1
        if local_business_data and 'address' in local_business_data:
            addr = local_business_data['address']
            required_fields = ['addressLocality', 'addressRegion', 'postalCode', 'addressCountry']
            has_all = all(field in addr for field in required_fields)
            if has_all and addr.get('addressLocality') == 'Angoulême':
                passed += 1
                self.print_result("LocalBusiness complete address", True, f"{addr.get('addressLocality')}, {addr.get('postalCode')}")
            else:
                self.print_result("LocalBusiness address", False)
        else:
            self.print_result("LocalBusiness address", False)

        # Test 6: Service area defined
        total += 1
        if local_business_data and 'areaServed' in local_business_data:
            passed += 1
            area_count = len(local_business_data['areaServed']) if isinstance(local_business_data['areaServed'], list) else 1
            self.print_result("Service area defined", True, f"{area_count} areas")
        else:
            self.print_result("Service area", False)

        # Test 7: Opening hours
        total += 1
        if local_business_data and 'openingHoursSpecification' in local_business_data:
            passed += 1
            self.print_result("Opening hours specified", True)
        else:
            self.print_result("Opening hours", False)

        # Test 8: Contact info (NAP)
        total += 1
        if local_business_data:
            has_name = local_business_data.get('name')
            has_telephone = local_business_data.get('telephone')
            has_email = local_business_data.get('email')

            if all([has_name, has_telephone or has_email]):
                passed += 1
                self.print_result("Contact info (NAP)", True)
            else:
                self.print_result("Contact info", False)
        else:
            self.print_result("Contact info", False)

        # Test 9: Services/offers defined
        total += 1
        if local_business_data and 'makesOffer' in local_business_data:
            offers = local_business_data['makesOffer']
            offer_count = len(offers) if isinstance(offers, list) else 1
            if offer_count >= 3:
                passed += 1
                self.print_result("Services/offers defined", True, f"{offer_count} services")
            else:
                self.print_result("Services/offers", False, f"Only {offer_count} (need 3+)")
        else:
            self.print_result("Services/offers", False)

        # Test 10: Local keywords in content
        total += 1
        page_text = soup.get_text().lower()
        local_keywords = ['angoulême', 'charente', 'nouvelle-aquitaine']
        found_keywords = [kw for kw in local_keywords if kw in page_text]

        if len(found_keywords) >= 2:
            passed += 1
            self.print_result("Local keywords present", True, ', '.join(found_keywords))
        else:
            self.print_result("Local keywords", False, f"Only found: {', '.join(found_keywords)}")

        self.results['local_seo'] = {'passed': passed, 'total': total, 'score': (passed/total)*100}
        print(f"\n{Colors.BOLD}Local SEO Score: {passed}/{total} ({self.results['local_seo']['score']:.1f}%){Colors.END}")

    # ==================== SCHEMA VALIDATION ====================

    def test_schema_validation(self):
        """Validate all JSON-LD schemas"""
        self.print_header("SCHEMA.ORG VALIDATION")

        response, soup = self.fetch_page("/")
        if not soup:
            return

        passed = 0
        total = 0

        json_ld_scripts = soup.find_all('script', type='application/ld+json')

        total += 1
        if len(json_ld_scripts) > 0:
            passed += 1
            self.print_result("JSON-LD scripts present", True, f"{len(json_ld_scripts)} schema(s)")
        else:
            self.print_result("JSON-LD scripts", False)
            return

        for idx, script in enumerate(json_ld_scripts, 1):
            try:
                data = json.loads(script.string)

                # Test schema structure
                total += 1
                if '@context' in data and '@type' in data or '@graph' in data:
                    passed += 1
                    schema_type = data.get('@type', 'Graph')
                    self.print_result(f"Schema #{idx} structure valid", True, schema_type)
                else:
                    self.print_result(f"Schema #{idx} structure", False)

                # Test for required properties
                schemas = data.get('@graph', [data])
                for schema in schemas:
                    schema_type = schema.get('@type')

                    if schema_type == 'LocalBusiness':
                        total += 1
                        required = ['name', 'address', 'geo']
                        has_required = all(field in schema for field in required)
                        if has_required:
                            passed += 1
                            self.print_result("LocalBusiness required props", True)
                        else:
                            missing = [f for f in required if f not in schema]
                            self.print_result("LocalBusiness props", False, f"Missing: {missing}")

                    elif schema_type == 'WebPage':
                        total += 1
                        required = ['name', 'description', 'url']
                        has_required = all(field in schema for field in required)
                        if has_required:
                            passed += 1
                            self.print_result("WebPage required props", True)
                        else:
                            self.print_result("WebPage props", False)

            except json.JSONDecodeError as e:
                total += 1
                self.print_result(f"Schema #{idx} JSON parse", False, str(e))

        self.results['schema_validation'] = {'passed': passed, 'total': total, 'score': (passed/total)*100 if total > 0 else 0}
        print(f"\n{Colors.BOLD}Schema Validation Score: {passed}/{total} ({self.results['schema_validation']['score']:.1f}%){Colors.END}")

    # ==================== PERFORMANCE TESTS ====================

    def test_performance(self):
        """Test performance metrics"""
        self.print_header("PERFORMANCE TESTS")

        passed = 0
        total = 0

        # Test 1: Response time
        total += 1
        start = time.time()
        response, soup = self.fetch_page("/")
        response_time = time.time() - start

        if response_time < 2.0:
            passed += 1
            self.print_result("Response time < 2s", True, f"{response_time:.2f}s")
        else:
            self.print_result("Response time", False, f"{response_time:.2f}s (should be < 2s)")

        if not response:
            return

        # Test 2: Gzip compression
        total += 1
        if 'gzip' in response.headers.get('Content-Encoding', '').lower():
            passed += 1
            self.print_result("Gzip compression enabled", True)
        else:
            self.print_result("Gzip compression", False)

        # Test 3: Cache-Control headers
        total += 1
        cache_control = response.headers.get('Cache-Control', '')
        if 'max-age' in cache_control or 'public' in cache_control:
            passed += 1
            self.print_result("Cache-Control header", True, cache_control[:50])
        else:
            self.print_result("Cache-Control header", False)

        # Test 4: Content size
        total += 1
        content_size = len(response.content) / 1024  # KB
        if content_size < 500:
            passed += 1
            self.print_result("Page size < 500KB", True, f"{content_size:.1f}KB")
        else:
            self.print_result("Page size", False, f"{content_size:.1f}KB (should be < 500KB)")

        # Test 5: Images have width/height
        total += 1
        images = soup.find_all(['img', 'Image'])
        images_with_dimensions = sum(1 for img in images if img.get('width') and img.get('height'))
        if len(images) > 0:
            ratio = images_with_dimensions / len(images)
            if ratio >= 0.8:
                passed += 1
                self.print_result("Images have dimensions", True, f"{images_with_dimensions}/{len(images)}")
            else:
                self.print_result("Images dimensions", False, f"Only {images_with_dimensions}/{len(images)}")
        else:
            passed += 1
            self.print_result("No images to check", True)

        self.results['performance'] = {'passed': passed, 'total': total, 'score': (passed/total)*100}
        print(f"\n{Colors.BOLD}Performance Score: {passed}/{total} ({self.results['performance']['score']:.1f}%){Colors.END}")

    # ==================== SITEMAP & ROBOTS ====================

    def test_sitemap_robots(self):
        """Test sitemap and robots.txt"""
        self.print_header("SITEMAP & ROBOTS.TXT")

        passed = 0
        total = 0

        # Test robots.txt
        total += 1
        try:
            robots_response = self.session.get(f"{self.base_url}/robots.txt", timeout=5)
            if robots_response.status_code == 200:
                passed += 1
                self.print_result("robots.txt accessible", True)

                # Check for sitemap reference
                total += 1
                if 'sitemap' in robots_response.text.lower():
                    passed += 1
                    self.print_result("Sitemap in robots.txt", True)
                else:
                    self.print_result("Sitemap in robots.txt", False)

                # Check for AI crawlers
                total += 1
                ai_crawlers = ['gptbot', 'claude', 'perplexity', 'anthropic']
                found_crawlers = [bot for bot in ai_crawlers if bot in robots_response.text.lower()]
                if len(found_crawlers) >= 2:
                    passed += 1
                    self.print_result("AI crawlers mentioned", True, ', '.join(found_crawlers))
                else:
                    self.print_result("AI crawlers", False)
            else:
                self.print_result("robots.txt", False, f"Status {robots_response.status_code}")
        except Exception as e:
            self.print_result("robots.txt", False, str(e))

        # Test sitemap.xml
        total += 1
        try:
            sitemap_response = self.session.get(f"{self.base_url}/sitemap.xml", timeout=5)
            if sitemap_response.status_code == 200:
                passed += 1
                self.print_result("sitemap.xml accessible", True)

                # Count URLs
                total += 1
                url_count = sitemap_response.text.count('<loc>')
                if url_count >= 5:
                    passed += 1
                    self.print_result("Sitemap has multiple URLs", True, f"{url_count} URLs")
                else:
                    self.print_result("Sitemap URLs", False, f"Only {url_count} URLs")
            else:
                self.print_result("sitemap.xml", False, f"Status {sitemap_response.status_code}")
        except Exception as e:
            self.print_result("sitemap.xml", False, str(e))

        self.results['sitemap_robots'] = {'passed': passed, 'total': total, 'score': (passed/total)*100 if total > 0 else 0}
        print(f"\n{Colors.BOLD}Sitemap/Robots Score: {passed}/{total} ({self.results['sitemap_robots']['score']:.1f}%){Colors.END}")

    # ==================== GENERATE REPORT ====================

    def generate_report(self):
        """Generate final summary report"""
        self.print_header("FINAL REPORT SUMMARY")

        total_passed = 0
        total_tests = 0

        for category, data in self.results.items():
            if category != 'summary' and 'passed' in data:
                total_passed += data['passed']
                total_tests += data['total']
                score = data['score']
                color = Colors.GREEN if score >= 80 else Colors.YELLOW if score >= 60 else Colors.RED
                print(f"{color}{category.replace('_', ' ').title():.<40} {data['passed']}/{data['total']} ({score:.1f}%){Colors.END}")

        overall_score = (total_passed / total_tests * 100) if total_tests > 0 else 0
        self.results['summary'] = {
            'total_passed': total_passed,
            'total_tests': total_tests,
            'overall_score': overall_score,
            'timestamp': datetime.now().isoformat()
        }

        print(f"\n{Colors.BOLD}{Colors.CYAN}{'=' * 80}{Colors.END}")
        color = Colors.GREEN if overall_score >= 90 else Colors.YELLOW if overall_score >= 75 else Colors.RED
        print(f"{color}{Colors.BOLD}OVERALL SCORE: {total_passed}/{total_tests} ({overall_score:.1f}%){Colors.END}")
        print(f"{Colors.BOLD}{Colors.CYAN}{'=' * 80}{Colors.END}\n")

        # Grade
        if overall_score >= 95:
            grade = "A+ EXCELLENT"
        elif overall_score >= 90:
            grade = "A VERY GOOD"
        elif overall_score >= 80:
            grade = "B GOOD"
        elif overall_score >= 70:
            grade = "C AVERAGE"
        else:
            grade = "D NEEDS WORK"

        print(f"{Colors.BOLD}Grade: {grade}{Colors.END}\n")

        # Save JSON report
        report_file = f"seo_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(report_file, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)

        print(f"{Colors.GREEN}Full report saved to: {report_file}{Colors.END}")

    def run_all_tests(self):
        """Run complete test suite"""
        print(f"\n{Colors.MAGENTA}{Colors.BOLD}{'*' * 80}")
        print(f"{'SEO TESTING SUITE - THEO MULTIMEDIA'.center(80)}")
        print(f"{'October 2025 Standards'.center(80)}")
        print(f"{'*' * 80}{Colors.END}\n")
        print(f"Testing: {Colors.BOLD}{self.base_url}{Colors.END}\n")

        try:
            self.test_general_seo()
            self.test_local_seo()
            self.test_schema_validation()
            self.test_performance()
            self.test_sitemap_robots()
            self.generate_report()
        except KeyboardInterrupt:
            print(f"\n{Colors.YELLOW}Tests interrupted by user{Colors.END}")
            sys.exit(1)
        except Exception as e:
            print(f"\n{Colors.RED}Error during testing: {e}{Colors.END}")
            import traceback
            traceback.print_exc()
            sys.exit(1)

def main():
    """Main entry point"""
    # Configuration
    # Change this to test local development or production
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == '--local':
        BASE_URL = "http://localhost:3000"
    else:
        BASE_URL = "https://theo-multimedia.com"  # Production URL

    # PAGESPEED_API_KEY = "YOUR_API_KEY"  # Optional for PageSpeed Insights API

    print(f"{Colors.CYAN}Starting SEO Test Suite...{Colors.END}")
    print(f"{Colors.CYAN}Target: {BASE_URL}{Colors.END}\n")

    suite = SEOTestSuite(BASE_URL)
    suite.run_all_tests()

if __name__ == "__main__":
    main()
