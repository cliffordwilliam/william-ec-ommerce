# william-ec-ommerce

# add script & packages in package.json

```json
{
  "name": "william-ec-ommerce",
  "version": "1.0.0",
  "description": "��#\u0000 \u0000w\u0000i\u0000l\u0000l\u0000i\u0000a\u0000m\u0000-\u0000e\u0000c\u0000-\u0000o\u0000m\u0000m\u0000e\u0000r\u0000c\u0000e\u0000\r\u0000 \u0000#\u0000 \u0000w\u0000i\u0000l\u0000l\u0000i\u0000a\u0000m\u0000-\u0000e\u0000c\u0000-\u0000o\u0000m\u0000m\u0000e\u0000r\u0000c\u0000e\u0000\r\u0000 \u0000",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.17",
    "nodemon": "^3.0.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "@prisma/client": "^5.9.1",
    "express": "^4.18.2",
    "prisma": "^5.9.1"
  }
}
```

# create nodemon config nodemon.json

```bash
{ "watch": ["src"], "ext": ".js,.ts", "exec": "npx ts-node ./src/index.ts " }
```

# init ts + prisma and start app

```bash
npx prisma init
npx tsc --init
npm start
```

# edit the env landlord + port here also

2 free supabase only, try sql elephant next time / convex

# create simple model to test

```prisma
model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

# migrate + push

```bash
npx prisma generate
npx prisma db push
```

# see

```bash
npx prisma studio
```

# TODO deploy this to vercel as be?

see this
