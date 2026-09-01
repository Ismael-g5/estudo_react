// src/autoRoutes.js

// 1. Escaneia a pasta src/pages procurando arquivos .jsx ou .js
const context = require.context("./pages", false, /\.(jsx|js)$/);

// Criamos o array inicial lendo os arquivos
const rawRoutes = context.keys().map((fileName) => {
  const componentName = fileName.replace("./", "").replace(/\.(jsx|js)$/, "");
  
  const path = componentName.toLowerCase() === "home" 
    ? "/" 
    : `/${componentName.toLowerCase()}`;

  // Pegamos todo o conteúdo exportado do arquivo
  const fileExports = context(fileName);
  
  // O componente continua sendo o default
  const Component = fileExports.default;
  
  // Captura a ordem definida no arquivo. Se esquecer de colocar, assume 99 (vai para o fim)
  const order = fileExports.order !== undefined ? fileExports.order : 99;

  return {
    path,
    label: componentName,
    element: <Component />,
    order, // Guardamos a ordem aqui para usar no sort abaixo
  };
});

// 2. SOLUÇÃO: Ordena as rotas com base no número da propriedade 'order'
export const autoRoutes = rawRoutes.sort((a, b) => a.order - b.order);
