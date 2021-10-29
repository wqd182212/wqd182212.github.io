// 恢复伪元素为初始
function recover(element) {
    element.className = element.className.replace("check", "copy");
}
// 获取所有标签为code的dom
const codeList = document.querySelectorAll("code");
for (let i of codeList) {
    i.addEventListener("click", () => {
        // 防止短时间内多次点击
        if (i.className.includes("check")) {
            return;
        }
        // 创建虚拟input
        const input = document.createElement("textarea");
        document.body.appendChild(input);
        input.value = (i.innerText).trim();
        input.select();
        document.execCommand("copy");
        // 删除用于复制功能的textarea的dom
        const textareaDom = document.querySelector("textarea");
        textareaDom.remove();
        i.className = i.className.replace("copy", "check");
        setTimeout(() => recover(i), 1000);
    });
}