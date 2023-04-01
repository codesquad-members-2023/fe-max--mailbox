export async function initClickEvent() {
    const button = document.querySelector("button");
    const getTextInfo = document.querySelectorAll(".text-info");
    const townInfo = [];
    for (const p of getTextInfo) {
        townInfo.push(p);
    }
    const hasMailboxTown = document.querySelectorAll(".mail-box");
    const hasMailboxTownList = [];
    const mailboxSizeList = [];
    const townsByMailboxSize = [];
    const delay = (time) => new Promise((resolve) => setTimeout(resolve, 1000));

    button.addEventListener("click", async () => {
        await delay(1000);
        for (const town of hasMailboxTown) {
            hasMailboxTownList.push(town.textContent[0]);
        }
        const townNames = hasMailboxTownList.join(", ");
        const townCount = hasMailboxTown.length;

        townInfo[0].textContent = `${townNames}총 ${townCount}개의 마을입니다.`;

        for (const town of hasMailboxTown) {
            mailboxSizeList.push(town.id);
        }
        mailboxSizeList.sort((a, b) => b - a);

        for (const mailboxSize of mailboxSizeList) {
            for (const town of hasMailboxTown) {
                if (town.id === mailboxSize) {
                    townsByMailboxSize.push(town.textContent[0]);
                }
            }
        }

        const mailboxSizeOrder = townsByMailboxSize.join(", ");
        townInfo[1].textContent = `우체통의 크기는 ${mailboxSizeOrder}순입니다.`;

        await delay(1000);
        for (const town of hasMailboxTown) {
            town.style.borderColor = "red";
        }
    });
}
