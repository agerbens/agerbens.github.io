(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
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
        o = t(46),
        l = t(5),
        u = function(e) {
          var a = e.location,
            t = l.a.getResourcesForPathname(a.pathname);
          return r.a.createElement(o.a, { location: a, pageResources: t });
        };
      (u.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = u);
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
        o = t.n(c),
        l = t(130),
        u = t.n(l),
        d = t(118),
        s = t.n(d),
        m = (t(119), i.a.createContext({})),
        p = function(e) {
          return i.a.createElement(m.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      (p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
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
                s.a,
                { exact: !0, to: '/', activeClassName: 'active' },
                'Home'
              ),
              i.a.createElement(
                s.a,
                { exact: !0, to: '/work', activeClassName: 'active' },
                'Work'
              ),
              i.a.createElement(
                s.a,
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
        g = (t(124),
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
                  i.a.createElement(u.a, {
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
      (g.propTypes = { children: o.a.node.isRequired }), (a.a = g);
    },
    236: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(1),
        r = t.n(n),
        i = t(129);
      a.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement('div', {
            style: {
              margin: '0 auto',
              width: '100%',
              padding: '300px 50px',
              backgroundColor: 'black',
            },
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-contact-js-458ac6ce7c7b31ad7728.js.map
