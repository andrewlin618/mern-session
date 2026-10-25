# MERN Session Starter

2020 年做的登录模板：Express 用 session 记住登录状态，React 前端按权限显示页面。后来 AcePilot 等项目的登录代码都是从这里来的。

- **Home**：公开页面，谁都能看
- **Dashboard**：登录后才能看，没登录会跳到登录页
- **Admin**：只有管理员能看，会列出所有用户
- **Profile**：`/profile/<用户名>`，任何人的个人主页
- **Login / Signup**：登录和注册

用户先存在 `data/users.json` 里（演示用，服务器重启后新注册的用户就没了），还没接数据库。

## 运行

前端用的是 Create React App 3，需要 Node 14。

```bash
npm install
cd client && npm install && cd ..
npm run dev        # 前端 http://localhost:3000，后端 http://localhost:5001
```

上线前设置 `SESSION_SECRET` 环境变量。

`react-express-heroku` 分支是同一时期的另一份同类模板，原来是单独的文件夹，2026 年并进来保存。
