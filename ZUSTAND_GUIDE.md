<p align="center">
  <a href="https://docs.pmnd.rs/zustand/getting-started/introduction" target="_blank">
    <img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" width="250" alt="Zustand Logo" />
    </a>
</p>

# Guía Rápida de Zustand

Bienvenido a la guía esencial para comenzar a trabajar con Zustand en proyectos React + TypeScript. Aquí encontrarás recomendaciones de herramientas, extensiones y configuraciones para un entorno de desarrollo moderno y eficiente.

---

## Instalaciones Recomendadas

- **Navegador:** [Google Chrome](https://www.google.com/chrome/)
- **React Developer Tools:** [Extensión Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)
- **Redux Devtools:** [Extensión Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
- **Visual Studio Code:** [Descargar](https://code.visualstudio.com/)
- **Postman:** [Descargar](https://www.postman.com/downloads/)
- **Node.js:** [Descargar](https://nodejs.org/es/)
- **Docker Desktop:** [Descargar](https://www.docker.com/products/docker-desktop/)

---

## Temas y Extensiones para VSCode

### Temas Visuales

- [Tokyo Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night) (Tema principal)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) (Iconos)

### Extensiones Útiles

- [ES7 React/Redux Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): Snippets para React y Redux.
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets): Snippets rápidos para React.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Cierre automático de etiquetas.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Autocompletado y sugerencias para Tailwind CSS.

---

## Configuración recomendada de VSCode

A continuación, te comparto mi configuración personal de VSCode, optimizada para trabajar con React, TypeScript y Tailwind:

```jsonc
{
  // Preferencias de editor
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.insertSpaces": true,
  "editor.minimap.enabled": false,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorWidth": 2,
  "editor.guides.bracketPairs": "active",
  "editor.guides.bracketPairsHorizontal": true,
  "editor.accessibilitySupport": "off",

  // Apariencia
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Tokyo Night",
  "workbench.activityBar.visible": false,
  "workbench.layoutControl.enabled": false,
  "workbench.startupEditor": "none",
  "window.titleBarStyle": "custom",
  "window.commandCenter": false,
  "window.zoomLevel": 4,

  // Terminal y explorador
  "terminal.integrated.fontFamily": "MesloLGM NF",
  "terminal.integrated.enableMultiLinePasteWarning": false,
  "explorer.compactFolders": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  // Git y control de versiones
  "git.enableSmartCommit": true,
  "git.openRepositoryInParentFolders": "never",
  "git.confirmSync": false,
  "git.autofetch": true,

  // Otras extensiones
  "codesnap.backgroundColor": "rgba(0, 0, 0, 0.0)",
  "codesnap.boxShadow": "rgba(0, 0, 0, 0.55) 0px 0px 20px",
  "codesnap.shutterAction": "copy",
  "codesnap.showWindowControls": false,

  // Configuración de Dart (opcional)
  "dart.flutterSdkPath": "/Users/strider/Development/flutter",
  "dart.showInspectorNotificationsForWidgetErrors": false,
  "[dart]": {
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false
  },

  // Formato para JS/TS
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": true,
  "javascript.format.semicolons": "insert",
  "javascript.preferences.quoteStyle": "single",
  "javascript.preferences.jsxAttributeCompletionStyle": "none",
  "javascript.preferences.useAliasesForRenames": false,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": true,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": true,
  "typescript.format.semicolons": "insert",
  "typescript.preferences.quoteStyle": "single",
  "typescript.preferences.jsxAttributeCompletionStyle": "none",
  "typescript.preferences.useAliasesForRenames": false,

  // Otros ajustes
  "security.workspace.trust.untrustedFiles": "open",
  "liveServer.settings.donotVerifyTags": true,
  "reactSnippets.settings.importReactOnTop": false,
  "audioCues.diffLineDeleted": "off",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "github.copilot.enable": {
    "*": false,
    "plaintext": false,
    "markdown": true,
    "scminput": false
  }
}
```

---

## Recursos útiles

- [Documentación oficial de Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Ejemplos de uso](https://docs.pmnd.rs/zustand/guides/typescript)
- [Repositorio GitHub Zustand](https://github.com/pmndrs/zustand)
