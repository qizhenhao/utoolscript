const { keyboard, Key } = require("@nut-tree/nut-js");

// 新增的通用操作函数
async function pressEnter() {
    await keyboard.pressKey(Key.Enter);
    await keyboard.releaseKey(Key.Enter);
    console.log('Simulated Enter');
}

async function typeText(text) {
    await keyboard.type(text);
    console.log(`Simulated typing: ${text}`);
}

async function pressCombo(...keys) {
    await keyboard.pressKey(...keys);
    await keyboard.releaseKey(...keys);
    console.log(`Simulated ${keys.join(' + ')}`);
}

// 原有流程拆分为独立步骤
async function configureTerminal() {
    await typeText('configure terminal');
    await pressEnter();
}

async function sendCtrlP() {
    await pressCombo(Key.LeftControl, Key.P);
    await pressEnter();
    await delay(500);
    console.log('Sent Ctrl + P');
}

async function enterPassword() {
    await typeText('switch2024');
    await pressEnter();
    await delay(500);
}

async function enterBashShell() {
    await typeText('bash');
    await pressEnter();
}

async function gainRootAccess() {
    await typeText('sudo su');
    await pressEnter();
}

// 重构后的主函数
async function simulateKeyboardInput() {
    try {
        keyboard.config.autoDelayMs = 25;
        
        await configureTerminal();
        await sendCtrlP();
        await enterPassword();
        await enterBashShell();
        await gainRootAccess();

        console.log('Keyboard input simulation completed successfully.');
    } catch (err) {
        console.error(`Error during keyboard simulation: ${err.message}`);
    }
}

// 保留原有 delay 函数
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

simulateKeyboardInput();