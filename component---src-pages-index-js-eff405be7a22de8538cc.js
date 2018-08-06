(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    119: function(e, a, t) {
      var n;
      e.exports = ((n = t(121)) && n.default) || n;
    },
    120: function(e) {
      e.exports = {
        data: {
          site: { siteMetadata: { title: "Adam Gerbens' Project Page" } },
        },
      };
    },
    121: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(1),
        r = t.n(n),
        i = t(20),
        c = t.n(i),
        l = t(46),
        o = t(5),
        s = function(e) {
          var a = e.location,
            t = o.a.getResourcesForPathname(a.pathname);
          return r.a.createElement(l.a, { location: a, pageResources: t });
        };
      (s.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = s);
    },
    122: function(e, a, t) {},
    124: function(e, a, t) {},
    126: function(e, a, t) {},
    129: function(e, a, t) {
      'use strict';
      var n = t(120),
        r = t(1),
        i = t.n(r),
        c = t(20),
        l = t.n(c),
        o = t(130),
        s = t.n(o),
        m = t(118),
        u = t.n(m),
        d = (t(119), i.a.createContext({})),
        p = function(e) {
          return i.a.createElement(d.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      (p.propTypes = {
        data: l.a.object,
        query: l.a.string.isRequired,
        render: l.a.func,
        children: l.a.func,
      }),
        t(122);
      var f = function() {
          return i.a.createElement(
            'div',
            { className: 'Header' },
            i.a.createElement(
              'div',
              { className: 'HeaderGroup' },
              i.a.createElement(
                u.a,
                { exact: !0, to: '/', activeClassName: 'active' },
                'Home'
              ),
              i.a.createElement(
                u.a,
                { exact: !0, to: '/work', activeClassName: 'active' },
                'Work'
              ),
              i.a.createElement(
                u.a,
                { exact: !0, to: '/contact', activeClassName: 'active' },
                'Contact'
              )
            )
          );
        },
        v = function() {
          return i.a.createElement('div', {
            style: {
              background: 'lightgray',
              maxWidth: 1024,
              padding: '50px 0px',
              margin: '10px auto',
            },
          });
        },
        h = (t(124),
        t(126),
        function(e) {
          var a = e.children;
          return (
            e.data,
            i.a.createElement(p, {
              query: '755544856',
              render: function(e) {
                return i.a.createElement(
                  r.Fragment,
                  null,
                  i.a.createElement(s.a, {
                    title: e.site.siteMetadata.title,
                    meta: [
                      {
                        name: 'description',
                        content: 'Personal portfolio site for Adam Gerbens',
                      },
                      {
                        name: 'keywords',
                        content:
                          'adam,gerbens,web,application,developer,portfolio',
                      },
                    ],
                  }),
                  i.a.createElement(f, {
                    siteTitle: e.site.siteMetadata.title,
                  }),
                  a,
                  i.a.createElement(v, null)
                );
              },
              data: n,
            })
          );
        });
      (h.propTypes = { children: l.a.node.isRequired }), (a.a = h);
    },
    239: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(1),
        r = t.n(n),
        i = t(118),
        c = t.n(i),
        l = t(129);
      function o() {
        return r.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '32',
            height: '32',
            viewBox: '0 0 24 24',
          },
          r.a.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          r.a.createElement('path', {
            d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
            fill: 'gold',
          })
        );
      }
      function s() {
        return r.a.createElement(
          'span',
          { style: { display: 'flex', alignItems: 'center' } },
          r.a.createElement(o, null),
          r.a.createElement(
            'p',
            { className: 'warning' },
            'Under construction. I will be adding content and making the site responsive in the coming days.'
          )
        );
      }
      t(271),
        (a.default = function() {
          return r.a.createElement(
            l.a,
            null,
            r.a.createElement(
              'div',
              { className: 'Hero' },
              r.a.createElement(
                'div',
                { className: 'HeroGroup' },
                r.a.createElement(
                  'h1',
                  null,
                  'Professional Web Application Developer'
                ),
                r.a.createElement(
                  'p',
                  null,
                  "Hi! I'm Adam Gerbens, a Full-Stack Web Developer living in Mesa, AZ."
                ),
                r.a.createElement(
                  'p',
                  null,
                  'I have been building interactive web applications for the last four years, focusing primarily on modern javascript development with React and Node.js.'
                ),
                r.a.createElement(
                  'p',
                  null,
                  'For inquiries, please send me an email at',
                  ' ',
                  r.a.createElement(
                    'a',
                    { href: 'mailto:adam.gerbens@gmail.com' },
                    'adam.gerbens@gmail.com'
                  ),
                  ', or check the',
                  ' ',
                  r.a.createElement(
                    c.a,
                    { exact: !0, to: '/contact' },
                    'contact page'
                  ),
                  ' ',
                  'for more information.'
                ),
                r.a.createElement(s, null)
              )
            )
          );
        });
    },
    271: function(e, a, t) {},
  },
]);
//# sourceMappingURL=component---src-pages-index-js-eff405be7a22de8538cc.js.map
