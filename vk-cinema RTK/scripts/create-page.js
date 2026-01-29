import fs from "fs";
import path from "path";

create("pages");

function create(type) {
  const name = process.argv[2];
  if (!name) {
    console.error(`❌ Укажи имя: npm run create-${type.slice(0, -1)} <Name>`);
    process.exit(1);
  }

  // Используем import.meta.url вместо __dirname для ES-модулей
  const dir = path.join(
    new URL(import.meta.url).pathname,
    "../..",
    "src",
    type,
    name
  );

  //проверка на наличие страницы
  // if (fs.existsSync(dir)) {
  //   console.error('❌ Такая страница уже существует!');
  //   process.exit(1);
  // }

  // Создаём все родительские директории, если они не существуют
  fs.mkdirSync(dir, { recursive: true });

  const baseClass = name.toLowerCase();

  fs.writeFileSync(
    path.join(dir, `${name}.tsx`),
    `import React from 'react';
import './${name}.scss';
import { ${name}Props } from './${name}.types';

const ${name}: React.FC<${name}Props> = ({ children }) => {
  return <div className="${baseClass}">{children}</div>;
};

export default ${name};
`
  );

  fs.writeFileSync(
    path.join(dir, `${name}.types.ts`),
    `import { ReactNode } from 'react';

export interface ${name}Props {
  children?: ReactNode;
}
`
  );

  fs.writeFileSync(
    path.join(dir, `${name}.scss`),
    `.${baseClass} {
  // styles
}
`
  );

  fs.writeFileSync(
    path.join(dir, `index.ts`),
    `export { default } from './${name}';
`
  );

  console.log(`✅ Компонент layout "${name}" создан в src/${type}/${name}`);
}
