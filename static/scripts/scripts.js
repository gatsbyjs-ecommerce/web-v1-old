/*eslint-disable */

(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 841170, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script');
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

!(function(e, n, t, r) {
  function o() {
    try {
      var e;
      if (
        (e =
          'string' == typeof this.response
            ? JSON.parse(this.response)
            : this.response).url
      ) {
        var t = n.getElementsByTagName('script')[0],
          r = n.createElement('script');
        (r.async = !0), (r.src = e.url), t.parentNode.insertBefore(r, t);
      }
    } catch (e) {}
  }
  var s,
    p,
    a,
    i = [],
    c = [];
  (e[t] = {
    init: function() {
      s = arguments;
      var e = {
        then: function(n) {
          return c.push({ type: 't', next: n }), e;
        },
        catch: function(n) {
          return c.push({ type: 'c', next: n }), e;
        },
      };
      return e;
    },
    on: function() {
      i.push(arguments);
    },
    render: function() {
      p = arguments;
    },
    destroy: function() {
      a = arguments;
    },
  }),
    (e.__onWebMessengerHostReady__ = function(n) {
      if ((delete e.__onWebMessengerHostReady__, (e[t] = n), s))
        for (var r = n.init.apply(n, s), o = 0; o < c.length; o++) {
          var u = c[o];
          r = 't' === u.type ? r.then(u.next) : r.catch(u.next);
        }
      p && n.render.apply(n, p), a && n.destroy.apply(n, a);
      for (o = 0; o < i.length; o++) n.on.apply(n, i[o]);
    });
  var u = new XMLHttpRequest();
  u.addEventListener('load', o),
    u.open('GET', 'https://' + r + '.webloader.smooch.io/', !0),
    (u.responseType = 'json'),
    u.send();
})(window, document, 'Smooch', '5ac9c610ace37a00225d098c');

// Smooch.init({ appId: '5ac9c610ace37a00225d098c' });

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-1390187-40');

(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TXMFKLS');
