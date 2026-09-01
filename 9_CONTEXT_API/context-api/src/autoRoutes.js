// src/autoRoutes.js

// SOLUÇÃO: Adicionada a linha abaixo que estava faltando para definir o context
const context = require.context("./pages", false, /\.(jsx|js)$/);

const rawRoutes = context.keys().map((fileName) => {
  const componentName = fileName.replace("./", "").replace(/\.(jsx|js)$/, "");
  
  const path = componentName.toLowerCase() === "home" 
    ? "/" 
    : `/${componentName.toLowerCase()}`;

  const fileExports = context(fileName);
  const Component = fileExports.default;
  const order = fileExports.order !== undefined ? fileExports.order : 99;

  // AJUSTE 1: Mudei para 'true' como padrão. Assim, todas aparecem na Navbar, 
  // e você só coloca "export const menu = false" nas páginas que quiser esconder (ex: Login, Erro 404).
  const inMenu = fileExports.menu !== undefined ? fileExports.menu : true; 

  return {
    path,
    label: componentName,
    element: <Component />,
    order, 
    inMenu, // AJUSTE 2: Obrigatório passar a variável aqui para o App.js e Navbar verem!
  };
});

// 2. SOLUÇÃO: Ordena as rotas com base no número da propriedade 'order'
export const autoRoutes = rawRoutes.sort((a, b) => a.order - b.order);
