# 🤖 Next.js DevTools MCP Server - Configuration

## 📖 Qu'est-ce que MCP ?

Le **Model Context Protocol (MCP)** est un standard ouvert qui permet aux agents IA et assistants de code d'interagir avec vos applications via une interface standardisée.

Next.js 16+ inclut le support MCP qui permet aux agents IA d'accéder aux informations internes de votre application en temps réel.

## ✅ Installation

Le package `next-devtools-mcp` est déjà installé dans ce projet.

```bash
npm install -D next-devtools-mcp
```

## 🚀 Utilisation

### Option 1: Avec Claude Code (Recommandé)

Si vous utilisez Claude Code, le MCP est automatiquement configuré. Le serveur se connecte au serveur de développement Next.js lorsque vous lancez:

```bash
npm run dev
```

### Option 2: Configuration manuelle

Pour utiliser le MCP avec d'autres clients AI (Claude Desktop, etc.), ajoutez ceci à votre configuration MCP:

**Emplacement du fichier de configuration:**
- **Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

**Configuration:**
```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["-y", "next-devtools-mcp@latest"]
    }
  }
}
```

## 🎯 Capacités du MCP Server

Le serveur MCP Next.js DevTools fournit aux agents IA:

### 1. **Détection d'erreurs**
- Erreurs de build en temps réel
- Erreurs d'exécution (runtime errors)
- Erreurs de type TypeScript
- Warnings du compilateur

### 2. **Requêtes d'état en direct**
- État de l'application en temps réel
- Informations sur les routes
- Configuration Next.js active
- Métriques de performance

### 3. **Documentation**
- Accès à la documentation Next.js
- Base de connaissances intégrée
- Suggestions de fixes automatiques

### 4. **Migrations automatiques**
- Mise à jour vers Next.js 16 avec codemods
- Détection de patterns dépréciés
- Suggestions de modernisation

## 🔧 Comment ça fonctionne

1. **Lancement du serveur dev Next.js**:
   ```bash
   npm run dev
   ```

2. **Endpoint MCP automatique**:
   Next.js 16+ expose automatiquement un endpoint MCP à:
   ```
   http://localhost:3000/_next/mcp
   ```

3. **Connexion automatique**:
   Le serveur `next-devtools-mcp` découvre et se connecte automatiquement à votre instance Next.js en cours d'exécution.

4. **Communication bidirectionnelle**:
   - L'agent IA envoie des requêtes via MCP
   - Next.js répond avec les données en temps réel
   - Diagnostic et suggestions en continu

## 📊 Exemples d'utilisation

### Diagnostic d'erreurs
```
Agent IA: "Quelles erreurs y a-t-il dans le build actuel ?"

MCP Server:
- 1 erreur TypeScript dans pages/index.js:42
- Type 'string' is not assignable to type 'number'
- Suggestion: Convertir la valeur avec Number() ou parseInt()
```

### Inspection de l'état
```
Agent IA: "Quelles sont les routes actives dans l'application ?"

MCP Server:
- / (page principale)
- /about
- /contact
- /portfolio
- /services
- /api/sitemap.xml (API route)
```

### Optimisation
```
Agent IA: "Comment puis-je améliorer les performances ?"

MCP Server:
- Utilisez <Image> de next/image pour toutes les images
- Activez le cache avec 'use cache' directive
- Considérez l'utilisation de Static Generation pour /portfolio
- Bundle size: 199KB (recommandé: <150KB)
```

## ⚙️ Configuration avancée

### Variables d'environnement

Vous pouvez configurer le comportement du MCP server:

```bash
# .env.local
NEXT_MCP_PORT=3001          # Port du serveur MCP (défaut: auto)
NEXT_MCP_ENABLED=true       # Activer/désactiver MCP
NEXT_MCP_VERBOSE=false      # Logs verbeux
```

### Sécurité

⚠️ **Important**: Le serveur MCP ne devrait être utilisé qu'en développement !

Il est automatiquement désactivé en production pour des raisons de sécurité.

## 🛠️ Dépannage

### Le serveur MCP ne se connecte pas

1. Vérifiez que Next.js dev est en cours d'exécution:
   ```bash
   npm run dev
   ```

2. Vérifiez le port (défaut: 3000):
   ```bash
   lsof -i :3000  # Mac/Linux
   netstat -ano | findstr :3000  # Windows
   ```

3. Vérifiez les logs du serveur dev pour l'endpoint MCP:
   ```
   ✓ MCP server running at /_next/mcp
   ```

### Erreurs de connexion

Si vous voyez des erreurs de connexion:
- Assurez-vous d'utiliser Node.js v20.19+
- Réinstallez next-devtools-mcp: `npm i -D next-devtools-mcp@latest`
- Redémarrez le serveur dev

### Performance

Le serveur MCP a un impact minimal sur les performances:
- Overhead: <5ms par requête
- Mémoire: ~10MB additionnels
- Ne ralentit pas le Hot Reload

## 📚 Ressources

- **Documentation officielle**: https://nextjs.org/docs/app/guides/mcp
- **GitHub**: https://github.com/vercel/next-devtools-mcp
- **Model Context Protocol**: https://modelcontextprotocol.io/

## 🎯 Intégration dans ce projet

Le MCP est déjà configuré et prêt à l'emploi:

✅ Package installé
✅ Next.js 16 avec support MCP intégré
✅ Endpoint /_next/mcp automatique
✅ Compatible avec Claude Code

**Pour commencer:**
```bash
npm run dev
```

Le serveur MCP est maintenant accessible aux agents IA ! 🚀

---

**Note**: Sur Termux/Android, certaines fonctionnalités natives (comme @swc bindings) peuvent ne pas fonctionner. Le MCP server utilisera le fallback WASM automatiquement.
