# React Typescript Template

React + Typescript + Webpack Template

## 安装指南

`npm install` or `yarn` or `pnpm i`

## 使用示例

### 启动项目

`npm run start` or `npm run dev`

### 项目打包

`npm run build`

### 打包分析

`npm run analyze`

## 技术栈

`React@18`、`Typescript@5.3`

## 代码提交规范

example: feat(ifu): Add Intl

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### Format

`git commit -m 'fix: todo'`

`git commit -m 'fix(something): todo'`

`git commit -m 'perf: ⚡todo'`

`git commit -m 'perf(something): ⚡todo'`

## emoji指南

| emoji           | emoji代码                  | Commit说明            |
| --------------- | -------------------------- | --------------------- |
| 🎨 (调色板)     | :art:                      | 改进代码结构/代码格式 |
| ⚡️ (闪电)      | :zap:                      | 提升性能              |
| 🐎 (赛马)       | :racehorse:                | 提升性能              |
| 🔥 (火焰)       | :fire:                     | 移除代码或文件        |
| 🐛 (bug)        | :bug:                      | 修复 bug              |
| 🚑 (急救车)     | :ambulance:                | 重要补丁              |
| ✨ (火花)       | :sparkles:                 | 引入新功能            |
| 📝 (铅笔)       | :pencil:                   | 撰写文档              |
| 🚀 (火箭)       | :rocket:                   | 部署功能              |
| 💄 (口红)       | :lipstick:                 | 更新 UI 和样式文件    |
| 🎉 (庆祝)       | :tada:                     | 初次提交              |
| ✅ (白色复选框) | :white_check_mark:         | 增加测试              |
| 🔒 (锁)         | :lock:                     | 修复安全问题          |
| 🍎 (苹果)       | :apple:                    | 修复 macOS 下的问题   |
| 🐧 (企鹅)       | :penguin:                  | 修复 Linux 下的问题   |
| 🏁 (旗帜)       | :checked_flag:             | 修复 Windows 下的问题 |
| 🔖 (书签)       | :bookmark:                 | 发行/版本标签         |
| 🚨 (警车灯)     | :rotating_light:           | 移除 linter警告       |
| 🚧 (施工)       | :construction:             | 工作进行中            |
| 💚 (绿心)       | :green_heart:              | 修复 CI 构建问题      |
| ⬇️ (下降箭头)   | :arrow_down:               | 降级依赖              |
| ⬆️ (上升箭头)   | :arrow_up:                 | 升级依赖              |
| 👷 (工人)       | :construction_worker:      | 添加 CI 构建系统      |
| 📈 (上升趋势图) | :chart_with_upwards_trend: | 添加分析或跟踪代码    |
| 🔨 (锤子)       | :hammer:                   | 重大重构              |
| ➖ (减号)       | :heavy_minus_sign:         | 减少一个依赖          |
| 🐳 (鲸鱼)       | :whale:                    | Docker 相关工作       |
| ➕ (加号)       | :heavy_plus_sign:          | 增加一个依赖          |
| 🔧 (扳手)       | :wrench:                   | 修改配置文件          |
| 🌐 (地球)       | :globe_with_meridians:     | 国际化与本地化        |
| ✏️ (铅笔)       | :pencil2:                  | 修复 typo             |

## 测试

待补充

## 部署

待补充

## 版本控制

版本发布格式为 X.Y.Z

- X：大版本，设计重构或重大升级
- Y：新功能上线
- Z：BUG FIX

标记修改 `src/index.tsx` 下的版本输出信息。以及 `package.json` 下版本。同时每一次发版需要通过 `git tag -a <tagname> -m "版本信息说明"` 方式进行标记

```bash
git tag -a v1.0.0 -m "版本 1.0.0
====
**发布日期**：2024-02-23

**主要特性**：
- 新增了前端性能优化功能
- 引入了新的组件库支持

**修复的问题**：
- 解决了页面加载延迟的问题 (#123)
- 修复了在特定条件下 UI 显示不一致的问题 (#124)

感谢所有为此版本做出贡献的社区成员！"

# 查看标签详情
git show v1.0.0
```

## 贡献者

- Author: @pureJim
