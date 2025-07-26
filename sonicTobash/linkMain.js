const { execFile } = require('child_process');
const path = require('path');

// 直接调用目标脚本（不关心是否失败）
execFile('node', [
  'C:/Users/q01585/app/utoolscript/sonicTobash/main.js' // 替换为你的实际路径
], (error, stdout, stderr) => {
  // 完全忽略错误，只显示通知（模仿图片中的逻辑）
  console.log('执行完成（无论成功与否）');
});