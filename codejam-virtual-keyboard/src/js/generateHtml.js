/* eslint-disable no-useless-escape */
document.getElementById('container').innerHTML = `
    <textarea id="textarea" rows="9" lang="ru" contenteditable></textarea>
    <div id="keyboard">
        <div class="first-row">
            <div id="\`" class="symbol">
                <span class="off">\`</span>
                <span id="~" class="on">~</span>
            </div>
            <div id="1" class="symbol">
                <span class="off">1</span>
                <span id="!" class="on">!</span>
                <span class="on-ru">!</span>
            </div>
            <div id="2" class="symbol">
                <span class="off">2</span>
                <span id="@" class="on">@</span>
                <span class="on-ru">"</span>
            </div>
            <div id="3" class="symbol">
                <span class="off">3</span>
                <span id="#" class="on">#</span>
                <span class="on-ru">№</span>
            </div>
            <div id="4" class="symbol">
                <span class="off">4</span>
                <span id="$" class="on">$</span>
                <span class="on-ru">;</span>
            </div>
            <div id="5" class="symbol">
                <span class="off">5</span>
                <span id="%" class="on">%</span>
                <span class="on-ru">%</span>
            </div>
            <div id="6" class="symbol">
                <span class="off">6</span>
                <span id="^" class="on">^</span>
                <span class="on-ru">:</span>
            </div>
            <div id="7" class="symbol">
                <span class="off">7</span>
                <span id="&" class="on">&amp;</span>
                <span class="on-ru">?</span>
            </div>
            <div id="8" class="symbol">
                <span class="off">8</span>
                <span id="*" class="on">*</span>
                <span class="on-ru">*</span>
            </div>
            <div id="9" class="symbol">
                <span class="off">9</span>
                <span id="(" class="on">(</span>
                <span class="on-ru">(</span>
            </div>
            <div id="0" class="symbol">
                <span class="off">0</span>
                <span id=")" class="on">)</span>
                <span class="on-ru">)</span>
            </div>
            <div id="-" class="symbol">
                <span class="off">-</span>
                <span id="_" class="on">_</span>
                <span class="on-ru">_</span>
            </div>
            <div id="=" class="symbol">
                <span class="off">=</span>
                <span id="+" class="on">+</span>
                <span class="on-ru">+</span>
            </div>
            <div id="backspace" class="delete lastitem">Backspace</div>
        </div>
        <div class="second-row">
            <div id="tab" class="tab">tab</div>
            <div id="q" class="letter">q</div>
            <div id="w" class="letter">w</div>
            <div id="e" class="letter">e</div>
            <div id="r" class="letter">r</div>
            <div id="t" class="letter">t</div>
            <div id="y" class="letter">y</div>
            <div id="u" class="letter">u</div>
            <div id="i" class="letter">i</div>
            <div id="o" class="letter">o</div>
            <div id="p" class="letter">p</div>
            <div id="[" class="symbol">
                <span class="off">[</span>
                <span id="{" class="on">{</span>
            </div>
            <div id="]" class="symbol">
                <span class="off">]</span>
                <span id="}" class="on">}</span>
            </div>
            <div id="\" class="symbol lastitem">
                <span class="off">\</span>
                <span id="|" class="on">|</span>
                <span class="on-ru">/</span>
            </div>
            <div id="delete" >Del</div>
        </div>
        <div class="third-row">
            <div id="capslock" class="capslock">caps lock</div>
            <div id="a" class="letter">a</div>
            <div id="s" class="letter">s</div>
            <div id="d" class="letter">d</div>
            <div id="f" class="letter">f</div>
            <div id="g" class="letter">g</div>
            <div id="h" class="letter">h</div>
            <div id="j" class="letter">j</div>
            <div id="k" class="letter">k</div>
            <div id="l" class="letter">l</div>
            <div id=";" class="symbol">
                <span class="off">;</span>
                <span id=":" class="on">:</span>
            </div>
            <div id="'" class="symbol">
                <span class="off">'</span>
                <span id="&quot" class="on">&quot;</span>
            </div>
            <div id="enter" class="return lastitem">enter</div>
        </div>
        <div class="fourth-row">
            <div id="leftShift">Shift</div>
            <div id="z" class="letter">z</div>
            <div id="x" class="letter">x</div>
            <div id="c" class="letter">c</div>
            <div id="v" class="letter">v</div>
            <div id="b" class="letter">b</div>
            <div id="n" class="letter">n</div>
            <div id="m" class="letter">m</div>
            <div id="," class="symbol">
                <span class="off">,</span>
                <span id="<" class="on">&lt;</span>
            </div>
            <div id="." class="symbol">
                <span class="off">.</span>
                <span id=">" class="on">&gt;</span>
            </div>
            <div id="/" class="symbol">
                <span class="off">/</span>
                <span id="?" class="on">?</span>
                <span class="on-ru">,</span>
            </div>
            <div id="arrowup">↑</div>
            <div id="rightShift" class="right-shift lastitem">Shift</div>
        </div>
        <div class="fifth-row">
            <div id="leftControl">Ctrl</div>
            <div id="leftGroupNext">Win</div>
            <div id="leftAlt">Alt</div>
            <div id=" " class="space lastitem">&nbsp;</div>
            <div id="rightAlt">Alt</div>
            <div id="rightControl">Ctrl</div>
            <div id="arrowleft">←</div>
            <div id="arrowdown">↓</div>
            <div id="arrowright">→</div>
        </div>
    </div>
    <p class="changeLang">Change language using Shift + Alt</p>
`;
