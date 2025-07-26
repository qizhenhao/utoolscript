const { keyboard, Key, mouse, straightTo, centerOf } = require("@nut-tree/nut-js");

async function simulateKeyboardInput() {
    try {
        // 设置键盘延迟（可选）
        keyboard.config.autoDelayMs = 50;
        
        // 配置终端
        await keyboard.type('configure terminal');
        console.log('Simulated typing: configure terminal');
        // 模拟 Ctrl + P
        await keyboard.pressKey(Key.LeftControl, Key.P);
        await keyboard.releaseKey(Key.LeftControl, Key.P);
        console.log('Simulated Ctrl + P');

        // 模拟 Enter
        await keyboard.pressKey(Key.Enter);
        await keyboard.releaseKey(Key.Enter);
        console.log('Simulated Enter');

        // 模拟输入 'switch2024'
        await keyboard.type('switch2024');
        console.log('Simulated typing: switch2024');

        // 模拟 Enter
        await keyboard.pressKey(Key.Enter);
        await keyboard.releaseKey(Key.Enter);
        console.log('Simulated Enter');

        // 模拟输入 'bash'
        await keyboard.type('bash');
        console.log('Simulated typing: bash');

        // 模拟 Enter
        await keyboard.pressKey(Key.Enter);
        await keyboard.releaseKey(Key.Enter);
        console.log('Simulated Enter');

        // 模拟输入 'sudo su'
        await keyboard.type('sudo su');
        console.log('Simulated typing: sudo su');

        // 模拟 Enter
        await keyboard.pressKey(Key.Enter);
        await keyboard.releaseKey(Key.Enter);
        console.log('Simulated final Enter');

        console.log('Keyboard input simulation completed successfully.');
    } catch (err) {
        console.error(`Error during keyboard simulation: ${err.message}`);
    }
}

// 执行函数
simulateKeyboardInput();