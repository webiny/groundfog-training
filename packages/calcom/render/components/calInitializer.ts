// @ts-nocheck
export function init(C = window, A = "https://cal.com/embed.js", L = "init") {
    const p = function (a, ar) {
        a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
        C.Cal ||
        function (...args) {
            const cal = C.Cal;
            const ar = args;
            if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement("script")).src = A;
                cal.loaded = true;
            }
            if (ar[0] === L) {
                const api = function (...args) {
                    p(api, args);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                typeof namespace === "string"
                    ? (cal.ns[namespace] = api) && p(api, ar)
                    : p(cal, ar);
                return;
            }
            p(cal, ar);
        };
}
