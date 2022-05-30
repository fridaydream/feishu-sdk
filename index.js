// import * as lark from "@larksuiteoapi/allcore";  // typescript
const lark = require("@larksuiteoapi/allcore");

// 企业自建应用的配置
// appID、appSecret: "开发者后台" -> "凭证与基础信息" -> 应用凭证（App ID、App Secret）
// verificationToken、encryptKey："开发者后台" -> "事件订阅" -> 事件订阅（Verification Token、Encrypt Key）。
const appSettings = lark.newInternalAppSettings({
    appID: "cli_a21ecc60fafc900c",
    appSecret: "l91ULj6oxc0CcjyhPZyZyhbrYOFKdGZH",
    encryptKey: "UpyzTE09FrClFEjSwnhUhhfw5RYQ137q",
    verificationToken: "STieFXw649K5Q5VATBn6ZfOPhGHhMnKw",
})

// 当前访问的是飞书，使用默认本地内存存储、默认控制台日志输出（Error级别），更多可选配置，请看：README.zh.md -> 如何构建整体配置（Config）。
const conf = lark.newConfig(lark.Domain.FeiShu, appSettings, {
    loggerLevel: lark.LoggerLevel.ERROR,
})

// 设置 首次启用应用 事件的处理者
lark.event.setTypeHandler(conf, "app_open", (ctx, event) => {
    // 打印请求的Request ID
    console.log(ctx.getRequestID());
    // 打印事件
    console.log(event);
})

lark.event.startServer(conf, 8089)