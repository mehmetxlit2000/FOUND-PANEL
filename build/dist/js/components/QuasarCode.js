export const template = `
<section id="q-not-panel">
    <div class="q-container">
        <div class="q-content">
            <div class="q-button-groups">
                <button class="q-not-button" quasar-not-type="JavaScript">JavaScript</button>
                <button class="q-not-button" quasar-not-type="HTML">HTML</button>
                <button class="q-not-button" quasar-not-type="CSS">CSS</button>
            </div>
            <div class="q-cards">
                <p class="q-not-title">JAVASCRİPT</p>
                <div class="q-card">
                    <p class="q-not-title">XXXXX</p>
                    <span class="q-not"> <span class="q-not-title">xxxx</span> xxxxx</span>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="kt-kod">
    import random

    class Oyuncu:
    def __init__(self, isim, can=100):
    self.isim = isim
    self.can = can

    def hasar_al(self, miktar):
    # canı sıfırın altına düşürme
    self.can = max(0, self.can - miktar)
    if self.can == 0:
    print(f"{self.isim} öldü")
    return False
    return True

    oyuncu = Oyuncu("Ali")
    for i in range(3):
    oyuncu.hasar_al(random.randint(10, 50))
</div>

`;