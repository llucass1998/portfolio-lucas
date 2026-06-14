# Portfólio Lucas Souza

Portfólio pessoal em React, TypeScript e Vite para apresentar trajetória, stack técnica, projetos e contatos profissionais.

## Site online

[Acessar portfólio publicado](https://portfolio-lucas-jumw.vercel.app/)

## Tecnologias

- React
- TypeScript
- Vite
- CSS responsivo
- Lucide React

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

O build final fica na pasta `dist`.

## Trocar a foto

Substitua o arquivo:

```text
public/lucas-photo.png
```

Mantenha o mesmo nome para a página usar a nova imagem automaticamente.

## Trocar prints dos projetos

Substitua os arquivos em:

```text
public/projects/
```

Arquivos usados hoje:

- `sistema-chamados-screen.png`
- `street-foods-screen.png`
- `tdb-barbearia-screen.png`
- `logistica-screen.png`

Você pode trocar por PNG/JPG reais mantendo o mesmo nome no `src/App.tsx`.

## Trocar currículo

Substitua:

```text
public/curriculo-lucas-souza.pdf
```

## Trocar certificados

Coloque os arquivos oficiais em:

```text
public/certificados/
```

Depois atualize os caminhos em `src/App.tsx` se quiser exibir os PDFs/imagens reais no site.

## Trocar vídeos dos projetos

Os vídeos ficam em:

```text
public/videos/
```

Arquivos usados hoje:

- `projeto-next.mp4`
- `sistema-chamados.mp4`
- `street-foods.mp4`
- `tdb-barbearia.mp4`

Eles aparecem na seção "Demonstrações" e também como botão nos cards dos projetos.
