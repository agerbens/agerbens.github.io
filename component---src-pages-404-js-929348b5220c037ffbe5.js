(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    119: function(e, t, a) {
      var n;
      e.exports = ((n = a(121)) && n.default) || n;
    },
    120: function(e) {
      e.exports = {
        data: {
          site: { siteMetadata: { title: "Adam Gerbens' Project Page" } },
        },
      };
    },
    121: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        i = a(20),
        c = a.n(i),
        o = a(46),
        u = a(5),
        l = function(e) {
          var t = e.location,
            a = u.a.getResourcesForPathname(t.pathname);
          return r.a.createElement(o.a, { location: t, pageResources: a });
        };
      (l.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (t.default = l);
    },
    122: function(e, t, a) {},
    124: function(e, t, a) {},
    126: function(e, t, a) {},
    129: function(e, t, a) {
      'use strict';
      var n = a(120),
        r = a(1),
        i = a.n(r),
        c = a(20),
        o = a.n(c),
        u = a(130),
        l = a.n(u),
        s = a(118),
        d = a.n(s),
        m = (a(119), i.a.createContext({})),
        p = function(e) {
          return i.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)');
          });
        };
      (p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }),
        a(122);
      var f = function() {
          return i.a.createElement(
            'div',
            { className: 'Header' },
            i.a.createElement(
              'div',
              { className: 'HeaderGroup' },
              i.a.createElement(
                d.a,
                { exact: !0, to: '/', activeClassName: 'active' },
                'Home'
              ),
              i.a.createElement(
                d.a,
                { exact: !0, to: '/work', activeClassName: 'active' },
                'Work'
              ),
              i.a.createElement(
                d.a,
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
        E = (a(124),
        a(126),
        function(e) {
          var t = e.children;
          return (
            e.data,
            i.a.createElement(p, {
              query: '755544856',
              render: function(e) {
                return i.a.createElement(
                  r.Fragment,
                  null,
                  i.a.createElement(l.a, {
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
                  t,
                  i.a.createElement(v, null)
                );
              },
              data: n,
            })
          );
        });
      (E.propTypes = { children: o.a.node.isRequired }), (t.a = E);
    },
    235: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        i = a(129);
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement('h1', null, 'NOT FOUND'),
          r.a.createElement(
            'p',
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-929348b5220c037ffbe5.js.map
