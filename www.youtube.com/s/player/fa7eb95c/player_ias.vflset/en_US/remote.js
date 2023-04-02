(function (g) {
  var window = this;
  ("use strict");
  var t7 = function (a) {
      g.Tj(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ra()).toString(36)
      );
      return a;
    },
    u7 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.Vga(a.u, b, c);
    },
    Tmb = function (a) {
      if (a instanceof g.Fm) return a;
      if ("function" == typeof a.nk) return a.nk(!1);
      if (g.Ha(a)) {
        var b = 0,
          c = new g.Fm();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.N2;
            if (b in a) return g.Gm(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Umb = function (a, b, c) {
      if (g.Ha(a)) g.Hb(a, b, c);
      else
        for (a = Tmb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    Vmb = function (a, b) {
      var c = [];
      Umb(
        b,
        function (d) {
          try {
            var e = g.Yo.prototype.u.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.Bla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    Wmb = function (a, b) {
      Vmb(a, b).forEach(function (c) {
        g.Yo.prototype.remove.call(this, c);
      }, a);
    },
    Xmb = function (a) {
      if (a.oa) {
        if (a.oa.locationOverrideToken)
          return { locationOverrideToken: a.oa.locationOverrideToken };
        if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7)
          return { latitudeE7: a.oa.latitudeE7, longitudeE7: a.oa.longitudeE7 };
      }
      return null;
    },
    Ymb = function (a, b) {
      g.ob(a, b) || a.push(b);
    },
    Zmb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    $mb = function (a, b) {
      return g.Pc(a, b);
    },
    anb = function (a) {
      try {
        return g.Da.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    b8 = function (a) {
      if (g.Da.JSON)
        try {
          return g.Da.JSON.parse(a);
        } catch (b) {}
      return anb(a);
    },
    bnb = function (a, b, c, d) {
      var e = new g.Hj(null);
      a && g.Ij(e, a);
      b && g.Jj(e, b);
      c && g.Oj(e, c);
      d && (e.B = d);
      return e;
    },
    d8 = function (a, b) {
      g.lA[a] = !0;
      var c = g.jA();
      c && c.publish.apply(c, arguments);
      g.lA[a] = !1;
    },
    e8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.Ho();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        cnb(this, a.capabilities || ""),
        dnb(this, a.compatibleSenderThemes || ""),
        enb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    cnb = function (a, b) {
      a.capabilities.clear();
      g.Km(b.split(","), g.Qa($mb, fnb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    dnb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.Km(b.split(","), g.Qa($mb, gnb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    enb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    f8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    g8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    hnb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    inb = function (a) {
      return new f8(a);
    },
    jnb = function (a) {
      return Array.isArray(a) ? g.xh(a, inb) : [];
    },
    h8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    knb = function (a) {
      return Array.isArray(a) ? "[" + g.xh(a, h8).join(",") + "]" : "null";
    },
    lnb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    mnb = function (a) {
      return g.xh(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    nnb = function (a, b) {
      return g.kb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    i8 = function (a, b) {
      return g.kb(a, function (c) {
        return g8(c, b);
      });
    },
    onb = function () {
      var a = (0, g.iB)();
      a && Wmb(a, a.j.nk(!0));
    },
    j8 = function () {
      var a = g.lB("yt-remote-connected-devices") || [];
      g.Db(a);
      return a;
    },
    pnb = function (a) {
      if (g.pb(a)) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.xh(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    qnb = function (a) {
      g.kB("yt-remote-connected-devices", a, 86400);
    },
    k8 = function () {
      if (rnb) return rnb;
      var a = g.lB("yt-remote-device-id");
      a || ((a = lnb()), g.kB("yt-remote-device-id", a, 31536e3));
      for (var b = j8(), c = 1, d = a; g.ob(b, d); ) c++, (d = a + "#" + c);
      return (rnb = d);
    },
    snb = function () {
      var a = j8(),
        b = k8();
      g.nB() && g.Gb(a, b);
      a = pnb(a);
      if (g.pb(a))
        try {
          g.ax("remote_sid");
        } catch (c) {}
      else
        try {
          g.Zw("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    tnb = function () {
      return g.lB("yt-remote-session-browser-channel");
    },
    unb = function () {
      return g.lB("yt-remote-local-screens") || [];
    },
    vnb = function () {
      g.kB("yt-remote-lounge-token-expiration", !0, 86400);
    },
    wnb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.xh(unb(), function (d) {
          return d.loungeToken;
        }),
        c = g.xh(a, function (d) {
          return d.loungeToken;
        });
      g.$k(c, function (d) {
        return !g.ob(b, d);
      }) && vnb();
      g.kB("yt-remote-local-screens", a, 31536e3);
    },
    l8 = function (a) {
      a ||
        (g.mB("yt-remote-session-screen-id"),
        g.mB("yt-remote-session-video-id"));
      snb();
      a = j8();
      g.rb(a, k8());
      qnb(a);
    },
    xnb = function () {
      if (!m8) {
        var a = g.mp();
        a && (m8 = new g.Vo(a));
      }
    },
    ynb = function () {
      xnb();
      return m8 ? !!m8.get("yt-remote-use-staging-server") : !1;
    },
    znb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Anb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    Bnb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    n8 = function (a) {
      a.length
        ? Cnb(a.shift(), function () {
            n8(a);
          })
        : Dnb();
    },
    Enb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    Cnb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.mj(d, g.$p(a));
      (document.head || document.documentElement).appendChild(d);
    },
    Fnb = function () {
      var a = znb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    Dnb = function () {
      var a = Bnb();
      a && a(!1, "No cast extension found");
    },
    Hnb = function () {
      if (Gnb) {
        var a = 2,
          b = Bnb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        Cnb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          Dnb,
          c
        );
      }
    },
    Inb = function () {
      Hnb();
      var a = Fnb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      n8(a);
    },
    Knb = function () {
      Hnb();
      var a = Fnb();
      a.push.apply(a, g.u(Jnb.map(Enb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      n8(a);
    },
    Lnb = function () {
      this.j = o8();
      this.j.oo("/client_streamz/youtube/living_room/mdx/channel/opened", {
        hh: 3,
        gh: "channel_type",
      });
    },
    Mnb = function (a, b) {
      a.j.Jp("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    Nnb = function () {
      this.j = o8();
      this.j.oo("/client_streamz/youtube/living_room/mdx/channel/closed", {
        hh: 3,
        gh: "channel_type",
      });
    },
    Onb = function (a, b) {
      a.j.Jp("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    Pnb = function () {
      this.j = o8();
      this.j.oo(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { hh: 3, gh: "channel_type" }
      );
    },
    Qnb = function (a, b) {
      a.j.Jp(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    Rnb = function () {
      this.j = o8();
      this.j.oo("/client_streamz/youtube/living_room/mdx/channel/error", {
        hh: 3,
        gh: "channel_type",
      });
    },
    Snb = function (a, b) {
      a.j.Jp("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    Tnb = function () {
      this.j = o8();
      this.j.oo(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    Unb = function () {
      this.j = o8();
      this.j.oo(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    p8 = function (a, b, c) {
      g.C.call(this);
      this.I = null != c ? (0, g.Pa)(a, c) : a;
      this.Ji = b;
      this.D = (0, g.Pa)(this.MZ, this);
      this.j = !1;
      this.u = 0;
      this.B = this.Gc = null;
      this.C = [];
    },
    q8 = function (a, b, c) {
      g.C.call(this);
      this.C = null != c ? a.bind(c) : a;
      this.Ji = b;
      this.B = null;
      this.j = !1;
      this.u = 0;
      this.Gc = null;
    },
    Vnb = function (a) {
      a.Gc = g.yf(function () {
        a.Gc = null;
        a.j && !a.u && ((a.j = !1), Vnb(a));
      }, a.Ji);
      var b = a.B;
      a.B = null;
      a.C.apply(null, b);
    },
    r8 = function () {},
    Wnb = function () {
      g.eb.call(this, "p");
    },
    Xnb = function () {
      g.eb.call(this, "o");
    },
    Znb = function () {
      return (Ynb = Ynb || new g.sd());
    },
    $nb = function (a) {
      g.eb.call(this, "serverreachability", a);
    },
    s8 = function (a) {
      var b = Znb();
      b.dispatchEvent(new $nb(b, a));
    },
    aob = function (a) {
      g.eb.call(this, "statevent", a);
    },
    t8 = function (a) {
      var b = Znb();
      b.dispatchEvent(new aob(b, a));
    },
    bob = function (a, b, c, d) {
      g.eb.call(this, "timingevent", a);
      this.size = b;
      this.Az = d;
    },
    u8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Da.setTimeout(function () {
        a();
      }, b);
    },
    cob = function () {},
    v8 = function (a, b, c, d) {
      this.D = a;
      this.C = b;
      this.Dc = c;
      this.Ic = d || 1;
      this.jb = new g.Yj(this);
      this.Fb = 45e3;
      a = g.KI ? 125 : void 0;
      this.kb = new g.xf(a);
      this.Ma = null;
      this.B = !1;
      this.V = this.fb = this.J = this.Ra = this.Aa = this.Tb = this.Y = null;
      this.oa = [];
      this.j = null;
      this.ea = 0;
      this.I = this.ya = null;
      this.lc = -1;
      this.Ja = !1;
      this.tb = 0;
      this.Ya = null;
      this.hc = this.Ta = this.ac = this.Fa = !1;
      this.u = new dob();
    },
    dob = function () {
      this.B = null;
      this.j = "";
      this.u = !1;
    },
    fob = function (a, b, c) {
      a.Ra = 1;
      a.J = t7(b.clone());
      a.V = c;
      a.Fa = !0;
      eob(a, null);
    },
    eob = function (a, b) {
      a.Aa = Date.now();
      w8(a);
      a.fb = a.J.clone();
      u7(a.fb, "t", a.Ic);
      a.ea = 0;
      var c = a.D.Ra;
      a.u = new dob();
      a.j = gob(a.D, c ? b : null, !a.V);
      0 < a.tb && (a.Ya = new q8((0, g.Pa)(a.nQ, a, a.j), a.tb));
      a.jb.Pa(a.j, "readystatechange", a.PZ);
      b = a.Ma ? g.Xc(a.Ma) : {};
      a.V
        ? (a.ya || (a.ya = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.fb, a.ya, a.V, b))
        : ((a.ya = "GET"), a.j.send(a.fb, a.ya, null, b));
      s8(1);
    },
    hob = function (a) {
      return a.j ? "GET" == a.ya && 2 != a.Ra && a.D.df : !1;
    },
    lob = function (a, b, c) {
      for (var d = !0, e; !a.Ja && a.ea < c.length; )
        if (((e = iob(a, c)), e == x8)) {
          4 == b && ((a.I = 4), t8(14), (d = !1));
          break;
        } else if (e == job) {
          a.I = 4;
          t8(15);
          d = !1;
          break;
        } else kob(a, e);
      hob(a) && e != x8 && e != job && ((a.u.j = ""), (a.ea = 0));
      4 != b || 0 != c.length || a.u.u || ((a.I = 1), t8(16), (d = !1));
      a.B = a.B && d;
      d ? 0 < c.length && !a.hc && ((a.hc = !0), a.D.iN(a)) : (y8(a), z8(a));
    },
    iob = function (a, b) {
      var c = a.ea,
        d = b.indexOf("\n", c);
      if (-1 == d) return x8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return job;
      d += 1;
      if (d + c > b.length) return x8;
      b = b.slice(d, d + c);
      a.ea = d + c;
      return b;
    },
    w8 = function (a) {
      a.Tb = Date.now() + a.Fb;
      mob(a, a.Fb);
    },
    mob = function (a, b) {
      if (null != a.Y) throw Error("WatchDog timer not null");
      a.Y = u8((0, g.Pa)(a.NZ, a), b);
    },
    A8 = function (a) {
      a.Y && (g.Da.clearTimeout(a.Y), (a.Y = null));
    },
    z8 = function (a) {
      a.D.Qg() || a.Ja || nob(a.D, a);
    },
    y8 = function (a) {
      A8(a);
      g.Ya(a.Ya);
      a.Ya = null;
      a.kb.stop();
      a.jb.Ff();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    kob = function (a, b) {
      try {
        var c = a.D;
        if (0 != c.qh && (c.j == a || oob(c.u, a)))
          if (!a.Ta && oob(c.u, a) && 3 == c.qh) {
            try {
              var d = c.gf.j.parse(b);
            } catch (z) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.V) {
                    if (c.j)
                      if (c.j.Aa + 3e3 < a.Aa) B8(c), C8(c);
                      else break a;
                    pob(c);
                    t8(18);
                  }
                }
              else
                (c.Pd = e[1]),
                  0 < c.Pd - c.Ya &&
                    37500 > e[2] &&
                    c.Ta &&
                    0 == c.oa &&
                    !c.ea &&
                    (c.ea = u8((0, g.Pa)(c.QZ, c), 6e3));
              if (1 >= qob(c.u) && c.Wc) {
                try {
                  c.Wc();
                } catch (z) {}
                c.Wc = void 0;
              }
            } else D8(c, 11);
          } else if (((a.Ta || c.j == a) && B8(c), !g.Ob(b)))
            for (e = c.gf.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Ya = f[0];
              f = f[1];
              if (2 == c.qh)
                if ("c" == f[0]) {
                  c.C = f[1];
                  c.hc = f[2];
                  var h = f[3];
                  null != h && (c.oQ = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.jb = 1.5 * l);
                  d = c;
                  var m = a.GL();
                  if (m) {
                    var n = g.Fi(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.u;
                      !p.j &&
                        (g.Qb(n, "spdy") || g.Qb(n, "quic") || g.Qb(n, "h2")) &&
                        ((p.C = p.D),
                        (p.j = new Set()),
                        p.u && (rob(p, p.u), (p.u = null)));
                    }
                    if (d.Fa) {
                      var q = g.Fi(m, "X-HTTP-Session-Id");
                      q && ((d.pe = q), g.Tj(d.Ma, d.Fa, q));
                    }
                  }
                  c.qh = 3;
                  c.D && c.D.uQ();
                  c.Qc && (c.Od = Date.now() - a.Aa);
                  d = c;
                  var r = a;
                  d.Bd = sob(d, d.Ra ? d.hc : null, d.Ic);
                  if (r.Ta) {
                    tob(d.u, r);
                    var w = r,
                      x = d.jb;
                    x && w.setTimeout(x);
                    w.Y && (A8(w), w8(w));
                    d.j = r;
                  } else uob(d);
                  0 < c.B.length && E8(c);
                } else ("stop" != f[0] && "close" != f[0]) || D8(c, 7);
              else
                3 == c.qh &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? D8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.D && c.D.tQ(f),
                  (c.oa = 0));
            }
        s8(4);
      } catch (z) {}
    },
    vob = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    wob = function (a) {
      this.D = a || 10;
      g.Da.PerformanceNavigationTiming
        ? ((a = g.Da.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Da.chrome &&
            g.Da.chrome.loadTimes &&
            g.Da.chrome.loadTimes() &&
            g.Da.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.C = a ? this.D : 1;
      this.j = null;
      1 < this.C && (this.j = new Set());
      this.u = null;
      this.B = [];
    },
    xob = function (a) {
      return a.u ? !0 : a.j ? a.j.size >= a.C : !1;
    },
    qob = function (a) {
      return a.u ? 1 : a.j ? a.j.size : 0;
    },
    oob = function (a, b) {
      return a.u ? a.u == b : a.j ? a.j.has(b) : !1;
    },
    rob = function (a, b) {
      a.j ? a.j.add(b) : (a.u = b);
    },
    tob = function (a, b) {
      a.u && a.u == b ? (a.u = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    yob = function (a) {
      if (null != a.u) return a.B.concat(a.u.oa);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.B;
        a = g.t(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.oa);
        return b;
      }
      return g.vb(a.B);
    },
    zob = function (a, b) {
      var c = new cob();
      if (g.Da.Image) {
        var d = new Image();
        d.onload = g.Qa(F8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.Qa(F8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.Qa(F8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.Qa(F8, c, d, "TestLoadImage: timeout", !1, b);
        g.Da.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    F8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    Aob = function () {
      this.j = new r8();
    },
    Bob = function (a, b, c) {
      var d = c || "";
      try {
        g.Gj(a, function (e, f) {
          var h = e;
          g.Ia(e) && (h = g.di(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    G8 = function (a, b, c) {
      return c && c.I3 ? c.I3[a] || b : b;
    },
    Cob = function (a) {
      this.B = [];
      this.hc =
        this.Bd =
        this.Ma =
        this.Ic =
        this.j =
        this.pe =
        this.Fa =
        this.Ja =
        this.J =
        this.Tb =
        this.Y =
          null;
      this.wf = this.fb = 0;
      this.uf = G8("failFast", !1, a);
      this.Ta = this.ea = this.V = this.I = this.D = null;
      this.Dc = !0;
      this.Pd = this.Ya = -1;
      this.ac = this.oa = this.Aa = 0;
      this.tf = G8("baseRetryDelayMs", 5e3, a);
      this.If = G8("retryDelaySeedMs", 1e4, a);
      this.vf = G8("forwardChannelMaxRetries", 2, a);
      this.Hd = G8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.oe = (a && a.F7a) || void 0;
      this.df = (a && a.D7a) || !1;
      this.jb = void 0;
      this.Ra = (a && a.L8) || !1;
      this.C = "";
      this.u = new wob(a && a.q5a);
      this.gf = new Aob();
      this.Fb = (a && a.G5a) || !1;
      this.tb = (a && a.w5a) || !1;
      this.Fb && this.tb && (this.tb = !1);
      this.Pf = (a && a.k5a) || !1;
      a && a.I5a && (this.Dc = !1);
      this.Qc = (!this.Fb && this.Dc && a && a.u5a) || !1;
      this.ud = void 0;
      a && a.VU && 0 < a.VU && (this.ud = a.VU);
      this.Wc = void 0;
      this.Od = 0;
      this.kb = !1;
      this.lc = this.ya = null;
    },
    C8 = function (a) {
      a.j && (Dob(a), a.j.cancel(), (a.j = null));
    },
    Eob = function (a) {
      C8(a);
      a.V && (g.Da.clearTimeout(a.V), (a.V = null));
      B8(a);
      a.u.cancel();
      a.I && ("number" === typeof a.I && g.Da.clearTimeout(a.I), (a.I = null));
    },
    E8 = function (a) {
      xob(a.u) || a.I || ((a.I = !0), g.hf(a.qQ, a), (a.Aa = 0));
    },
    Gob = function (a, b) {
      if (qob(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
      if (a.I) return (a.B = b.oa.concat(a.B)), !0;
      if (1 == a.qh || 2 == a.qh || a.Aa >= (a.uf ? 0 : a.vf)) return !1;
      a.I = u8((0, g.Pa)(a.qQ, a, b), Fob(a, a.Aa));
      a.Aa++;
      return !0;
    },
    Iob = function (a, b) {
      var c;
      b ? (c = b.Dc) : (c = a.fb++);
      var d = a.Ma.clone();
      g.Tj(d, "SID", a.C);
      g.Tj(d, "RID", c);
      g.Tj(d, "AID", a.Ya);
      H8(a, d);
      a.J && a.Y && g.Xj(d, a.J, a.Y);
      c = new v8(a, a.C, c, a.Aa + 1);
      null === a.J && (c.Ma = a.Y);
      b && (a.B = b.oa.concat(a.B));
      b = Hob(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Hd) + Math.round(0.5 * a.Hd * Math.random())
      );
      rob(a.u, c);
      fob(c, d, b);
    },
    H8 = function (a, b) {
      a.Ja &&
        g.Gc(a.Ja, function (c, d) {
          g.Tj(b, d, c);
        });
      a.D &&
        g.Gj({}, function (c, d) {
          g.Tj(b, d, c);
        });
    },
    Hob = function (a, b, c) {
      c = Math.min(a.B.length, c);
      var d = a.D ? (0, g.Pa)(a.D.RZ, a.D, a) : null;
      a: for (var e = a.B, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              Bob(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.B.splice(0, c);
      b.oa = a;
      return d;
    },
    uob = function (a) {
      a.j || a.V || ((a.ac = 1), g.hf(a.pQ, a), (a.oa = 0));
    },
    pob = function (a) {
      if (a.j || a.V || 3 <= a.oa) return !1;
      a.ac++;
      a.V = u8((0, g.Pa)(a.pQ, a), Fob(a, a.oa));
      a.oa++;
      return !0;
    },
    Dob = function (a) {
      null != a.ya && (g.Da.clearTimeout(a.ya), (a.ya = null));
    },
    Job = function (a) {
      a.j = new v8(a, a.C, "rpc", a.ac);
      null === a.J && (a.j.Ma = a.Y);
      a.j.tb = 0;
      var b = a.Bd.clone();
      g.Tj(b, "RID", "rpc");
      g.Tj(b, "SID", a.C);
      g.Tj(b, "AID", a.Ya);
      g.Tj(b, "CI", a.Ta ? "0" : "1");
      !a.Ta && a.ud && g.Tj(b, "TO", a.ud);
      g.Tj(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.J && a.Y && g.Xj(b, a.J, a.Y);
      a.jb && a.j.setTimeout(a.jb);
      var c = a.j;
      a = a.hc;
      c.Ra = 1;
      c.J = t7(b.clone());
      c.V = null;
      c.Fa = !0;
      eob(c, a);
    },
    B8 = function (a) {
      null != a.ea && (g.Da.clearTimeout(a.ea), (a.ea = null));
    },
    nob = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        Dob(a);
        a.j = null;
        var d = 2;
      } else if (oob(a.u, b)) (c = b.oa), tob(a.u, b), (d = 1);
      else return;
      if (0 != a.qh)
        if (b.B)
          if (1 == d) {
            c = b.V ? b.V.length : 0;
            b = Date.now() - b.Aa;
            var e = a.Aa;
            d = Znb();
            d.dispatchEvent(new bob(d, c, b, e));
            E8(a);
          } else uob(a);
        else {
          var f = b.lc;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && Gob(a, b)) || (2 == d && pob(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.u), (b.B = b.B.concat(c))), e)
            ) {
              case 1:
                D8(a, 5);
                break;
              case 4:
                D8(a, 10);
                break;
              case 3:
                D8(a, 6);
                break;
              default:
                D8(a, 2);
            }
        }
    },
    Fob = function (a, b) {
      var c = a.tf + Math.floor(Math.random() * a.If);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.D && (c = null);
        var d = (0, g.Pa)(a.S8, a);
        c ||
          ((c = new g.Hj("//www.google.com/images/cleardot.gif")),
          (g.Da.location && "http" == g.Da.location.protocol) ||
            g.Ij(c, "https"),
          t7(c));
        zob(c.toString(), d);
      } else t8(2);
      a.qh = 0;
      a.D && a.D.sQ(b);
      Kob(a);
      Eob(a);
    },
    Kob = function (a) {
      a.qh = 0;
      a.lc = [];
      if (a.D) {
        var b = yob(a.u);
        if (0 != b.length || 0 != a.B.length)
          g.wb(a.lc, b),
            g.wb(a.lc, a.B),
            (a.u.B.length = 0),
            g.vb(a.B),
            (a.B.length = 0);
        a.D.rQ();
      }
    },
    Lob = function (a) {
      if (0 == a.qh) return a.lc;
      var b = [];
      g.wb(b, yob(a.u));
      g.wb(b, a.B);
      return b;
    },
    sob = function (a, b, c) {
      var d = g.Uj(c);
      "" != d.j
        ? (b && g.Jj(d, b + "." + d.j), g.Oj(d, d.C))
        : ((d = g.Da.location),
          (d = bnb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Fa;
      c = a.pe;
      b && c && g.Tj(d, b, c);
      g.Tj(d, "VER", a.oQ);
      H8(a, d);
      return d;
    },
    gob = function (a, b, c) {
      if (b && !a.Ra)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.df && !a.oe ? new g.yi(new g.Cj({ zX: !0 })) : new g.yi(a.oe);
      b.J = a.Ra;
      return b;
    },
    Mob = function () {},
    Nob = function () {
      if (g.He && !g.Bc(10))
        throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.sd.call(this);
      this.j = new Cob(b);
      this.I = a;
      this.u = (b && b.t4) || null;
      a = (b && b.s4) || null;
      b &&
        b.p5a &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.r6a) || null;
      b &&
        b.cV &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.cV)
          : (a = { "X-WebChannel-Content-Type": b.cV }));
      b &&
        b.vS &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.vS)
          : (a = { "X-WebChannel-Client-Profile": b.vS }));
      this.j.Tb = a;
      (a = b && b.q6a) && !g.Ob(a) && (this.j.J = a);
      this.J = (b && b.L8) || !1;
      this.D = (b && b.e7a) || !1;
      (b = b && b.E3) &&
        !g.Ob(b) &&
        ((this.j.Fa = b), g.Oc(this.u, b) && g.Sc(this.u, b));
      this.C = new I8(this);
    },
    Oob = function (a) {
      Wnb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.Kc(b)) ? g.Tc(b, this.j) : b)
        : (this.data = a);
    },
    Pob = function (a) {
      Xnb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    Qob = function (a, b) {
      this.u = a;
      this.j = b;
    },
    Rob = function (a) {
      return Lob(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.u.D ? anb(b) : b));
        return b;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Da.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new Sob(L8, a));
    },
    Sob = function (a) {
      g.eb.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.C = b;
      this.J = c;
      this.I = d || 1;
      this.u = 45e3;
      this.B = new g.Yj(this);
      this.D = new g.xf();
      this.D.setInterval(250);
    },
    Uob = function (a, b, c) {
      a.Lw = 1;
      a.gr = t7(b.clone());
      a.St = c;
      a.Fa = !0;
      Tob(a, null);
    },
    Vob = function (a, b, c, d, e) {
      a.Lw = 1;
      a.gr = t7(b.clone());
      a.St = null;
      a.Fa = c;
      e && (a.hX = !1);
      Tob(a, d);
    },
    Tob = function (a, b) {
      a.Kw = Date.now();
      O8(a);
      a.jr = a.gr.clone();
      u7(a.jr, "t", a.I);
      a.tE = 0;
      a.Ui = a.j.XI(a.j.xA() ? b : null);
      0 < a.VI && (a.rE = new q8((0, g.Pa)(a.vQ, a, a.Ui), a.VI));
      a.B.Pa(a.Ui, "readystatechange", a.TZ);
      b = a.Rt ? g.Xc(a.Rt) : {};
      a.St
        ? ((a.sE = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.Ui.send(a.jr, a.sE, a.St, b))
        : ((a.sE = "GET"),
          a.hX && !g.Cc && (b.Connection = "close"),
          a.Ui.send(a.jr, a.sE, null, b));
      a.j.Zm(1);
    },
    Yob = function (a, b) {
      var c = a.tE,
        d = b.indexOf("\n", c);
      if (-1 == d) return Wob;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Xob;
      d += 1;
      if (d + c > b.length) return Wob;
      b = b.slice(d, d + c);
      a.tE = d + c;
      return b;
    },
    $ob = function (a, b) {
      a.Kw = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.jr = a.gr.clone();
      g.Tj(a.jr, "DOMAIN", c);
      g.Tj(a.jr, "t", a.I);
      try {
        a.Dn = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.ir = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in R8) f = R8[f];
            else if (f in Zob) f = R8[f] = Zob[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Fd("b/12014412");
      c = g.Yd(d);
      a.Dn.open();
      a.Dn.write(g.Xd(c));
      a.Dn.close();
      a.Dn.parentWindow.m = (0, g.Pa)(a.q7, a);
      a.Dn.parentWindow.d = (0, g.Pa)(a.gW, a, !0);
      a.Dn.parentWindow.rpcClose = (0, g.Pa)(a.gW, a, !1);
      c = a.Dn.createElement("DIV");
      a.Dn.parentWindow.document.body.appendChild(c);
      d = g.Pd(a.jr.toString());
      d = g.oe(g.Kd(d));
      g.Fd("b/12014412");
      d = g.Yd('<iframe src="' + d + '"></iframe>');
      g.Yba(c, d);
      a.j.Zm(1);
    },
    O8 = function (a) {
      a.WI = Date.now() + a.u;
      apb(a, a.u);
    },
    apb = function (a, b) {
      if (null != a.Mw) throw Error("WatchDog timer not null");
      a.Mw = K8((0, g.Pa)(a.SZ, a), b);
    },
    bpb = function (a) {
      a.Mw && (g.Da.clearTimeout(a.Mw), (a.Mw = null));
    },
    Q8 = function (a) {
      a.j.Qg() || a.Qt || a.j.uE(a);
    },
    P8 = function (a) {
      bpb(a);
      g.Ya(a.rE);
      a.rE = null;
      a.D.stop();
      a.B.Ff();
      if (a.Ui) {
        var b = a.Ui;
        a.Ui = null;
        b.abort();
        b.dispose();
      }
      a.Dn && (a.Dn = null);
    },
    cpb = function (a, b) {
      try {
        a.j.wQ(a, b), a.j.Zm(4);
      } catch (c) {}
    },
    epb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        dpb(a, b, function (h) {
          h
            ? c(!0)
            : g.Da.setTimeout(function () {
                epb(a, b, c, d, f);
              }, f);
        });
      }
    },
    dpb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Da.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    fpb = function (a) {
      this.j = a;
      this.u = new r8();
    },
    gpb = function (a) {
      var b = T8(a.j, a.TA, "/mail/images/cleardot.gif");
      t7(b);
      epb(b.toString(), 5e3, (0, g.Pa)(a.D1, a), 3, 2e3);
      a.Zm(1);
    },
    hpb = function (a) {
      var b = a.j.I;
      if (null != b)
        M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
      else if (
        ((a.wj = new N8(a)),
        (a.wj.Rt = a.YI),
        (b = a.j),
        (b = T8(b, b.xA() ? a.wA : null, a.ZI)),
        M8(5),
        !g.He || g.Bc(10))
      )
        u7(b, "TYPE", "xmlhttp"), Vob(a.wj, b, !1, a.wA, !1);
      else {
        u7(b, "TYPE", "html");
        var c = a.wj;
        a = !!a.wA;
        c.Lw = 3;
        c.gr = t7(b.clone());
        $ob(c, a);
      }
    },
    ipb = function (a, b, c) {
      this.j = 1;
      this.u = [];
      this.B = [];
      this.D = new r8();
      this.Y = a || null;
      this.I = null != b ? b : null;
      this.V = c || !1;
    },
    jpb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    kpb = function (a, b, c, d) {
      g.eb.call(this, "timingevent", a);
      this.size = b;
      this.Az = d;
    },
    lpb = function (a) {
      g.eb.call(this, "serverreachability", a);
    },
    npb = function (a) {
      a.UZ(1, 0);
      a.vE = T8(a, null, a.aJ);
      mpb(a);
    },
    opb = function (a) {
      a.Gr && (a.Gr.abort(), (a.Gr = null));
      a.Ag && (a.Ag.cancel(), (a.Ag = null));
      a.Hp && (g.Da.clearTimeout(a.Hp), (a.Hp = null));
      V8(a);
      a.Ej && (a.Ej.cancel(), (a.Ej = null));
      a.lr && (g.Da.clearTimeout(a.lr), (a.lr = null));
    },
    ppb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.u.push(new jpb(a.VZ++, b));
      (2 != a.j && 3 != a.j) || mpb(a);
    },
    qpb = function (a) {
      var b = 0;
      a.Ag && b++;
      a.Ej && b++;
      return b;
    },
    mpb = function (a) {
      a.Ej || a.lr || ((a.lr = K8((0, g.Pa)(a.AQ, a), 0)), (a.Ow = 0));
    },
    tpb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.zA = Math.floor(1e5 * Math.random());
          b = a.zA++;
          var c = new N8(a, "", b);
          c.Rt = a.Jn;
          var d = rpb(a),
            e = a.vE.clone();
          g.Tj(e, "RID", b);
          g.Tj(e, "CVER", "1");
          W8(a, e);
          Uob(c, e, d);
          a.Ej = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? spb(a, b) : 0 == a.u.length || a.Ej || spb(a));
    },
    spb = function (a, b) {
      if (b)
        if (6 < a.Tt) {
          a.u = a.B.concat(a.u);
          a.B.length = 0;
          var c = a.zA - 1;
          b = rpb(a);
        } else (c = b.J), (b = b.St);
      else (c = a.zA++), (b = rpb(a));
      var d = a.vE.clone();
      g.Tj(d, "SID", a.C);
      g.Tj(d, "RID", c);
      g.Tj(d, "AID", a.Pw);
      W8(a, d);
      c = new N8(a, a.C, c, a.Ow + 1);
      c.Rt = a.Jn;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Ej = c;
      Uob(c, d, b);
    },
    W8 = function (a, b) {
      a.Ai &&
        (a = a.Ai.EQ()) &&
        g.Gc(a, function (c, d) {
          g.Tj(b, d, c);
        });
    },
    rpb = function (a) {
      var b = Math.min(a.u.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Tt && 0 < b) {
        var d = a.u[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { ww: e.ww }, f++) {
        e.ww = a.u[f].j;
        var h = a.u[f].map;
        e.ww = 6 >= a.Tt ? f : e.ww - d;
        try {
          g.Gc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.ww + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.ww + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.B = a.B.concat(a.u.splice(0, b));
      return c.join("&");
    },
    upb = function (a) {
      a.Ag ||
        a.Hp ||
        ((a.J = 1), (a.Hp = K8((0, g.Pa)(a.zQ, a), 0)), (a.Nw = 0));
    },
    wpb = function (a) {
      if (a.Ag || a.Hp || 3 <= a.Nw) return !1;
      a.J++;
      a.Hp = K8((0, g.Pa)(a.zQ, a), vpb(a, a.Nw));
      a.Nw++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.kI = null == a.I ? c : !a.I;
      a.Kn = b.Gp;
      a.V || npb(a);
    },
    V8 = function (a) {
      null != a.Ut && (g.Da.clearTimeout(a.Ut), (a.Ut = null));
    },
    vpb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ai && (c = null);
        var d = (0, g.Pa)(a.Q8, a);
        c || ((c = new g.Hj("//www.google.com/images/cleardot.gif")), t7(c));
        dpb(c.toString(), 1e4, d);
      } else M8(2);
      xpb(a, b);
    },
    xpb = function (a, b) {
      a.j = 0;
      a.Ai && a.Ai.BQ(b);
      ypb(a);
      opb(a);
    },
    ypb = function (a) {
      a.j = 0;
      a.Kn = -1;
      if (a.Ai)
        if (0 == a.B.length && 0 == a.u.length) a.Ai.bJ();
        else {
          var b = g.vb(a.B),
            c = g.vb(a.u);
          a.B.length = 0;
          a.u.length = 0;
          a.Ai.bJ(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.Uj(c);
      if ("" != d.j) b && g.Jj(d, b + "." + d.j), g.Oj(d, d.C);
      else {
        var e = window.location;
        d = bnb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.yA &&
        g.Gc(a.yA, function (f, h) {
          g.Tj(d, h, f);
        });
      g.Tj(d, "VER", a.Tt);
      W8(a, d);
      return d;
    },
    zpb = function () {},
    Apb = function () {
      this.j = [];
      this.u = [];
    },
    Bpb = function (a) {
      g.eb.call(this, "channelMessage");
      this.message = a;
    },
    Cpb = function (a) {
      g.eb.call(this, "channelError");
      this.error = a;
    },
    Dpb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.C.call(this);
      this.j = new g.qo(this.i7, 0, this);
      g.D(this, this.j);
      this.Ji = 5e3;
      this.u = 0;
      if ("function" === typeof a) b && (a = (0, g.Pa)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.Pa)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.B = a;
    },
    Epb = function () {},
    o8 = function () {
      if (!Z8) {
        Z8 = new g.Df(new Epb());
        var a = g.pw("client_streamz_web_flush_count", -1);
        -1 !== a && (Z8.C = a);
      }
      return Z8;
    },
    Fpb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Aa = a;
      this.J = b;
      this.B = new g.Uo();
      this.u = new Y8(this.o8, this);
      this.j = null;
      this.ea = !1;
      this.I = null;
      this.Y = "";
      this.V = this.D = 0;
      this.C = [];
      this.Ra = c;
      this.oa = d;
      this.Ta = e;
      this.Ma = new Lnb();
      this.ya = new Nnb();
      this.Ja = new Pnb();
      this.Fa = new Rnb();
      this.Ya = new Tnb();
      this.fb = new Unb();
    },
    Gpb = function (a) {
      if (a.j) {
        var b = a.oa(),
          c = a.j.Jn || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.Jn = c;
      }
    },
    $8 = function (a) {
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.u = !0;
      a = a || document.location.href;
      var b = Number(g.ki(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.li(a) || "";
      a = g.Zb();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.Wb(a, "10.0") && (this.u = !1));
    },
    a9 = function (a, b) {
      var c = a.j;
      a.u && (c = "https://" + a.domain + a.port + a.j);
      return g.ui(c + b, {});
    },
    Hpb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.Qa(a.C, d, !0),
        onError: g.Qa(a.B, e),
        onTimeout: g.Qa(a.D, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.Pw(b, a);
    },
    Ipb = function (a, b) {
      g.sd.call(this);
      var c = this;
      this.pd = a();
      this.pd.subscribe("handlerOpened", this.ZZ, this);
      this.pd.subscribe("handlerClosed", this.XZ, this);
      this.pd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.pd.subscribe("handlerMessage", this.YZ, this);
      this.j = b;
    },
    Jpb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new Nob() : e;
      var f = void 0 === f ? new g.Uo() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Aa = c;
      this.D = f;
      this.V = null;
      this.Y = this.J = 0;
      this.channel = null;
      this.I = 0;
      this.B = new Y8(function () {
        d.B.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : qob(new Qob(h, h.j).j.u)) &&
          d.connect(d.V, d.J);
      });
      this.C = {};
      this.u = {};
      this.ea = !1;
      this.logger = null;
      this.oa = [];
      this.Fg = void 0;
      this.Ma = new Lnb();
      this.ya = new Nnb();
      this.Ja = new Pnb();
      this.Fa = new Rnb();
    },
    Kpb = function (a) {
      g.hd(a.channel, "m", function () {
        a.I = 3;
        a.B.reset();
        a.V = null;
        a.J = 0;
        for (var b = g.t(a.oa), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.oa = [];
        a.ma("webChannelOpened");
        Mnb(a.Ma, "WEB_CHANNEL");
      });
      g.hd(a.channel, "n", function () {
        a.I = 0;
        a.B.isActive() || a.ma("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : Rob(new Qob(b, b.j));
        c && (a.oa = [].concat(g.u(c)));
        Onb(a.ya, "WEB_CHANNEL");
      });
      g.hd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.B.start(), a.channel && a.channel.close())
          : a.ma("webChannelMessage", new Dpb(c[0], c[1]));
        a.Fg = b.statusCode;
        Qnb(a.Ja, "WEB_CHANNEL");
      });
      g.hd(a.channel, "o", function () {
        401 === a.Fg || a.B.start();
        a.ma("webChannelError");
        Snb(a.Fa, "WEB_CHANNEL");
      });
    },
    Lpb = function (a) {
      var b = a.Aa();
      b
        ? (a.C["x-youtube-lounge-xsrf-token"] = b)
        : delete a.C["x-youtube-lounge-xsrf-token"];
    },
    Mpb = function (a) {
      g.sd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.c_, this);
      this.j.subscribe("webChannelClosed", this.a_, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.b_, this);
    },
    Npb = function (a, b, c, d, e) {
      function f() {
        return new Fpb(a9(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.ow("enable_mdx_web_channel_desktop")
        ? new Mpb(function () {
            return new Jpb(a9(a, "/wc"), b, c);
          })
        : new Ipb(f, e);
    },
    Rpb = function () {
      var a = Opb;
      Ppb();
      b9.push(a);
      Qpb();
    },
    c9 = function (a, b) {
      Ppb();
      var c = Spb(a, String(b));
      g.pb(b9)
        ? Tpb(c)
        : (Qpb(),
          g.Hb(b9, function (d) {
            d(c);
          }));
    },
    d9 = function (a) {
      c9("CP", a);
    },
    Ppb = function () {
      b9 ||
        ((b9 = g.Fa("yt.mdx.remote.debug.handlers_") || []),
        g.Ea("yt.mdx.remote.debug.handlers_", b9));
    },
    Tpb = function (a) {
      var b = (e9 + 1) % 50;
      e9 = b;
      f9[b] = a;
      g9 || (g9 = 49 == b);
    },
    Qpb = function () {
      var a = b9;
      if (f9[0]) {
        var b = g9 ? e9 : -1;
        do {
          b = (b + 1) % 50;
          var c = f9[b];
          g.Hb(a, function (d) {
            d(c);
          });
        } while (b != e9);
        f9 = Array(50);
        e9 = -1;
        g9 = !1;
      }
    },
    Spb = function (a, b) {
      var c = (Date.now() - Upb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    h9 = function (a) {
      g.lC.call(this);
      this.I = a;
      this.screens = [];
    },
    Vpb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    Wpb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.Km(a.screens, function (f) {
        return !!nnb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = Vpb(a, b[d]) || c;
      return c;
    },
    Xpb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.Km(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    Ypb = function (a, b, c, d, e) {
      g.lC.call(this);
      this.B = a;
      this.J = b;
      this.C = c;
      this.I = d;
      this.D = e;
      this.u = 0;
      this.j = null;
      this.Gc = NaN;
    },
    j9 = function (a) {
      h9.call(this, "LocalScreenService");
      this.u = a;
      this.j = NaN;
      i9(this);
      this.info("Initializing with " + knb(this.screens));
    },
    Zpb = function (a) {
      if (a.screens.length) {
        var b = g.xh(a.screens, function (d) {
            return d.id;
          }),
          c = a9(a.u, "/pairing/get_lounge_token_batch");
        Hpb(
          a.u,
          c,
          { screen_ids: b.join(",") },
          (0, g.Pa)(a.d3, a),
          (0, g.Pa)(a.b3, a)
        );
      }
    },
    i9 = function (a) {
      if (g.ow("deprecate_pair_servlet_enabled")) return Wpb(a, []);
      var b = jnb(unb());
      b = g.Km(b, function (c) {
        return !c.uuid;
      });
      return Wpb(a, b);
    },
    k9 = function (a, b) {
      wnb(g.xh(a.screens, hnb));
      b && vnb();
    },
    aqb = function (a, b) {
      g.lC.call(this);
      this.I = b;
      b = (b = g.lB("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.I(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.ob(b, h);
      }
      this.j = c;
      this.D = a;
      this.B = this.C = NaN;
      this.u = null;
      $pb("Initialized with " + g.di(this.j));
    },
    bqb = function (a, b, c) {
      var d = a9(a.D, "/pairing/get_screen_availability");
      Hpb(
        a.D,
        d,
        { lounge_token: b.token },
        (0, g.Pa)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.Pa)(function () {
          c(!1);
        }, a)
      );
    },
    dqb = function (a, b) {
      a: if (Zmb(b) != Zmb(a.j)) var c = !1;
      else {
        c = g.Mc(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        ($pb("Updated online screens: " + g.di(a.j)),
        (a.j = b),
        a.ma("screenChange"));
      cqb(a);
    },
    l9 = function (a) {
      isNaN(a.B) || g.Mw(a.B);
      a.B = g.Kw((0, g.Pa)(a.mO, a), 0 < a.C && a.C < g.Ra() ? 2e4 : 1e4);
    },
    $pb = function (a) {
      c9("OnlineScreenService", a);
    },
    eqb = function (a) {
      var b = {};
      g.Hb(a.I(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.Of("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    cqb = function (a) {
      a = g.Mc(
        g.Hc(a.j, function (b) {
          return b;
        })
      );
      g.Db(a);
      a.length
        ? g.kB("yt-remote-online-screen-ids", a.join(","), 60)
        : g.mB("yt-remote-online-screen-ids");
    },
    m9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      h9.call(this, "ScreenService");
      this.C = a;
      this.J = b;
      this.j = this.u = null;
      this.B = [];
      this.D = {};
      fqb(this);
    },
    hqb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.D[b]);
      var h = a.zk(),
        l = c ? i8(h, c) : null;
      (c && (a.J || l)) || (l = i8(h, b));
      if (l) {
        l.uuid = b;
        var m = n9(a, l);
        bqb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? gqb(
              a,
              c,
              (0, g.Pa)(function (n) {
                var p = n9(
                  this,
                  new f8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                bqb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    iqb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    jqb = function (a, b, c) {
      bqb(a.j, b, c);
    },
    gqb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.Pw(a9(a.C, "/pairing/get_lounge_token_batch"), e);
    },
    kqb = function (a) {
      a.screens = a.u.zk();
      var b = a.D,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + knb(a.screens));
    },
    fqb = function (a) {
      lqb(a);
      a.u = new j9(a.C);
      a.u.subscribe("screenChange", (0, g.Pa)(a.o3, a));
      kqb(a);
      a.J || (a.B = jnb(g.lB("yt-remote-automatic-screen-cache") || []));
      lqb(a);
      a.info("Initializing automatic screens: " + knb(a.B));
      a.j = new aqb(a.C, (0, g.Pa)(a.zk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.Pa)(function () {
          this.ma("onlineScreenChange");
        }, a)
      );
    },
    n9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = i8(a.B, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.B.push(b),
          a.J || mqb(a));
      lqb(a);
      a.D[b.uuid] = b.id;
      g.kB("yt-remote-device-id-map", a.D, 31536e3);
      return b;
    },
    mqb = function (a) {
      a = g.Km(a.B, function (b) {
        return "shortLived" != b.idType;
      });
      g.kB("yt-remote-automatic-screen-cache", g.xh(a, hnb));
    },
    lqb = function (a) {
      a.D = g.lB("yt-remote-device-id-map") || {};
    },
    o9 = function (a, b, c) {
      g.lC.call(this);
      this.Fa = c;
      this.C = a;
      this.u = b;
      this.j = null;
    },
    p9 = function (a, b) {
      a.j = b;
      a.ma("sessionScreen", a.j);
    },
    nqb = function (a, b) {
      a.j && ((a.j.token = b), n9(a.C, a.j));
      a.ma("sessionScreen", a.j);
    },
    q9 = function (a, b) {
      c9(a.Fa, b);
    },
    r9 = function (a, b, c) {
      o9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.B = null;
      this.oa = (0, g.Pa)(this.h_, this);
      this.ya = (0, g.Pa)(this.A7, this);
      this.ea = g.Kw(function () {
        oqb(d, null);
      }, 12e4);
      this.J = this.D = this.I = this.V = 0;
      this.Aa = !1;
      this.Y = "unknown";
    },
    qqb = function (a, b) {
      g.Mw(a.J);
      a.J = 0;
      0 == b
        ? pqb(a)
        : (a.J = g.Kw(function () {
            pqb(a);
          }, b));
    },
    pqb = function (a) {
      rqb(a, "getLoungeToken");
      g.Mw(a.D);
      a.D = g.Kw(function () {
        sqb(a, null);
      }, 3e4);
    },
    rqb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.di());
      var c = {};
      c.type = b;
      a.B
        ? a.B.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.Pa)(function () {
              q9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : q9(a, "Sending yt message without session: " + g.di(c));
    },
    tqb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.AT(
              b,
              function (c) {
                p9(a, c);
              },
              function () {
                return a.lj();
              },
              5
            ))
        : a.lj(Error("Waiting for session status timed out."));
    },
    vqb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new f8(b);
      uqb(
        a,
        d,
        function (e) {
          e
            ? ((a.Aa = !0), n9(a.C, d), p9(a, d), (a.Y = "unknown"), qqb(a, c))
            : (g.uw(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.lj());
        },
        5
      );
    },
    oqb = function (a, b) {
      g.Mw(a.ea);
      a.ea = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? vqb(
                    a,
                    {
                      name: a.u.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.uw(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  tqb(a, b.screenId)))
            : (g.uw(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              tqb(a, b.screenId))
          : tqb(a, b.screenId)
        : a.lj(Error("Waiting for session status timed out."));
    },
    sqb = function (a, b) {
      g.Mw(a.D);
      a.D = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          qqb(a, 3e4))
        : (nqb(a, b.loungeToken),
          (a.Aa = !1),
          (a.Y = "unknown"),
          qqb(a, b.loungeTokenRefreshIntervalMs));
    },
    uqb = function (a, b, c, d) {
      g.Mw(a.I);
      a.I = 0;
      jqb(a.C, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.Kw(function () {
              uqb(a, b, c, d - 1);
            }, 300));
      });
    },
    wqb = function (a) {
      g.Mw(a.V);
      a.V = 0;
      g.Mw(a.I);
      a.I = 0;
      g.Mw(a.ea);
      a.ea = 0;
      g.Mw(a.D);
      a.D = 0;
      g.Mw(a.J);
      a.J = 0;
    },
    s9 = function (a, b, c, d) {
      o9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.B = this.V = null;
      this.ya = "";
      this.Ra = c;
      this.Ma = null;
      this.ea = function () {};
      this.Y = NaN;
      this.Ja = (0, g.Pa)(this.i_, this);
      this.D = function () {};
      this.J = this.I = 0;
      this.oa = !1;
      this.Aa = "unknown";
    },
    t9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.B) ? 0 : b.getDialAppInfo)
      );
    },
    xqb = function (a) {
      a.D = a.C.GQ(
        a.ya,
        a.u.label,
        a.u.friendlyName,
        t9(a),
        function (b, c) {
          a.D = function () {};
          a.oa = !0;
          p9(a, b);
          "shortLived" == b.idType && 0 < c && u9(a, c);
        },
        function (b) {
          a.D = function () {};
          a.lj(b);
        }
      );
    },
    yqb = function (a) {
      var b = {};
      b.pairingCode = a.ya;
      b.theme = a.Ra;
      ynb() && (b.env_useStageMdx = 1);
      return g.pi(b);
    },
    zqb = function (a) {
      return new Promise(function (b) {
        a.ya = lnb();
        if (a.Ma) {
          var c = new chrome.cast.DialLaunchResponse(!0, yqb(a));
          b(c);
          xqb(a);
        } else
          (a.ea = function () {
            g.Mw(a.Y);
            a.ea = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, yqb(a));
            b(d);
            xqb(a);
          }),
            (a.Y = g.Kw(function () {
              a.ea();
            }, 100));
      });
    },
    Bqb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new f8(b);
      return new Promise(function (e) {
        Aqb(
          a,
          d,
          function (f) {
            f
              ? ((a.oa = !0), n9(a.C, d), p9(a, d), u9(a, c))
              : g.uw(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : zqb(a);
      });
    },
    Cqb = function (a, b) {
      var c = a.V.receiver.label,
        d = a.u.friendlyName;
      return new Promise(function (e) {
        hqb(
          a.C,
          c,
          b,
          d,
          function (f) {
            f && f.token && p9(a, f);
            e(f);
          },
          function (f) {
            q9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : zqb(a);
      });
    },
    Aqb = function (a, b, c, d) {
      g.Mw(a.I);
      a.I = 0;
      jqb(a.C, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.I = g.Kw(function () {
              Aqb(a, b, c, d - 1);
            }, 300));
      });
    },
    u9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      t9(a) &&
        (g.Mw(a.J),
        (a.J = 0),
        0 == b
          ? Dqb(a)
          : (a.J = g.Kw(function () {
              Dqb(a);
            }, b)));
    },
    Dqb = function (a) {
      t9(a) &&
        a.B.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Aa = c), u9(a, 3e4))
              : ((a.oa = !1),
                (a.Aa = "unknown"),
                nqb(a, b.loungeToken),
                u9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Aa = "noLoungeTokenResponse";
            u9(a, 3e4);
          }
        );
    },
    Eqb = function (a) {
      g.Mw(a.I);
      a.I = 0;
      g.Mw(a.J);
      a.J = 0;
      a.D();
      a.D = function () {};
      g.Mw(a.Y);
    },
    v9 = function (a, b) {
      o9.call(this, a, b, "ManualSession");
      this.B = g.Kw((0, g.Pa)(this.Oy, this, null), 150);
    },
    w9 = function (a, b) {
      g.lC.call(this);
      this.config_ = b;
      this.u = a;
      this.V = b.appId || "233637DE";
      this.C = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.I = b.forceMirroring || !1;
      this.j = null;
      this.J = !1;
      this.B = [];
      this.D = (0, g.Pa)(this.w6, this);
    },
    Fqb = function (a, b) {
      return b
        ? g.kb(
            a.B,
            function (c) {
              return g8(b, c.label);
            },
            a
          )
        : null;
    },
    x9 = function (a) {
      c9("Controller", a);
    },
    Opb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    y9 = function (a) {
      return a.J || !!a.B.length || !!a.j;
    },
    z9 = function (a, b, c) {
      b != a.j &&
        (g.Ya(a.j),
        (a.j = b)
          ? (c
              ? a.ma("yt-remote-cast2-receiver-resumed", b.u)
              : a.ma("yt-remote-cast2-receiver-selected", b.u),
            b.subscribe("sessionScreen", (0, g.Pa)(a.eW, a, b)),
            b.subscribe("sessionFailed", function () {
              return Gqb(a, b);
            }),
            b.j
              ? a.ma("yt-remote-cast2-session-change", b.j)
              : c && a.j.Oy(null))
          : a.ma("yt-remote-cast2-session-change", null));
    },
    Gqb = function (a, b) {
      a.j == b && a.ma("yt-remote-cast2-session-failed");
    },
    Hqb = function (a) {
      var b = a.u.FQ(),
        c = a.j && a.j.u;
      a = g.xh(
        b,
        function (d) {
          c && g8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = Fqb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    Oqb = function (a, b, c, d) {
      d.disableCastApi
        ? A9("Cannot initialize because disabled by Mdx config.")
        : Iqb()
        ? Jqb(b, d) &&
          (Kqb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? Lqb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? Lqb(a, c)
                  : (B9("Failed to load cast API: " + f),
                    Mqb(!1),
                    Kqb(!1),
                    g.mB("yt-remote-cast-available"),
                    g.mB("yt-remote-cast-receiver"),
                    Nqb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.oB("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= znb() && Inb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? Dnb()
                : 89 <= znb()
                ? Knb()
                : (Hnb(), n8(Jnb.map(Enb)))))
        : A9("Cannot initialize because not running Chrome");
    },
    Nqb = function () {
      A9("dispose");
      var a = C9();
      a && a.dispose();
      g.Ea("yt.mdx.remote.cloudview.instance_", null);
      Pqb(!1);
      g.oA(Qqb);
      Qqb.length = 0;
    },
    D9 = function () {
      return !!g.lB("yt-remote-cast-installed");
    },
    Rqb = function () {
      var a = g.lB("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    Sqb = function () {
      A9("clearCurrentReceiver");
      g.mB("yt-remote-cast-receiver");
    },
    Tqb = function () {
      return D9()
        ? C9()
          ? C9().getCastSession()
          : (B9("getCastSelector: Cast is not initialized."), null)
        : (B9("getCastSelector: Cast API is not installed!"), null);
    },
    Uqb = function () {
      D9()
        ? C9()
          ? E9()
            ? (A9("Requesting cast selector."), C9().requestSession())
            : (A9("Wait for cast API to be ready to request the session."),
              Qqb.push(g.nA("yt-remote-cast2-api-ready", Uqb)))
          : B9("requestCastSelector: Cast is not initialized.")
        : B9("requestCastSelector: Cast API is not installed!");
    },
    F9 = function (a, b) {
      E9()
        ? C9().setConnectedScreenStatus(a, b)
        : B9("setConnectedScreenStatus called before ready.");
    },
    Iqb = function () {
      var a = 0 <= g.Zb().search(/ (CrMo|Chrome|CriOS)\//);
      return g.kG || a;
    },
    Vqb = function (a, b) {
      C9().init(a, b);
    },
    Jqb = function (a, b) {
      var c = !1;
      C9() ||
        ((a = new w9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.kB("yt-remote-cast-available", d);
          d8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          A9("onReceiverSelected: " + d.friendlyName);
          g.kB("yt-remote-cast-receiver", d);
          d8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          A9("onReceiverResumed: " + d.friendlyName);
          g.kB("yt-remote-cast-receiver", d);
          d8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          A9("onSessionChange: " + h8(d));
          d || g.mB("yt-remote-cast-receiver");
          d8("yt-remote-cast2-session-change", d);
        }),
        g.Ea("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      A9("cloudview.createSingleton_: " + c);
      return c;
    },
    C9 = function () {
      return g.Fa("yt.mdx.remote.cloudview.instance_");
    },
    Lqb = function (a, b) {
      Mqb(!0);
      Kqb(!1);
      Vqb(a, function (c) {
        c
          ? (Pqb(!0), g.pA("yt-remote-cast2-api-ready"))
          : (B9("Failed to initialize cast API."),
            Mqb(!1),
            g.mB("yt-remote-cast-available"),
            g.mB("yt-remote-cast-receiver"),
            Nqb());
        b(c);
      });
    },
    A9 = function (a) {
      c9("cloudview", a);
    },
    B9 = function (a) {
      c9("cloudview", a);
    },
    Mqb = function (a) {
      A9("setCastInstalled_ " + a);
      g.kB("yt-remote-cast-installed", a);
    },
    E9 = function () {
      return !!g.Fa("yt.mdx.remote.cloudview.apiReady_");
    },
    Pqb = function (a) {
      A9("setApiReady_ " + a);
      g.Ea("yt.mdx.remote.cloudview.apiReady_", a);
    },
    Kqb = function (a) {
      g.Ea("yt.mdx.remote.cloudview.initializing_", a);
    },
    G9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.I = this.J = 0;
      this.trackData = null;
      this.Dk = this.No = !1;
      this.V = this.D = this.j = this.C = 0;
      this.B = NaN;
      this.u = !1;
      this.reset(a);
    },
    Wqb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.No = !1;
      a.Dk = !1;
      a.J = 0;
      a.I = g.Ra();
      a.C = 0;
      a.j = 0;
      a.D = 0;
      a.V = 0;
      a.B = NaN;
      a.u = !1;
    },
    H9 = function (a) {
      return a.fd() ? (g.Ra() - a.I) / 1e3 : 0;
    },
    I9 = function (a, b) {
      a.J = b;
      a.I = g.Ra();
    },
    J9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.Ra() - a.I) / 1e3 + a.J;
        case -1e3:
          return 0;
      }
      return a.J;
    },
    K9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && Wqb(a);
    },
    Xqb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.Yc(a.trackData);
      b.hasPrevious = a.No;
      b.hasNext = a.Dk;
      b.playerTime = a.J;
      b.playerTimeAt = a.I;
      b.seekableStart = a.C;
      b.seekableEnd = a.j;
      b.duration = a.D;
      b.loadedTime = a.V;
      b.liveIngestionTime = a.B;
      return b;
    },
    M9 = function (a, b) {
      g.lC.call(this);
      this.B = 0;
      this.C = a;
      this.I = [];
      this.D = new Apb();
      this.u = this.j = null;
      this.Y = (0, g.Pa)(this.k5, this);
      this.J = (0, g.Pa)(this.MC, this);
      this.V = (0, g.Pa)(this.j5, this);
      this.ea = (0, g.Pa)(this.p5, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.GO, this), Yqb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.GO(c)
          : g.Kw(
              (0, g.Pa)(function () {
                this.GO(c);
              }, this),
              0
            ));
      (a = Tqb()) && L9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ea);
    },
    N9 = function (a) {
      return new G9(a.C.getPlayerContextData());
    },
    Yqb = function (a) {
      g.Hb(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.I.push(this.C.subscribe(b, g.Qa(this.u6, b), this));
        },
        a
      );
    },
    Zqb = function (a) {
      g.Hb(
        a.I,
        function (b) {
          this.C.unsubscribeByKey(b);
        },
        a
      );
      a.I.length = 0;
    },
    O9 = function (a) {
      return 1 == a.getState();
    },
    P9 = function (a, b) {
      var c = a.D;
      50 > c.j.length + c.u.length && a.D.u.push(b);
    },
    $qb = function (a, b, c) {
      var d = N9(a);
      I9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      Q9(a, d);
    },
    R9 = function (a, b, c) {
      a.C.sendMessage(b, c);
    },
    Q9 = function (a, b) {
      Zqb(a);
      a.C.setPlayerContextData(Xqb(b));
      Yqb(a);
    },
    L9 = function (a, b) {
      a.u &&
        (a.u.removeUpdateListener(a.Y),
        a.u.removeMediaListener(a.J),
        a.MC(null));
      a.u = b;
      a.u &&
        (d9("Setting cast session: " + a.u.sessionId),
        a.u.addUpdateListener(a.Y),
        a.u.addMediaListener(a.J),
        a.u.media.length && a.MC(a.u.media[0]));
    },
    arb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = N9(a);
        b.contentId != d.videoId &&
          d9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        I9(d, a.j.getEstimatedTime());
        Q9(a, d);
      } else d9("No cast media video. Ignoring state update.");
    },
    S9 = function (a, b, c) {
      return (0, g.Pa)(function (d) {
        this.Of(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.Of("Retrying " + b + " using MDx browser channel."),
          R9(this, b, c));
      }, a);
    },
    V9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.lC.call(this);
      var e = this;
      this.I = NaN;
      this.ya = !1;
      this.Y = this.V = this.oa = this.Aa = NaN;
      this.ea = [];
      this.D = this.J = this.C = this.j = this.u = null;
      this.Ma = a;
      this.Ja = d;
      this.ea.push(
        g.Uz(window, "beforeunload", function () {
          e.Tx(2);
        })
      );
      this.B = [];
      this.j = new G9();
      this.Ra = b.id;
      this.Fa = b.idType;
      this.u = Npb(this.Ma, c, this.KQ, "shortLived" == this.Fa, this.Ra);
      this.u.Pa("channelOpened", function () {
        brb(e);
      });
      this.u.Pa("channelClosed", function () {
        T9("Channel closed");
        isNaN(e.I) ? l8(!0) : l8();
        e.dispose();
      });
      this.u.Pa("channelError", function (f) {
        l8();
        isNaN(e.LB())
          ? (1 == f &&
              "shortLived" == e.Fa &&
              e.ma("browserChannelAuthError", f),
            T9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.ya = !0),
            T9(
              "Channel error: " + f + " with reconnection in " + e.LB() + " ms"
            ),
            U9(e, 2));
      });
      this.u.Pa("channelMessage", function (f) {
        crb(e, f);
      });
      this.u.Pq(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.nB() && g.kB("yt-remote-session-video-id", f);
      });
    },
    drb = function (a) {
      return g.kb(a.B, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    T9 = function (a) {
      c9("conn", a);
    },
    U9 = function (a, b) {
      a.ma("proxyStateChange", b);
    },
    erb = function (a) {
      a.I = g.Kw(function () {
        T9("Connecting timeout");
        a.Tx(1);
      }, 2e4);
    },
    frb = function (a) {
      g.Mw(a.I);
      a.I = NaN;
    },
    grb = function (a) {
      g.Mw(a.Aa);
      a.Aa = NaN;
    },
    irb = function (a) {
      hrb(a);
      a.oa = g.Kw(function () {
        W9(a, "getNowPlaying");
      }, 2e4);
    },
    hrb = function (a) {
      g.Mw(a.oa);
      a.oa = NaN;
    },
    brb = function (a) {
      T9("Channel opened");
      a.ya &&
        ((a.ya = !1),
        grb(a),
        (a.Aa = g.Kw(function () {
          T9("Timing out waiting for a screen.");
          a.Tx(1);
        }, 15e3)));
    },
    krb = function (a, b) {
      var c = null;
      if (b) {
        var d = drb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Ea("yt.mdx.remote.remoteClient_", c);
      b && (frb(a), grb(a));
      c = a.u.Cy() && isNaN(a.I);
      b == c
        ? b && (U9(a, 1), W9(a, "getSubtitlesTrack"))
        : b
        ? (a.yT() && a.j.reset(), U9(a, 1), W9(a, "getNowPlaying"), jrb(a))
        : a.Tx(1);
    },
    lrb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.Rc(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.ma("remotePlayerChange"));
    },
    mrb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      K9(a.j, d, e);
      a.ma("remoteQueueChange", c);
    },
    orb = function (a, b) {
      b.params = b.params || {};
      mrb(a, b, "NOW_PLAYING_MAY_CHANGE");
      nrb(a, b);
      a.ma("autoplayDismissed");
    },
    nrb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      I9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.V = isNaN(c) ? 0 : c;
      a.j.Sk(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.B = d;
      c.u = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.C = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? irb(a) : hrb(a);
      a.ma("remotePlayerChange");
    },
    prb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        I9(a.j, isNaN(b) ? 0 : b);
        a.ma("remotePlayerChange");
      }
    },
    qrb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.ma("remotePlayerChange");
    },
    rrb = function (a, b) {
      a.J = b.params.videoId;
      a.ma("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    srb = function (a, b) {
      a.J = b.params.videoId || null;
      a.ma("autoplayUpNext", a.J);
    },
    trb = function (a, b) {
      a.D = b.params.autoplayMode;
      a.ma("autoplayModeChange", a.D);
      "DISABLED" == a.D && a.ma("autoplayDismissed");
    },
    urb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.No = "true" == b.params.hasPrevious;
      a.j.Dk = c;
      a.ma("previousNextChange");
    },
    crb = function (a, b) {
      b = b.message;
      b.params
        ? T9("Received: action=" + b.action + ", params=" + g.di(b.params))
        : T9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = b8(b.params.devices);
          a.B = g.xh(b, function (d) {
            return new e8(d);
          });
          b = !!g.kb(a.B, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          krb(a, b);
          b = a.vU("mlm");
          a.ma("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.sb(a.B, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          krb(a, !1);
          break;
        case "remoteConnected":
          var c = new e8(b8(b.params.device));
          g.kb(a.B, function (d) {
            return d.equals(c);
          }) || Ymb(a.B, c);
          break;
        case "remoteDisconnected":
          c = new e8(b8(b.params.device));
          g.sb(a.B, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          mrb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          orb(a, b);
          break;
        case "onStateChange":
          nrb(a, b);
          break;
        case "onAdStateChange":
          prb(a, b);
          break;
        case "onVolumeChanged":
          qrb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          lrb(a, b);
          break;
        case "nowAutoplaying":
          rrb(a, b);
          break;
        case "autoplayDismissed":
          a.ma("autoplayDismissed");
          break;
        case "autoplayUpNext":
          srb(a, b);
          break;
        case "onAutoplayModeChanged":
          trb(a, b);
          break;
        case "onHasPreviousNextChanged":
          urb(a, b);
          break;
        case "requestAssistedSignIn":
          a.ma("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.ma("loopModeChange", b.params.loopMode);
          break;
        default:
          T9("Unrecognized action: " + b.action);
      }
    },
    jrb = function (a) {
      g.Mw(a.Y);
      a.Y = g.Kw(function () {
        a.Tx(1);
      }, 864e5);
    },
    W9 = function (a, b, c) {
      c
        ? T9("Sending: action=" + b + ", params=" + g.di(c))
        : T9("Sending: action=" + b);
      a.u.sendMessage(b, c);
    },
    vrb = function (a) {
      h9.call(this, "ScreenServiceProxy");
      this.Pg = a;
      this.j = [];
      this.j.push(this.Pg.$_s("screenChange", (0, g.Pa)(this.m_, this)));
      this.j.push(this.Pg.$_s("onlineScreenChange", (0, g.Pa)(this.c6, this)));
    },
    Arb = function (a, b) {
      xnb();
      if (!m8 || !m8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.mw("MDX_CONFIG") || b;
        onb();
        snb();
        X9 ||
          ((X9 = new $8(b ? b.loungeApiHost : void 0)),
          ynb() && (X9.j = "/api/loungedev"));
        Y9 ||
          ((Y9 = g.Fa("yt.mdx.remote.deferredProxies_") || []),
          g.Ea("yt.mdx.remote.deferredProxies_", Y9));
        wrb();
        var c = Z9();
        if (!c) {
          var d = new m9(X9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Ea("yt.mdx.remote.screenService_", d);
          c = Z9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Ea(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          Oqb(
            a,
            d,
            function (f) {
              f
                ? $9() && F9($9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    d8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Fa("yt.mdx.remote.initialized_") &&
          (g.Ea("yt.mdx.remote.initialized_", !0),
          a$("Initializing: " + g.di(b)),
          b$.push(
            g.nA("yt-remote-cast2-api-ready", function () {
              d8("yt-remote-api-ready");
            })
          ),
          b$.push(
            g.nA("yt-remote-cast2-availability-change", function () {
              d8("yt-remote-receiver-availability-change");
            })
          ),
          b$.push(
            g.nA("yt-remote-cast2-receiver-selected", function () {
              c$(null);
              d8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          b$.push(
            g.nA("yt-remote-cast2-receiver-resumed", function () {
              d8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          b$.push(g.nA("yt-remote-cast2-session-change", xrb)),
          b$.push(
            g.nA("yt-remote-connection-change", function (f) {
              f ? F9($9(), "YouTube TV") : d$() || (F9(null, null), Sqb());
            })
          ),
          b$.push(
            g.nA("yt-remote-cast2-session-failed", function () {
              d8("yt-remote-connection-failed");
            })
          ),
          (a = yrb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.ow("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          a$(" -- with channel params: " + g.di(a)),
          a
            ? (g.kB("yt-remote-session-app", a.app),
              g.kB("yt-remote-session-name", a.name))
            : (g.mB("yt-remote-session-app"), g.mB("yt-remote-session-name")),
          g.Ea("yt.mdx.remote.channelParams_", a),
          c.start(),
          $9() || zrb());
      }
    },
    Brb = function () {
      var a = Z9().Pg.$_gos();
      var b = e$();
      b && f$() && (nnb(a, b) || a.push(b));
      return mnb(a);
    },
    Drb = function () {
      var a = Crb();
      !a &&
        D9() &&
        Rqb() &&
        (a = { key: "cast-selector-receiver", name: Rqb() });
      return a;
    },
    Crb = function () {
      var a = Brb(),
        b = e$();
      b || (b = d$());
      return g.kb(a, function (c) {
        return b && g8(b, c.key) ? !0 : !1;
      });
    },
    e$ = function () {
      var a = $9();
      if (!a) return null;
      var b = Z9().zk();
      return i8(b, a);
    },
    xrb = function (a) {
      a$("remote.onCastSessionChange_: " + h8(a));
      if (a) {
        var b = e$();
        if (b && b.id == a.id) {
          if (
            (F9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            g$ && (g$.token = a), (b = f$()) && b.Pq(a);
        } else b && h$(), i$(a, 1);
      } else f$() && h$();
    },
    h$ = function () {
      E9() ? C9().stopSession() : B9("stopSession called before API ready.");
      var a = f$();
      a && (a.disconnect(1), Erb(null));
    },
    Frb = function () {
      var a = f$();
      return !!a && 3 != a.getProxyState();
    },
    a$ = function (a) {
      c9("remote", a);
    },
    Z9 = function () {
      if (!Grb) {
        var a = g.Fa("yt.mdx.remote.screenService_");
        Grb = a ? new vrb(a) : null;
      }
      return Grb;
    },
    $9 = function () {
      return g.Fa("yt.mdx.remote.currentScreenId_");
    },
    Hrb = function (a) {
      g.Ea("yt.mdx.remote.currentScreenId_", a);
    },
    Irb = function () {
      return g.Fa("yt.mdx.remote.connectData_");
    },
    c$ = function (a) {
      g.Ea("yt.mdx.remote.connectData_", a);
    },
    f$ = function () {
      return g.Fa("yt.mdx.remote.connection_");
    },
    Erb = function (a) {
      var b = f$();
      c$(null);
      a || Hrb("");
      g.Ea("yt.mdx.remote.connection_", a);
      Y9 &&
        (g.Hb(Y9, function (c) {
          c(a);
        }),
        (Y9.length = 0));
      b && !a
        ? d8("yt-remote-connection-change", !1)
        : !b && a && d8("yt-remote-connection-change", !0);
    },
    d$ = function () {
      var a = g.nB();
      if (!a) return null;
      var b = Z9();
      if (!b) return null;
      b = b.zk();
      return i8(b, a);
    },
    i$ = function (a, b) {
      $9();
      e$() && e$();
      if (j$) g$ = a;
      else {
        Hrb(a.id);
        var c = g.Fa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new V9(X9, a, yrb(), c);
        a.connect(b, Irb());
        a.subscribe("beforeDisconnect", function (d) {
          d8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          f$() && (f$(), Erb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = e$();
          d &&
            "shortLived" == d.idType &&
            (E9()
              ? C9().handleBrowserChannelAuthError()
              : B9("refreshLoungeToken called before API ready."));
        });
        Erb(a);
      }
    },
    zrb = function () {
      var a = d$();
      a
        ? (a$("Resume connection to: " + h8(a)), i$(a, 0))
        : (l8(),
          Sqb(),
          a$("Skipping connecting because no session screen found."));
    },
    wrb = function () {
      var a = yrb();
      if (g.Rc(a)) {
        a = k8();
        var b = g.lB("yt-remote-session-name") || "",
          c = g.lB("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.mw("SESSION_INDEX", "0"));
        (b = g.mw("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Ea("yt.mdx.remote.channelParams_", a);
      }
    },
    yrb = function () {
      return g.Fa("yt.mdx.remote.channelParams_") || {};
    },
    Lrb = function (a, b, c) {
      g.C.call(this);
      var d = this;
      this.module = a;
      this.F = b;
      this.Ac = c;
      this.events = new g.ZF(this);
      this.Y = this.events.S(this.F, "onVolumeChange", function (e) {
        Jrb(d, e);
      });
      this.C = !1;
      this.D = new g.EM(64);
      this.j = new g.qo(this.vX, 500, this);
      this.u = new g.qo(this.wX, 1e3, this);
      this.J = new p8(this.m9, 0, this);
      this.B = {};
      this.V = new g.qo(this.lY, 1e3, this);
      this.I = new q8(this.seekTo, 1e3, this);
      g.D(this, this.events);
      this.events.S(b, "onCaptionsTrackListChanged", this.N5);
      this.events.S(b, "captionschanged", this.h5);
      this.events.S(b, "captionssettingschanged", this.EX);
      this.events.S(b, "videoplayerreset", this.TG);
      this.events.S(b, "mdxautoplaycancel", function () {
        d.Ac.KS();
      });
      b.K("enable_mdx_video_play_directly") &&
        this.events.S(b, "videodatachange", function () {
          Krb(d.module) || k$(d) || l$(d, 0);
        });
      a = this.Ac;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.bW, this);
      a.subscribe("remotePlayerChange", this.RC, this);
      a.subscribe("remoteQueueChange", this.TG, this);
      a.subscribe("previousNextChange", this.YV, this);
      a.subscribe("nowAutoplaying", this.SV, this);
      a.subscribe("autoplayDismissed", this.uV, this);
      g.D(this, this.j);
      g.D(this, this.u);
      g.D(this, this.J);
      g.D(this, this.V);
      g.D(this, this.I);
      this.EX();
      this.TG();
      this.RC();
    },
    Jrb = function (a, b) {
      if (k$(a)) {
        a.Ac.unsubscribe("remotePlayerChange", a.RC, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = N9(a.Ac);
        if (c !== d.volume || b !== d.muted) a.Ac.setVolume(c, b), a.V.start();
        a.Ac.subscribe("remotePlayerChange", a.RC, a);
      }
    },
    Mrb = function (a) {
      a.xc(0);
      a.j.stop();
      a.qc(new g.EM(64));
    },
    Nrb = function (a, b) {
      if (k$(a) && !a.C) {
        var c = null;
        b && ((c = { style: a.F.getSubtitlesUserSettings() }), g.Zc(c, b));
        a.Ac.JQ(a.F.getVideoData(1).videoId, c);
        a.B = N9(a.Ac).trackData;
      }
    },
    l$ = function (a, b) {
      var c = a.F.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.F.getVideoData(1);
      a.Ac.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, Xmb(c));
      a.qc(new g.EM(1));
    },
    Orb = function (a, b) {
      if (b) {
        var c = a.F.getOption("captions", "tracklist", { kU: 1 });
        c && c.length
          ? (a.F.setOption("captions", "track", b), (a.C = !1))
          : (a.F.loadModule("captions"), (a.C = !0));
      } else a.F.setOption("captions", "track", {});
    },
    k$ = function (a) {
      return N9(a.Ac).videoId === a.F.getVideoData(1).videoId;
    },
    m$ = function () {
      g.T.call(this, {
        G: "div",
        N: "ytp-mdx-popup-dialog",
        X: { role: "dialog" },
        W: [
          {
            G: "div",
            N: "ytp-mdx-popup-dialog-inner-content",
            W: [
              { G: "div", N: "ytp-mdx-popup-title", qa: "You're signed out" },
              {
                G: "div",
                N: "ytp-mdx-popup-description",
                qa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                G: "div",
                N: "ytp-mdx-privacy-popup-buttons",
                W: [
                  {
                    G: "button",
                    Ia: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    qa: "Cancel",
                  },
                  {
                    G: "button",
                    Ia: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    qa: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.KO(this, 250);
      this.cancelButton = this.Ca("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Ca("ytp-mdx-privacy-popup-confirm");
      g.D(this, this.j);
      this.S(this.cancelButton, "click", this.u);
      this.S(this.confirmButton, "click", this.B);
    },
    n$ = function (a) {
      g.T.call(this, {
        G: "div",
        N: "ytp-remote",
        W: [
          {
            G: "div",
            N: "ytp-remote-display-status",
            W: [
              { G: "div", N: "ytp-remote-display-status-icon", W: [g.CFa()] },
              {
                G: "div",
                N: "ytp-remote-display-status-text",
                qa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.KO(this, 250);
      g.D(this, this.j);
      this.S(a, "presentingplayerstatechange", this.onStateChange);
      this.uc(a.Gb());
    },
    o$ = function (a, b) {
      g.dV.call(this, "Play on", 1, a, b);
      this.F = a;
      this.nt = {};
      this.S(a, "onMdxReceiversChange", this.C);
      this.S(a, "presentingplayerstatechange", this.C);
      this.C();
    },
    Prb = function (a) {
      g.aS.call(this, a);
      this.Zo = { key: lnb(), name: "This computer" };
      this.xl = null;
      this.subscriptions = [];
      this.UN = this.Ac = null;
      this.nt = [this.Zo];
      this.Kr = this.Zo;
      this.Se = new g.EM(64);
      this.JU = 0;
      this.Bh = -1;
      this.fD = !1;
      this.dD = this.rz = null;
      if (!g.pI(this.player.T()) && !g.qI(this.player.T())) {
        a = this.player;
        var b = g.QQ(a);
        b && (b = b.Im()) && ((b = new o$(a, b)), g.D(this, b));
        b = new n$(a);
        g.D(this, b);
        g.hR(a, b.element, 4);
        this.rz = new m$();
        g.D(this, this.rz);
        g.hR(a, this.rz.element, 4);
        this.fD = !!d$();
      }
    },
    p$ = function (a) {
      a.dD &&
        (a.player.removeEventListener("presentingplayerstatechange", a.dD),
        (a.dD = null));
    },
    Qrb = function (a, b, c) {
      a.Se = c;
      a.player.ma("presentingplayerstatechange", new g.XL(c, b));
    },
    q$ = function (a, b) {
      if (b.key !== a.Kr.key)
        if (b.key === a.Zo.key) h$();
        else if (
          (Krb(a) && Rrb(a),
          (a.Kr = b),
          !a.player
            .T()
            .K("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.qI(a.player.T()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .T()
                .K("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = g.VR(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.ya,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = Xmb(d)) && (a.locationInfo = d);
            d = a;
          }
          a$("Connecting to: " + g.di(b));
          "cast-selector-receiver" == b.key
            ? (c$(d || null),
              (b = d || null),
              E9()
                ? C9().setLaunchParams(b)
                : B9("setLaunchParams called before ready."))
            : !d && Frb() && $9() == b.key
            ? d8("yt-remote-connection-change", !0)
            : (h$(),
              c$(d || null),
              (d = Z9().zk()),
              (b = i8(d, b.key)) && i$(b, 1));
        }
    },
    Krb = function (a) {
      var b;
      (b = !a.player.T().K("mdx_enable_privacy_disclosure_ui")) ||
        (b =
          ((b = g.mw("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser
            ? !0
            : !(!g.mw("SESSION_INDEX") && !g.mw("LOGGED_IN"))) ||
          a.fD ||
          !a.rz);
      return b ? !1 : g.GI(a.player.T()) || g.JI(a.player.T());
    },
    Rrb = function (a) {
      a.player.Gb().fd()
        ? a.player.pauseVideo()
        : ((a.dD = function (b) {
            !a.fD && g.ZL(b, 8) && (a.player.pauseVideo(), p$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.dD));
      a.rz && a.rz.Sc();
      f$() || (j$ = !0);
    };
  g.wr.prototype.Xr = g.ca(0, function () {
    return g.Rg(this, 6);
  });
  var Zob = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    R8 = { "'": "\\'" },
    fnb = {
      Pha: "atp",
      SSa: "ska",
      iQa: "que",
      IIa: "mus",
      RSa: "sus",
      hva: "dsp",
      lRa: "seq",
      BHa: "mic",
      coa: "dpa",
      Kia: "cds",
      yIa: "mlm",
      Qna: "dsdtr",
      jJa: "ntb",
      Y1a: "vsp",
      Soa: "scn",
    },
    gnb = {
      N0: "u",
      CLASSIC: "cl",
      o0: "k",
      iZ: "i",
      RY: "cr",
      w0: "m",
      fZ: "g",
      HR: "up",
    };
  e8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var m8,
    rnb = "",
    Gnb = Anb("loadCastFramework") || Anb("loadCastApplicationFramework"),
    Jnb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.Sa(p8, g.C);
  g.k = p8.prototype;
  g.k.LZ = function (a) {
    this.C = arguments;
    this.j = !1;
    this.Gc ? (this.B = g.Ra() + this.Ji) : (this.Gc = g.yf(this.D, this.Ji));
  };
  g.k.stop = function () {
    this.Gc && (g.Da.clearTimeout(this.Gc), (this.Gc = null));
    this.B = null;
    this.j = !1;
    this.C = [];
  };
  g.k.pause = function () {
    ++this.u;
  };
  g.k.resume = function () {
    this.u &&
      (--this.u,
      !this.u && this.j && ((this.j = !1), this.I.apply(null, this.C)));
  };
  g.k.ra = function () {
    this.stop();
    p8.Hf.ra.call(this);
  };
  g.k.MZ = function () {
    this.Gc && (g.Da.clearTimeout(this.Gc), (this.Gc = null));
    this.B
      ? ((this.Gc = g.yf(this.D, this.B - g.Ra())), (this.B = null))
      : this.u
      ? (this.j = !0)
      : ((this.j = !1), this.I.apply(null, this.C));
  };
  g.v(q8, g.C);
  g.k = q8.prototype;
  g.k.UI = function (a) {
    this.B = arguments;
    this.Gc || this.u ? (this.j = !0) : Vnb(this);
  };
  g.k.stop = function () {
    this.Gc &&
      (g.Da.clearTimeout(this.Gc),
      (this.Gc = null),
      (this.j = !1),
      (this.B = null));
  };
  g.k.pause = function () {
    this.u++;
  };
  g.k.resume = function () {
    this.u--;
    this.u || !this.j || this.Gc || ((this.j = !1), Vnb(this));
  };
  g.k.ra = function () {
    g.C.prototype.ra.call(this);
    this.stop();
  };
  r8.prototype.stringify = function (a) {
    return g.Da.JSON.stringify(a, void 0);
  };
  r8.prototype.parse = function (a) {
    return g.Da.JSON.parse(a, void 0);
  };
  g.Sa(Wnb, g.eb);
  g.Sa(Xnb, g.eb);
  var Ynb = null;
  g.Sa($nb, g.eb);
  g.Sa(aob, g.eb);
  g.Sa(bob, g.eb);
  cob.prototype.info = function () {};
  cob.prototype.warning = function () {};
  var job = {},
    x8 = {};
  g.k = v8.prototype;
  g.k.setTimeout = function (a) {
    this.Fb = a;
  };
  g.k.PZ = function (a) {
    a = a.target;
    var b = this.Ya;
    b && 3 == g.Bi(a) ? b.UI() : this.nQ(a);
  };
  g.k.nQ = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Bi(this.j),
            c = this.j.u,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.KI ||
              (this.j && (this.u.u || g.Di(this.j) || g.Ei(this.j))))
          ) {
            this.Ja || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
            A8(this);
            var e = this.j.getStatus();
            this.lc = e;
            b: if (hob(this)) {
              var f = g.Ei(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Bi(this.j);
              if (!this.u.B) {
                if ("undefined" === typeof TextDecoder) {
                  y8(this);
                  z8(this);
                  var m = "";
                  break b;
                }
                this.u.B = new g.Da.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.u.u = !0),
                  (a += this.u.B.decode(f[c], { stream: l && c == h - 1 }));
              f.splice(0, h);
              this.u.j += a;
              this.ea = 0;
              m = this.u.j;
            } else m = g.Di(this.j);
            if ((this.B = 200 == e)) {
              if (this.ac && !this.Ta) {
                b: {
                  if (this.j) {
                    var n = g.Fi(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.Ob(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Ta = !0), kob(this, e);
                else {
                  this.B = !1;
                  this.I = 3;
                  t8(12);
                  y8(this);
                  z8(this);
                  break a;
                }
              }
              this.Fa
                ? (lob(this, b, m),
                  g.KI &&
                    this.B &&
                    3 == b &&
                    (this.jb.Pa(this.kb, "tick", this.OZ), this.kb.start()))
                : kob(this, m);
              4 == b && y8(this);
              this.B &&
                !this.Ja &&
                (4 == b ? nob(this.D, this) : ((this.B = !1), w8(this)));
            } else
              g.Ffa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.I = 3), t8(12))
                  : ((this.I = 0), t8(13)),
                y8(this),
                z8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.OZ = function () {
    if (this.j) {
      var a = g.Bi(this.j),
        b = g.Di(this.j);
      this.ea < b.length &&
        (A8(this), lob(this, a, b), this.B && 4 != a && w8(this));
    }
  };
  g.k.cancel = function () {
    this.Ja = !0;
    y8(this);
  };
  g.k.NZ = function () {
    this.Y = null;
    var a = Date.now();
    0 <= a - this.Tb
      ? (2 != this.Ra && (s8(3), t8(17)), y8(this), (this.I = 2), z8(this))
      : mob(this, this.Tb - a);
  };
  g.k.getLastError = function () {
    return this.I;
  };
  g.k.GL = function () {
    return this.j;
  };
  wob.prototype.cancel = function () {
    this.B = yob(this);
    if (this.u) this.u.cancel(), (this.u = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.t(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = Cob.prototype;
  g.k.oQ = 8;
  g.k.qh = 1;
  g.k.connect = function (a, b, c, d) {
    t8(0);
    this.Ic = a;
    this.Ja = b || {};
    c && void 0 !== d && ((this.Ja.OSID = c), (this.Ja.OAID = d));
    this.Ta = this.Dc;
    this.Ma = sob(this, null, this.Ic);
    E8(this);
  };
  g.k.disconnect = function () {
    Eob(this);
    if (3 == this.qh) {
      var a = this.fb++,
        b = this.Ma.clone();
      g.Tj(b, "SID", this.C);
      g.Tj(b, "RID", a);
      g.Tj(b, "TYPE", "terminate");
      H8(this, b);
      a = new v8(this, this.C, a);
      a.Ra = 2;
      a.J = t7(b.clone());
      b = !1;
      if (g.Da.navigator && g.Da.navigator.sendBeacon)
        try {
          b = g.Da.navigator.sendBeacon(a.J.toString(), "");
        } catch (c) {}
      !b && g.Da.Image && ((new Image().src = a.J), (b = !0));
      b || ((a.j = gob(a.D, null)), a.j.send(a.J));
      a.Aa = Date.now();
      w8(a);
    }
    Kob(this);
  };
  g.k.Qg = function () {
    return 0 == this.qh;
  };
  g.k.getState = function () {
    return this.qh;
  };
  g.k.qQ = function (a) {
    if (this.I)
      if (((this.I = null), 1 == this.qh)) {
        if (!a) {
          this.fb = Math.floor(1e5 * Math.random());
          a = this.fb++;
          var b = new v8(this, "", a),
            c = this.Y;
          this.Tb && (c ? ((c = g.Xc(c)), g.Zc(c, this.Tb)) : (c = this.Tb));
          null !== this.J || this.tb || ((b.Ma = c), (c = null));
          var d;
          if (this.Fb)
            a: {
              for (var e = (d = 0); e < this.B.length; e++) {
                b: {
                  var f = this.B[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.B.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Hob(this, b, d);
          e = this.Ma.clone();
          g.Tj(e, "RID", a);
          g.Tj(e, "CVER", 22);
          this.Fa && g.Tj(e, "X-HTTP-Session-Id", this.Fa);
          H8(this, e);
          c &&
            (this.tb
              ? (d = "headers=" + g.me(g.Wga(c)) + "&" + d)
              : this.J && g.Xj(e, this.J, c));
          rob(this.u, b);
          this.Pf && g.Tj(e, "TYPE", "init");
          this.Fb
            ? (g.Tj(e, "$req", d),
              g.Tj(e, "SID", "null"),
              (b.ac = !0),
              fob(b, e, null))
            : fob(b, e, d);
          this.qh = 2;
        }
      } else
        3 == this.qh &&
          (a ? Iob(this, a) : 0 == this.B.length || xob(this.u) || Iob(this));
  };
  g.k.pQ = function () {
    this.V = null;
    Job(this);
    if (this.Qc && !(this.kb || null == this.j || 0 >= this.Od)) {
      var a = 2 * this.Od;
      this.ya = u8((0, g.Pa)(this.g5, this), a);
    }
  };
  g.k.g5 = function () {
    this.ya &&
      ((this.ya = null),
      (this.Ta = !1),
      (this.kb = !0),
      t8(10),
      C8(this),
      Job(this));
  };
  g.k.iN = function (a) {
    this.j == a && this.Qc && !this.kb && (Dob(this), (this.kb = !0), t8(11));
  };
  g.k.QZ = function () {
    null != this.ea && ((this.ea = null), C8(this), pob(this), t8(19));
  };
  g.k.S8 = function (a) {
    a ? t8(2) : t8(1);
  };
  g.k.isActive = function () {
    return !!this.D && this.D.isActive(this);
  };
  g.k = Mob.prototype;
  g.k.uQ = function () {};
  g.k.tQ = function () {};
  g.k.sQ = function () {};
  g.k.rQ = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.RZ = function () {};
  g.Sa(J8, g.sd);
  J8.prototype.open = function () {
    this.j.D = this.C;
    this.J && (this.j.Ra = !0);
    this.j.connect(this.I, this.u || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.di(a)), (a = c));
    b.B.push(new vob(b.wf++, a));
    3 == b.qh && E8(b);
  };
  J8.prototype.ra = function () {
    this.j.D = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Hf.ra.call(this);
  };
  g.Sa(Oob, Wnb);
  g.Sa(Pob, Xnb);
  g.Sa(I8, Mob);
  I8.prototype.uQ = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.tQ = function (a) {
    this.j.dispatchEvent(new Oob(a));
  };
  I8.prototype.sQ = function (a) {
    this.j.dispatchEvent(new Pob(a));
  };
  I8.prototype.rQ = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.sd();
  g.v(Sob, g.eb);
  g.k = N8.prototype;
  g.k.Rt = null;
  g.k.Fp = !1;
  g.k.Mw = null;
  g.k.WI = null;
  g.k.Kw = null;
  g.k.Lw = null;
  g.k.gr = null;
  g.k.jr = null;
  g.k.St = null;
  g.k.Ui = null;
  g.k.tE = 0;
  g.k.Dn = null;
  g.k.sE = null;
  g.k.ir = null;
  g.k.vA = -1;
  g.k.hX = !0;
  g.k.Qt = !1;
  g.k.VI = 0;
  g.k.rE = null;
  var Xob = {},
    Wob = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.u = a;
  };
  g.k.TZ = function (a) {
    a = a.target;
    var b = this.rE;
    b && 3 == g.Bi(a) ? b.UI() : this.vQ(a);
  };
  g.k.vQ = function (a) {
    try {
      if (a == this.Ui)
        a: {
          var b = g.Bi(this.Ui),
            c = this.Ui.u,
            d = this.Ui.getStatus();
          if ((g.He && !g.Bc(10)) || (g.Cc && !g.yc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Di(this.Ui))) break a;
          this.Qt ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Zm(3) : this.j.Zm(2));
          bpb(this);
          var e = this.Ui.getStatus();
          this.vA = e;
          var f = g.Di(this.Ui);
          if ((this.Fp = 200 == e)) {
            4 == b && P8(this);
            if (this.Fa) {
              for (a = !0; !this.Qt && this.tE < f.length; ) {
                var h = Yob(this, f);
                if (h == Wob) {
                  4 == b && ((this.ir = 4), M8(15), (a = !1));
                  break;
                } else if (h == Xob) {
                  this.ir = 4;
                  M8(16);
                  a = !1;
                  break;
                } else cpb(this, h);
              }
              4 == b && 0 == f.length && ((this.ir = 1), M8(17), (a = !1));
              this.Fp = this.Fp && a;
              a || (P8(this), Q8(this));
            } else cpb(this, f);
            this.Fp &&
              !this.Qt &&
              (4 == b ? this.j.uE(this) : ((this.Fp = !1), O8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.ir = 3), M8(13))
              : ((this.ir = 0), M8(14)),
              P8(this),
              Q8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.q7 = function (a) {
    K8((0, g.Pa)(this.p7, this, a), 0);
  };
  g.k.p7 = function (a) {
    this.Qt || (bpb(this), cpb(this, a), O8(this));
  };
  g.k.gW = function (a) {
    K8((0, g.Pa)(this.o7, this, a), 0);
  };
  g.k.o7 = function (a) {
    this.Qt || (P8(this), (this.Fp = a), this.j.uE(this), this.j.Zm(4));
  };
  g.k.cancel = function () {
    this.Qt = !0;
    P8(this);
  };
  g.k.SZ = function () {
    this.Mw = null;
    var a = Date.now();
    0 <= a - this.WI
      ? (2 != this.Lw && this.j.Zm(3),
        P8(this),
        (this.ir = 2),
        M8(18),
        Q8(this))
      : apb(this, this.WI - a);
  };
  g.k.getLastError = function () {
    return this.ir;
  };
  g.k = fpb.prototype;
  g.k.YI = null;
  g.k.wj = null;
  g.k.sH = !1;
  g.k.xX = null;
  g.k.tF = null;
  g.k.yM = null;
  g.k.ZI = null;
  g.k.vl = null;
  g.k.Gp = -1;
  g.k.wA = null;
  g.k.TA = null;
  g.k.connect = function (a) {
    this.ZI = a;
    a = T8(this.j, null, this.ZI);
    M8(3);
    this.xX = Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.wA = b[0]),
        (this.TA = b[1])
          ? ((this.vl = 1), gpb(this))
          : ((this.vl = 2), hpb(this)))
      : (u7(a, "MODE", "init"),
        (this.wj = new N8(this)),
        (this.wj.Rt = this.YI),
        Vob(this.wj, a, !1, null, !0),
        (this.vl = 0));
  };
  g.k.D1 = function (a) {
    if (a) (this.vl = 2), hpb(this);
    else {
      M8(4);
      var b = this.j;
      b.Kn = b.Gr.Gp;
      X8(b, 9);
    }
    a && this.Zm(2);
  };
  g.k.XI = function (a) {
    return this.j.XI(a);
  };
  g.k.abort = function () {
    this.wj && (this.wj.cancel(), (this.wj = null));
    this.Gp = -1;
  };
  g.k.Qg = function () {
    return !1;
  };
  g.k.wQ = function (a, b) {
    this.Gp = a.vA;
    if (0 == this.vl)
      if (b) {
        try {
          var c = this.u.parse(b);
        } catch (d) {
          a = this.j;
          a.Kn = this.Gp;
          X8(a, 2);
          return;
        }
        this.wA = c[0];
        this.TA = c[1];
      } else (a = this.j), (a.Kn = this.Gp), X8(a, 2);
    else if (2 == this.vl)
      if (this.sH) M8(7), (this.yM = Date.now());
      else if ("11111" == b) {
        if (
          (M8(6),
          (this.sH = !0),
          (this.tF = Date.now()),
          (a = this.tF - this.xX),
          !g.He || g.Bc(10) || 500 > a)
        )
          (this.Gp = 200), this.wj.cancel(), M8(12), U8(this.j, this, !0);
      } else M8(8), (this.tF = this.yM = Date.now()), (this.sH = !1);
  };
  g.k.uE = function () {
    this.Gp = this.wj.vA;
    if (this.wj.Fp)
      0 == this.vl
        ? this.TA
          ? ((this.vl = 1), gpb(this))
          : ((this.vl = 2), hpb(this))
        : 2 == this.vl &&
          ((!g.He || g.Bc(10) ? !this.sH : 200 > this.yM - this.tF)
            ? (M8(11), U8(this.j, this, !1))
            : (M8(12), U8(this.j, this, !0)));
    else {
      0 == this.vl ? M8(9) : 2 == this.vl && M8(10);
      var a = this.j;
      this.wj.getLastError();
      a.Kn = this.Gp;
      X8(a, 2);
    }
  };
  g.k.xA = function () {
    return this.j.xA();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Zm = function (a) {
    this.j.Zm(a);
  };
  g.k = ipb.prototype;
  g.k.Jn = null;
  g.k.yA = null;
  g.k.Ej = null;
  g.k.Ag = null;
  g.k.aJ = null;
  g.k.vE = null;
  g.k.xQ = null;
  g.k.wE = null;
  g.k.zA = 0;
  g.k.VZ = 0;
  g.k.Ai = null;
  g.k.lr = null;
  g.k.Hp = null;
  g.k.Ut = null;
  g.k.Gr = null;
  g.k.kI = null;
  g.k.Pw = -1;
  g.k.yQ = -1;
  g.k.Kn = -1;
  g.k.Ow = 0;
  g.k.Nw = 0;
  g.k.Tt = 8;
  g.Sa(kpb, g.eb);
  g.Sa(lpb, g.eb);
  g.k = ipb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.aJ = b;
    this.yA = c || {};
    d && void 0 !== e && ((this.yA.OSID = d), (this.yA.OAID = e));
    this.V ? (K8((0, g.Pa)(this.xS, this, a), 100), npb(this)) : this.xS(a);
  };
  g.k.disconnect = function () {
    opb(this);
    if (3 == this.j) {
      var a = this.zA++,
        b = this.vE.clone();
      g.Tj(b, "SID", this.C);
      g.Tj(b, "RID", a);
      g.Tj(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.C, a);
      a.Lw = 2;
      a.gr = t7(b.clone());
      new Image().src = a.gr.toString();
      a.Kw = Date.now();
      O8(a);
    }
    ypb(this);
  };
  g.k.xS = function (a) {
    this.Gr = new fpb(this);
    this.Gr.YI = this.Jn;
    this.Gr.u = this.D;
    this.Gr.connect(a);
  };
  g.k.Qg = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.AQ = function (a) {
    this.lr = null;
    tpb(this, a);
  };
  g.k.zQ = function () {
    this.Hp = null;
    this.Ag = new N8(this, this.C, "rpc", this.J);
    this.Ag.Rt = this.Jn;
    this.Ag.VI = 0;
    var a = this.xQ.clone();
    g.Tj(a, "RID", "rpc");
    g.Tj(a, "SID", this.C);
    g.Tj(a, "CI", this.kI ? "0" : "1");
    g.Tj(a, "AID", this.Pw);
    W8(this, a);
    if (!g.He || g.Bc(10))
      g.Tj(a, "TYPE", "xmlhttp"), Vob(this.Ag, a, !0, this.wE, !1);
    else {
      g.Tj(a, "TYPE", "html");
      var b = this.Ag,
        c = !!this.wE;
      b.Lw = 3;
      b.gr = t7(a.clone());
      $ob(b, c);
    }
  };
  g.k.wQ = function (a, b) {
    if (0 != this.j && (this.Ag == a || this.Ej == a))
      if (((this.Kn = a.vA), this.Ej == a && 3 == this.j))
        if (7 < this.Tt) {
          try {
            var c = this.D.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.Hp) {
                  if (this.Ag)
                    if (this.Ag.Kw + 3e3 < this.Ej.Kw)
                      V8(this), this.Ag.cancel(), (this.Ag = null);
                    else break a;
                  wpb(this);
                  M8(19);
                }
              }
            else
              (this.yQ = a[1]),
                0 < this.yQ - this.Pw &&
                  37500 > a[2] &&
                  this.kI &&
                  0 == this.Nw &&
                  !this.Ut &&
                  (this.Ut = K8((0, g.Pa)(this.WZ, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Ag == a && V8(this), !g.Ob(b)))
        for (a = this.D.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Pw = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.C = c[1]),
                  (this.wE = c[2]),
                  (c = c[3]),
                  null != c ? (this.Tt = c) : (this.Tt = 6),
                  (this.j = 3),
                  this.Ai && this.Ai.DQ(),
                  (this.xQ = T8(this, this.xA() ? this.wE : null, this.aJ)),
                  upb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Ai && this.Ai.CQ(c),
                (this.Nw = 0));
  };
  g.k.WZ = function () {
    null != this.Ut &&
      ((this.Ut = null), this.Ag.cancel(), (this.Ag = null), wpb(this), M8(20));
  };
  g.k.uE = function (a) {
    if (this.Ag == a) {
      V8(this);
      this.Ag = null;
      var b = 2;
    } else if (this.Ej == a) (this.Ej = null), (b = 1);
    else return;
    this.Kn = a.vA;
    if (0 != this.j)
      if (a.Fp)
        if (1 == b) {
          b = Date.now() - a.Kw;
          var c = L8;
          c.dispatchEvent(new kpb(c, a.St ? a.St.length : 0, b, this.Ow));
          mpb(this);
          this.B.length = 0;
        } else upb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.Kn))) {
          if ((d = 1 == b))
            this.Ej || this.lr || 1 == this.j || 2 <= this.Ow
              ? (d = !1)
              : ((this.lr = K8(
                  (0, g.Pa)(this.AQ, this, a),
                  vpb(this, this.Ow)
                )),
                this.Ow++,
                (d = !0));
          d = !(d || (2 == b && wpb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.UZ = function (a) {
    if (!g.ob(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.Q8 = function (a) {
    a ? M8(2) : (M8(1), xpb(this, 8));
  };
  g.k.XI = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.yi();
    a.J = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ai && this.Ai.isActive(this);
  };
  g.k.Zm = function (a) {
    var b = L8;
    b.dispatchEvent(new lpb(b, a));
  };
  g.k.xA = function () {
    return !(!g.He || g.Bc(10));
  };
  g.k = zpb.prototype;
  g.k.DQ = function () {};
  g.k.CQ = function () {};
  g.k.BQ = function () {};
  g.k.bJ = function () {};
  g.k.EQ = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = Apb.prototype;
  g.k.Cf = function () {
    return 0 === this.j.length && 0 === this.u.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.u = [];
  };
  g.k.contains = function (a) {
    return g.ob(this.j, a) || g.ob(this.u, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.J7a)(b, a);
    0 <= c ? (g.qb(b, c), (b = !0)) : (b = !1);
    return b || g.rb(this.u, a);
  };
  g.k.Il = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.u.length;
    for (b = 0; b < c; ++b) a.push(this.u[b]);
    return a;
  };
  g.v(Bpb, g.eb);
  g.v(Cpb, g.eb);
  g.Sa(Y8, g.C);
  g.k = Y8.prototype;
  g.k.i7 = function () {
    this.Ji = Math.min(3e5, 2 * this.Ji);
    this.B();
    this.u && this.start();
  };
  g.k.start = function () {
    var a = this.Ji + 15e3 * Math.random();
    g.ro(this.j, a);
    this.u = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.u = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Ji = 5e3;
  };
  Epb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.ow("enable_client_streamz_web")) {
      a = g.t(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Zea(c.value)),
          (c = { serializedIncrementBatch: g.Hf(c.j()) }),
          g.by("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var Z8;
  g.Sa(Fpb, zpb);
  g.k = Fpb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.B.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.B.unsubscribe(a, b, c);
  };
  g.k.Ih = function (a) {
    return this.B.Ih(a);
  };
  g.k.ma = function (a, b) {
    return this.B.ma.apply(this.B, arguments);
  };
  g.k.dispose = function () {
    this.ea ||
      ((this.ea = !0),
      g.Ya(this.B),
      this.disconnect(),
      g.Ya(this.u),
      (this.u = null),
      (this.oa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ea;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.u.stop();
      this.I = a || null;
      this.D = b || 0;
      a = this.Aa + "/test";
      b = this.Aa + "/bind";
      var d = new ipb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ra
        ),
        e = this.j;
      e && (e.Ai = null);
      d.Ai = this;
      this.j = d;
      Gpb(this);
      if (this.j) {
        d = g.mw("ID_TOKEN");
        var f = this.j.Jn || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.Jn = f;
      }
      e
        ? ((3 != e.getState() && 0 == qpb(e)) || e.getState(),
          this.j.connect(a, b, this.J, e.C, e.Pw))
        : c
        ? this.j.connect(a, b, this.J, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.J);
    }
  };
  g.k.disconnect = function (a) {
    this.V = a || 0;
    this.u.stop();
    Gpb(this);
    this.j && (3 == this.j.getState() && tpb(this.j), this.j.disconnect());
    this.V = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.Zc(a, b);
    this.u.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.C.push(a)
      : this.Cy() && (Gpb(this), ppb(this.j, a));
  };
  g.k.DQ = function () {
    this.u.reset();
    this.I = null;
    this.D = 0;
    if (this.C.length) {
      var a = this.C;
      this.C = [];
      for (var b = 0, c = a.length; b < c; ++b) ppb(this.j, a[b]);
    }
    this.ma("handlerOpened");
    Mnb(this.Ma, "BROWSER_CHANNEL");
  };
  g.k.BQ = function (a) {
    var b = 2 == a && 401 == this.j.Kn;
    4 == a || b || this.u.start();
    this.ma("handlerError", a, b);
    Snb(this.Fa, "BROWSER_CHANNEL");
  };
  g.k.bJ = function (a, b) {
    if (!this.u.isActive()) this.ma("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.C.push(e);
      }
    Onb(this.ya, "BROWSER_CHANNEL");
    a &&
      this.Ya.j.eJ(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.fb.j.eJ(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.EQ = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.D && (a.ui = "" + this.D);
    0 != this.V && (a.ui = "" + this.V);
    this.I && g.Zc(a, this.I);
    return a;
  };
  g.k.CQ = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.u.start(), this.j.disconnect())
      : this.ma("handlerMessage", new Dpb(a[0], a[1]));
    Qnb(this.Ja, "BROWSER_CHANNEL");
  };
  g.k.Cy = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Pq = function (a) {
    (this.J.loungeIdToken = a) || this.u.stop();
    if (this.Ta && this.j) {
      var b = this.j.Jn || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.Jn = b;
    }
  };
  g.k.Xr = function () {
    return this.J.id;
  };
  g.k.xs = function () {
    return this.u.isActive() ? this.u.u - Date.now() : NaN;
  };
  g.k.Pv = function () {
    var a = this.u;
    g.so(a.j);
    a.start();
  };
  g.k.o8 = function () {
    this.u.isActive();
    0 == qpb(this.j) && this.connect(this.I, this.D);
  };
  $8.prototype.C = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  $8.prototype.B = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  $8.prototype.D = function (a) {
    a(Error("request timed out"));
  };
  g.v(Ipb, g.sd);
  g.k = Ipb.prototype;
  g.k.connect = function (a, b, c) {
    this.pd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.pd.disconnect(a);
  };
  g.k.Pv = function () {
    this.pd.Pv();
  };
  g.k.Xr = function () {
    return this.pd.Xr();
  };
  g.k.xs = function () {
    return this.pd.xs();
  };
  g.k.Cy = function () {
    return this.pd.Cy();
  };
  g.k.ZZ = function () {
    this.dispatchEvent("channelOpened");
    var a = this.pd,
      b = this.j;
    g.kB("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.kI,
      sessionId: a.j.C,
      arrayId: a.j.Pw,
    });
    g.kB("yt-remote-session-screen-id", b);
    a = j8();
    b = k8();
    g.ob(a, b) || a.push(b);
    qnb(a);
    snb();
  };
  g.k.XZ = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.YZ = function (a) {
    this.dispatchEvent(new Bpb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new Cpb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.pd.sendMessage(a, b);
  };
  g.k.Pq = function (a) {
    this.pd.Pq(a);
  };
  g.k.dispose = function () {
    this.pd.dispose();
  };
  g.k = Jpb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.I &&
      (this.B.stop(),
      (this.V = a),
      (this.J = b),
      Lpb(this),
      (a = g.mw("ID_TOKEN"))
        ? (this.C["x-youtube-identity-token"] = a)
        : delete this.C["x-youtube-identity-token"],
      this.j &&
        ((this.u.device = this.j.device),
        (this.u.name = this.j.name),
        (this.u.app = this.j.app),
        (this.u.id = this.j.id),
        this.j.o4 && (this.u.mdxVersion = "" + this.j.o4),
        this.j.theme && (this.u.theme = this.j.theme),
        this.j.capabilities && (this.u.capabilities = this.j.capabilities),
        this.j.U1 && (this.u.cst = this.j.U1),
        this.j.authuser && (this.u.authuser = this.j.authuser),
        this.j.pageId && (this.u.pageId = this.j.pageId)),
      0 !== this.J ? (this.u.ui = "" + this.J) : delete this.u.ui,
      Object.assign(this.u, this.V),
      (this.channel = new J8(this.pathPrefix, {
        E3: "gsessionid",
        s4: this.C,
        t4: this.u,
      })),
      this.channel.open(),
      (this.I = 2),
      Kpb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.B.stop();
    Lpb(this);
    this.channel &&
      (0 !== this.Y ? (this.u.ui = "" + this.Y) : delete this.u.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.xs = function () {
    return this.B.isActive() ? this.B.u - Date.now() : NaN;
  };
  g.k.Pv = function () {
    var a = this.B;
    g.so(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (Lpb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Pq = function (a) {
    a || this.B.stop();
    a
      ? (this.C["X-YouTube-LoungeId-Token"] = a)
      : delete this.C["X-YouTube-LoungeId-Token"];
  };
  g.k.Xr = function () {
    return this.j ? this.j.id : "";
  };
  g.k.ma = function (a) {
    return this.D.ma.apply(this.D, [a].concat(g.u(g.ya.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.D.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.D.unsubscribe(a, b, c);
  };
  g.k.Ih = function (a) {
    return this.D.Ih(a);
  };
  g.k.dispose = function () {
    this.ea ||
      ((this.ea = !0),
      g.Ya(this.D),
      this.disconnect(),
      g.Ya(this.B),
      (this.Aa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ea;
  };
  g.v(Mpb, g.sd);
  g.k = Mpb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Pv = function () {
    this.j.Pv();
  };
  g.k.Xr = function () {
    return this.j.Xr();
  };
  g.k.xs = function () {
    return this.j.xs();
  };
  g.k.Cy = function () {
    return 3 === this.j.I;
  };
  g.k.c_ = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.a_ = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.b_ = function (a) {
    this.dispatchEvent(new Bpb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new Cpb(401 === this.j.Fg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Pq = function (a) {
    this.j.Pq(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var Upb = Date.now(),
    b9 = null,
    f9 = Array(50),
    e9 = -1,
    g9 = !1;
  g.Sa(h9, g.lC);
  h9.prototype.zk = function () {
    return this.screens;
  };
  h9.prototype.contains = function (a) {
    return !!nnb(this.screens, a);
  };
  h9.prototype.get = function (a) {
    return a ? i8(this.screens, a) : null;
  };
  h9.prototype.info = function (a) {
    c9(this.I, a);
  };
  g.v(Ypb, g.lC);
  g.k = Ypb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.Gc) && this.uW();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.Gc) || (g.Mw(this.Gc), (this.Gc = NaN));
  };
  g.k.ra = function () {
    this.stop();
    g.lC.prototype.ra.call(this);
  };
  g.k.uW = function () {
    this.Gc = NaN;
    this.j = g.Pw(a9(this.B, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.J },
      timeout: 5e3,
      onSuccess: (0, g.Pa)(this.e_, this),
      onError: (0, g.Pa)(this.d_, this),
      onTimeout: (0, g.Pa)(this.f_, this),
    });
  };
  g.k.e_ = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.C;
    a.name = this.I;
    b = -1;
    this.D &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.ma("pairingComplete", new f8(a), b);
  };
  g.k.d_ = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.u >= Srb.length
        ? this.ma("pairingFailed", Error("DIAL polling timed out"))
        : ((a = Srb[this.u]),
          (this.Gc = g.Kw((0, g.Pa)(this.uW, this), a)),
          this.u++)
      : this.ma("pairingFailed", Error("Server error " + a.status));
  };
  g.k.f_ = function () {
    this.j = null;
    this.ma("pairingFailed", Error("Server not responding"));
  };
  var Srb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.Sa(j9, h9);
  g.k = j9.prototype;
  g.k.start = function () {
    i9(this) && this.ma("screenChange");
    !g.lB("yt-remote-lounge-token-expiration") && Zpb(this);
    g.Mw(this.j);
    this.j = g.Kw((0, g.Pa)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    i9(this);
    Vpb(this, a);
    k9(this, !1);
    this.ma("screenChange");
    b(a);
    a.token || Zpb(this);
  };
  g.k.remove = function (a, b) {
    var c = i9(this);
    Xpb(this, a) && (k9(this, !1), (c = !0));
    b(a);
    c && this.ma("screenChange");
  };
  g.k.jI = function (a, b, c, d) {
    var e = i9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), k9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.ma("screenChange");
  };
  g.k.ra = function () {
    g.Mw(this.j);
    j9.Hf.ra.call(this);
  };
  g.k.d3 = function (a) {
    i9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    k9(this, !b);
    b && c9(this.I, "Missed " + b + " lounge tokens.");
  };
  g.k.b3 = function (a) {
    c9(this.I, "Requesting lounge tokens failed: " + a);
  };
  g.v(aqb, g.lC);
  g.k = aqb.prototype;
  g.k.start = function () {
    var a = parseInt(g.lB("yt-remote-fast-check-period") || "0", 10);
    (this.C = g.Ra() - 144e5 < a ? 0 : a)
      ? l9(this)
      : ((this.C = g.Ra() + 3e5),
        g.kB("yt-remote-fast-check-period", this.C),
        this.mO());
  };
  g.k.Cf = function () {
    return g.Rc(this.j);
  };
  g.k.update = function () {
    $pb("Updating availability on schedule.");
    var a = this.I(),
      b = g.Hc(
        this.j,
        function (c, d) {
          return c && !!i8(a, d);
        },
        this
      );
    dqb(this, b);
  };
  g.k.ra = function () {
    g.Mw(this.B);
    this.B = NaN;
    this.u && (this.u.abort(), (this.u = null));
    g.lC.prototype.ra.call(this);
  };
  g.k.mO = function () {
    g.Mw(this.B);
    this.B = NaN;
    this.u && this.u.abort();
    var a = eqb(this);
    if (Zmb(a)) {
      var b = a9(this.D, "/pairing/get_screen_availability");
      this.u = Hpb(
        this.D,
        b,
        { lounge_token: g.Mc(a).join(",") },
        (0, g.Pa)(this.O6, this, a),
        (0, g.Pa)(this.N6, this)
      );
    } else dqb(this, {}), l9(this);
  };
  g.k.O6 = function (a, b) {
    this.u = null;
    var c = g.Mc(eqb(this));
    if (g.Eb(c, g.Mc(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      dqb(this, c);
      l9(this);
    } else this.Of("Changing Screen set during request."), this.mO();
  };
  g.k.N6 = function (a) {
    this.Of("Screen availability failed: " + a);
    this.u = null;
    l9(this);
  };
  g.k.Of = function (a) {
    c9("OnlineScreenService", a);
  };
  g.Sa(m9, h9);
  g.k = m9.prototype;
  g.k.start = function () {
    this.u.start();
    this.j.start();
    this.screens.length &&
      (this.ma("screenChange"), this.j.Cf() || this.ma("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.u.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.u.remove(a, b, c);
    this.j.update();
  };
  g.k.jI = function (a, b, c, d) {
    this.u.contains(a)
      ? this.u.jI(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        c9(this.I, a),
        d(Error(a)));
  };
  g.k.zk = function (a) {
    return a
      ? this.screens
      : g.tb(
          this.screens,
          g.Km(
            this.B,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.FQ = function () {
    return g.Km(
      this.zk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.GQ = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new Ypb(this.C, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.Ya(l);
      e(n9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.Ya(l);
      f(m);
    });
    l.start();
    return (0, g.Pa)(l.stop, l);
  };
  g.k.g_ = function (a, b, c, d) {
    g.Pw(a9(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.Pa)(function (e, f) {
        e = new f8(f.screen || {});
        if (!e.name || iqb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); iqb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(n9(this, e));
      }, this),
      onError: (0, g.Pa)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.Pa)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.ra = function () {
    g.Ya(this.u);
    g.Ya(this.j);
    m9.Hf.ra.call(this);
  };
  g.k.o3 = function () {
    kqb(this);
    this.ma("screenChange");
    this.j.update();
  };
  m9.prototype.dispose = m9.prototype.dispose;
  g.Sa(o9, g.lC);
  g.k = o9.prototype;
  g.k.lj = function (a) {
    this.isDisposed() ||
      (a && (q9(this, "" + a), this.ma("sessionFailed")),
      (this.j = null),
      this.ma("sessionScreen", null));
  };
  g.k.info = function (a) {
    c9(this.Fa, a);
  };
  g.k.HQ = function () {
    return null;
  };
  g.k.EO = function (a) {
    var b = this.u;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.Pa)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.Pa)(function () {
        q9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.ra = function () {
    this.EO("");
    o9.Hf.ra.call(this);
  };
  g.v(r9, o9);
  g.k = r9.prototype;
  g.k.DO = function (a) {
    if (this.B) {
      if (this.B == a) return;
      q9(this, "Overriding cast session with new session object");
      wqb(this);
      this.Aa = !1;
      this.Y = "unknown";
      this.B.removeUpdateListener(this.oa);
      this.B.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.ya
      );
    }
    this.B = a;
    this.B.addUpdateListener(this.oa);
    this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ya);
    rqb(this, "getMdxSessionStatus");
  };
  g.k.Oy = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.di(a));
  };
  g.k.stop = function () {
    this.B
      ? this.B.stop(
          (0, g.Pa)(function () {
            this.lj();
          }, this),
          (0, g.Pa)(function () {
            this.lj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.lj(Error("Stopping cast device without session."));
  };
  g.k.EO = function () {};
  g.k.ra = function () {
    this.info("disposeInternal");
    wqb(this);
    this.B &&
      (this.B.removeUpdateListener(this.oa),
      this.B.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.ya
      ));
    this.B = null;
    o9.prototype.ra.call(this);
  };
  g.k.A7 = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = b8(b)), g.Ia(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.di(b)),
            a)
          ) {
            case "mdxSessionStatus":
              oqb(this, b);
              break;
            case "loungeToken":
              sqb(this, b);
              break;
            default:
              q9(this, "Unknown youtube message: " + a);
          }
        else q9(this, "Unable to parse message.");
      else q9(this, "No data in message.");
  };
  g.k.AT = function (a, b, c, d) {
    g.Mw(this.V);
    this.V = 0;
    hqb(
      this.C,
      this.u.label,
      a,
      this.u.friendlyName,
      (0, g.Pa)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (q9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.V = g.Kw((0, g.Pa)(this.AT, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.HQ = function () {
    return this.B;
  };
  g.k.h_ = function (a) {
    this.isDisposed() || a || (q9(this, "Cast session died."), this.lj());
  };
  g.v(s9, o9);
  g.k = s9.prototype;
  g.k.DO = function (a) {
    this.B = a;
    this.B.addUpdateListener(this.Ja);
  };
  g.k.Oy = function (a) {
    this.Ma = a;
    this.ea();
  };
  g.k.stop = function () {
    Eqb(this);
    this.B
      ? this.B.stop(
          (0, g.Pa)(this.lj, this, null),
          (0, g.Pa)(this.lj, this, "Failed to stop DIAL device.")
        )
      : this.lj();
  };
  g.k.ra = function () {
    Eqb(this);
    this.B && this.B.removeUpdateListener(this.Ja);
    this.B = null;
    o9.prototype.ra.call(this);
  };
  g.k.i_ = function (a) {
    this.isDisposed() ||
      a ||
      (q9(this, "DIAL session died."),
      this.D(),
      (this.D = function () {}),
      this.lj());
  };
  g.v(v9, o9);
  v9.prototype.stop = function () {
    this.lj();
  };
  v9.prototype.DO = function () {};
  v9.prototype.Oy = function () {
    g.Mw(this.B);
    this.B = NaN;
    var a = i8(this.C.zk(), this.u.label);
    a ? p9(this, a) : this.lj(Error("No such screen"));
  };
  v9.prototype.ra = function () {
    g.Mw(this.B);
    this.B = NaN;
    o9.prototype.ra.call(this);
  };
  g.v(w9, g.lC);
  g.k = w9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.V, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.I
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.Pa)(this.z6, this);
    c = new chrome.cast.ApiConfig(c, (0, g.Pa)(this.cW, this), e, d, a);
    c.customDialLaunchCallback = (0, g.Pa)(this.x5, this);
    chrome.cast.initialize(
      c,
      (0, g.Pa)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.D),
          Rpb(),
          this.u.subscribe("onlineScreenChange", (0, g.Pa)(this.IQ, this)),
          (this.B = Hqb(this)),
          chrome.cast.setCustomReceivers(
            this.B,
            function () {},
            (0, g.Pa)(function (f) {
              this.Of("Failed to set initial custom receivers: " + g.di(f));
            }, this)
          ),
          this.ma("yt-remote-cast2-availability-change", y9(this)),
          b(!0));
      }, this),
      (0, g.Pa)(function (f) {
        this.Of("Failed to initialize API: " + g.di(f));
        b(!1);
      }, this)
    );
  };
  g.k.t8 = function (a, b) {
    x9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        x9("Unsetting old screen status: " + this.j.u.friendlyName),
          z9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = i8(this.u.zk(), a);
        if (!c) {
          x9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          x9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = Fqb(this, c);
        a ||
          (x9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.B.push(a),
          chrome.cast.setCustomReceivers(
            this.B,
            function () {},
            (0, g.Pa)(function (d) {
              this.Of("Failed to set initial custom receivers: " + g.di(d));
            }, this)
          ));
        x9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        z9(this, new v9(this.u, a), !0);
      }
      this.j.EO(b);
    } else x9("setConnectedScreenStatus: no screen.");
  };
  g.k.v8 = function (a) {
    this.isDisposed()
      ? this.Of("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Oy(a)
      : this.Of("Setting connection data without a session");
  };
  g.k.k_ = function () {
    this.isDisposed()
      ? this.Of("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), z9(this, null))
      : x9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.Pa)(this.cW, this),
      (0, g.Pa)(this.R6, this)
    );
  };
  g.k.ra = function () {
    this.u.unsubscribe("onlineScreenChange", (0, g.Pa)(this.IQ, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.D);
    var a = Opb,
      b = g.Fa("yt.mdx.remote.debug.handlers_");
    g.rb(b || [], a);
    g.Ya(this.j);
    g.lC.prototype.ra.call(this);
  };
  g.k.Of = function (a) {
    c9("Controller", a);
  };
  g.k.eW = function (a, b) {
    this.j == a &&
      (b || z9(this, null), this.ma("yt-remote-cast2-session-change", b));
  };
  g.k.w6 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          x9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.u.label != a.label)
                x9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.u.friendlyName
                ),
                  this.j.stop();
              else {
                x9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.ma("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                z9(this, new v9(this.u, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                z9(this, new s9(this.u, a, this.C, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                z9(this, new r9(this.u, a, this.config_));
                break;
              default:
                this.Of("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.u.label == a.label
              ? this.j.stop()
              : this.Of("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.Of("onReceiverAction_ called without receiver.");
  };
  g.k.x5 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.Of("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.u : null;
    if (!c || c.label != b.label)
      return (
        this.Of(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          x9("Reselecting dial screen."),
          this.ma("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.Of(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      z9(this, new s9(this.u, b, this.C, this.config_));
    }
    b = this.j;
    b.V = a;
    b.V.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.V.extraData || {}),
        (c = a.screenId || null),
        t9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = Bqb(
                b,
                {
                  name: b.u.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.V.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.uw(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = Cqb(b, c)))
          : (a = Cqb(b, c)))
      : (a = zqb(b));
    return a;
  };
  g.k.cW = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.I) {
      x9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            x9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              z9(this, new r9(this.u, c, this.config_), !0);
          else {
            this.Of(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.u,
          e = i8(this.u.zk(), d.label);
        e &&
          g8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (x9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.Ya(this.j),
          (this.j = new r9(this.u, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.Pa)(this.eW, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return Gqb(b, b.j);
          }),
          this.j.Oy(null));
        this.j.DO(a);
      }
    }
  };
  g.k.j_ = function () {
    return this.j ? this.j.HQ() : null;
  };
  g.k.R6 = function (a) {
    this.isDisposed() ||
      (this.Of("Failed to estabilish a session: " + g.di(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && z9(this, null),
      this.ma("yt-remote-cast2-session-failed"));
  };
  g.k.z6 = function (a) {
    x9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = y9(this);
      this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      y9(this) != b && this.ma("yt-remote-cast2-availability-change", y9(this));
    }
  };
  g.k.IQ = function () {
    this.isDisposed() ||
      ((this.B = Hqb(this)),
      x9("Updating custom receivers: " + g.di(this.B)),
      chrome.cast.setCustomReceivers(
        this.B,
        function () {},
        (0, g.Pa)(function () {
          this.Of("Failed to set custom receivers.");
        }, this)
      ),
      this.ma("yt-remote-cast2-availability-change", y9(this)));
  };
  w9.prototype.setLaunchParams = w9.prototype.v8;
  w9.prototype.setConnectedScreenStatus = w9.prototype.t8;
  w9.prototype.stopSession = w9.prototype.k_;
  w9.prototype.getCastSession = w9.prototype.j_;
  w9.prototype.requestSession = w9.prototype.requestSession;
  w9.prototype.init = w9.prototype.init;
  w9.prototype.dispose = w9.prototype.dispose;
  var Qqb = [];
  g.k = G9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    Wqb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.No = a.hasPrevious),
      (this.Dk = a.hasNext),
      (this.J = a.playerTime),
      (this.I = a.playerTimeAt),
      (this.C = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.D = a.duration),
      (this.V = a.loadedTime),
      (this.B = a.liveIngestionTime),
      (this.u = !isNaN(this.B)));
  };
  g.k.fd = function () {
    return 1 == this.playerState;
  };
  g.k.Sk = function (a) {
    this.D = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.u ? this.D + H9(this) : this.D;
  };
  g.k.clone = function () {
    return new G9(Xqb(this));
  };
  g.v(M9, g.lC);
  g.k = M9.prototype;
  g.k.getState = function () {
    return this.B;
  };
  g.k.xs = function () {
    return this.C.getReconnectTimeout();
  };
  g.k.Pv = function () {
    this.C.reconnect();
  };
  g.k.play = function () {
    O9(this)
      ? (this.j ? this.j.play(null, g.wd, S9(this, "play")) : R9(this, "play"),
        $qb(this, 1, J9(N9(this))),
        this.ma("remotePlayerChange"))
      : P9(this, this.play);
  };
  g.k.pause = function () {
    O9(this)
      ? (this.j
          ? this.j.pause(null, g.wd, S9(this, "pause"))
          : R9(this, "pause"),
        $qb(this, 2, J9(N9(this))),
        this.ma("remotePlayerChange"))
      : P9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (O9(this)) {
      if (this.j) {
        var b = N9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.fd() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.wd, S9(this, "seekTo", { newTime: a }));
      } else R9(this, "seekTo", { newTime: a });
      $qb(this, 3, a);
      this.ma("remotePlayerChange");
    } else P9(this, g.Qa(this.seekTo, a));
  };
  g.k.stop = function () {
    if (O9(this)) {
      this.j
        ? this.j.stop(null, g.wd, S9(this, "stopVideo"))
        : R9(this, "stopVideo");
      var a = N9(this);
      a.index = -1;
      a.videoId = "";
      Wqb(a);
      Q9(this, a);
      this.ma("remotePlayerChange");
    } else P9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      if (this.u) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.u.setReceiverVolumeLevel(
            d,
            (0, g.Pa)(function () {
              d9("set receiver volume: " + d);
            }, this),
            (0, g.Pa)(function () {
              this.Of("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.u.setReceiverMuted(
            b,
            (0, g.Pa)(function () {
              d9("set receiver muted: " + b);
            }, this),
            (0, g.Pa)(function () {
              this.Of("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        R9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      Q9(this, c);
    } else P9(this, g.Qa(this.setVolume, a, b));
  };
  g.k.JQ = function (a, b) {
    if (O9(this)) {
      var c = N9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.di(b.style)),
        g.Zc(a, c.trackData));
      R9(this, "setSubtitlesTrack", a);
      Q9(this, c);
    } else P9(this, g.Qa(this.JQ, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    O9(this)
      ? ((b = b.getLanguageInfo().getId()),
        R9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = N9(this)),
        (a.audioTrackId = b),
        Q9(this, a))
      : P9(this, g.Qa(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = N9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    K9(l, a, c || 0);
    void 0 !== b && (I9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.di(h));
    R9(this, "setPlaylist", m);
    d || Q9(this, l);
  };
  g.k.kH = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "previous");
    } else P9(this, g.Qa(this.kH, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (O9(this)) {
      if (a && b) {
        var c = N9(this);
        K9(c, a, b);
        Q9(this, c);
      }
      R9(this, "next");
    } else P9(this, g.Qa(this.nextVideo, a, b));
  };
  g.k.Fx = function () {
    if (O9(this)) {
      R9(this, "clearPlaylist");
      var a = N9(this);
      a.reset();
      Q9(this, a);
      this.ma("remotePlayerChange");
    } else P9(this, this.Fx);
  };
  g.k.KS = function () {
    O9(this) ? R9(this, "dismissAutoplay") : P9(this, this.KS);
  };
  g.k.dispose = function () {
    if (3 != this.B) {
      var a = this.B;
      this.B = 3;
      this.ma("proxyStateChange", a, this.B);
    }
    g.lC.prototype.dispose.call(this);
  };
  g.k.ra = function () {
    Zqb(this);
    this.C = null;
    this.D.clear();
    L9(this, null);
    g.lC.prototype.ra.call(this);
  };
  g.k.GO = function (a) {
    if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
      var b = this.B;
      this.B = a;
      this.ma("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.D.Cf(); )
          (b = a = this.D),
            0 === b.j.length && ((b.j = b.u), b.j.reverse(), (b.u = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.u6 = function (a, b) {
    this.ma(a, b);
  };
  g.k.k5 = function (a) {
    if (!a) this.MC(null), L9(this, null);
    else if (this.u.receiver.volume) {
      a = this.u.receiver.volume;
      var b = N9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        d9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          Q9(this, b);
    }
  };
  g.k.MC = function (a) {
    d9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.V);
    if ((this.j = a))
      this.j.addUpdateListener(this.V),
        arb(this),
        this.ma("remotePlayerChange");
  };
  g.k.j5 = function (a) {
    a ? (arb(this), this.ma("remotePlayerChange")) : this.MC(null);
  };
  g.k.gP = function () {
    R9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.p5 = function () {
    var a = Tqb();
    a && L9(this, a);
  };
  g.k.Of = function (a) {
    c9("CP", a);
  };
  g.v(V9, g.lC);
  g.k = V9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.Ja && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      I9(this.j, n);
      this.D = "UNSUPPORTED";
      c = this.Ja ? "setInitialState" : "setPlaylist";
      T9("Connecting with " + c + " and params: " + g.di(m));
      this.u.connect({ method: c, params: g.di(m) }, a, tnb());
    } else T9("Connecting without params"), this.u.connect({}, a, tnb());
    erb(this);
  };
  g.k.Pq = function (a) {
    this.u.Pq(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Ea("yt.mdx.remote.remoteClient_", null),
      this.ma("beforeDispose"),
      U9(this, 3));
    g.lC.prototype.dispose.call(this);
  };
  g.k.ra = function () {
    frb(this);
    hrb(this);
    grb(this);
    g.Mw(this.V);
    this.V = NaN;
    g.Mw(this.Y);
    this.Y = NaN;
    this.C = null;
    g.Vz(this.ea);
    this.ea.length = 0;
    this.u.dispose();
    g.lC.prototype.ra.call(this);
    this.D = this.J = this.B = this.j = this.u = null;
  };
  g.k.vU = function (a) {
    if (!this.B || 0 === this.B.length) return !1;
    for (var b = g.t(this.B), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.Q2 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.LB()) ? this.u.Cy() && isNaN(this.I) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Tx = function (a) {
    T9("Disconnecting with " + a);
    g.Ea("yt.mdx.remote.remoteClient_", null);
    frb(this);
    this.ma("beforeDisconnect", a);
    1 == a && l8();
    this.u.disconnect(a);
    this.dispose();
  };
  g.k.O2 = function () {
    var a = this.j;
    this.C && ((a = this.j.clone()), K9(a, this.C, a.index));
    return Xqb(a);
  };
  g.k.w8 = function (a) {
    var b = this,
      c = new G9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.C = c.videoId),
      g.Mw(this.V),
      (this.V = g.Kw(function () {
        if (b.C) {
          var e = b.C;
          b.C = null;
          b.j.videoId != e && W9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      J9(this.j) == J9(c) &&
      g.di(this.j.trackData) == g.di(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.Hb(
      d,
      function (e) {
        this.ma(e);
      },
      this
    );
  };
  g.k.yT = function () {
    var a = this.u.Xr(),
      b = g.kb(this.B, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.LB = function () {
    return this.u.xs();
  };
  g.k.J2 = function () {
    return this.D || "UNSUPPORTED";
  };
  g.k.K2 = function () {
    return this.J || "";
  };
  g.k.l_ = function () {
    !isNaN(this.LB()) && this.u.Pv();
  };
  g.k.s8 = function (a, b) {
    W9(this, a, b);
    jrb(this);
  };
  g.k.KQ = function () {
    var a = g.$w("SID", "") || "",
      b = g.$w("SAPISID", "") || "",
      c = g.$w("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.Hf(g.Gf(a), 2);
    b = g.Hf(g.Gf(b), 2);
    c = g.Hf(g.Gf(c), 2);
    return g.Hf(g.Gf(a + "," + b + "," + c), 2);
  };
  V9.prototype.subscribe = V9.prototype.subscribe;
  V9.prototype.unsubscribeByKey = V9.prototype.Ih;
  V9.prototype.getProxyState = V9.prototype.Q2;
  V9.prototype.disconnect = V9.prototype.Tx;
  V9.prototype.getPlayerContextData = V9.prototype.O2;
  V9.prototype.setPlayerContextData = V9.prototype.w8;
  V9.prototype.getOtherConnectedRemoteId = V9.prototype.yT;
  V9.prototype.getReconnectTimeout = V9.prototype.LB;
  V9.prototype.getAutoplayMode = V9.prototype.J2;
  V9.prototype.getAutoplayVideoId = V9.prototype.K2;
  V9.prototype.reconnect = V9.prototype.l_;
  V9.prototype.sendMessage = V9.prototype.s8;
  V9.prototype.getXsrfToken = V9.prototype.KQ;
  V9.prototype.isCapabilitySupportedOnConnectedDevices = V9.prototype.vU;
  g.v(vrb, h9);
  g.k = vrb.prototype;
  g.k.zk = function (a) {
    return this.Pg.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.Pg.$_c(a);
  };
  g.k.get = function (a) {
    return this.Pg.$_g(a);
  };
  g.k.start = function () {
    this.Pg.$_st();
  };
  g.k.add = function (a, b, c) {
    this.Pg.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.Pg.$_r(a, b, c);
  };
  g.k.jI = function (a, b, c, d) {
    this.Pg.$_un(a, b, c, d);
  };
  g.k.ra = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.Pg.$_ubk(this.j[a]);
    this.j.length = 0;
    this.Pg = null;
    h9.prototype.ra.call(this);
  };
  g.k.m_ = function () {
    this.ma("screenChange");
  };
  g.k.c6 = function () {
    this.ma("onlineScreenChange");
  };
  m9.prototype.$_st = m9.prototype.start;
  m9.prototype.$_gspc = m9.prototype.g_;
  m9.prototype.$_gsppc = m9.prototype.GQ;
  m9.prototype.$_c = m9.prototype.contains;
  m9.prototype.$_g = m9.prototype.get;
  m9.prototype.$_a = m9.prototype.add;
  m9.prototype.$_un = m9.prototype.jI;
  m9.prototype.$_r = m9.prototype.remove;
  m9.prototype.$_gs = m9.prototype.zk;
  m9.prototype.$_gos = m9.prototype.FQ;
  m9.prototype.$_s = m9.prototype.subscribe;
  m9.prototype.$_ubk = m9.prototype.Ih;
  var g$ = null,
    j$ = !1,
    X9 = null,
    Y9 = null,
    Grb = null,
    b$ = [];
  g.v(Lrb, g.C);
  g.k = Lrb.prototype;
  g.k.ra = function () {
    g.C.prototype.ra.call(this);
    this.j.stop();
    this.u.stop();
    this.J.stop();
    var a = this.Ac;
    a.unsubscribe("proxyStateChange", this.bW, this);
    a.unsubscribe("remotePlayerChange", this.RC, this);
    a.unsubscribe("remoteQueueChange", this.TG, this);
    a.unsubscribe("previousNextChange", this.YV, this);
    a.unsubscribe("nowAutoplaying", this.SV, this);
    a.unsubscribe("autoplayDismissed", this.uV, this);
    this.Ac = this.module = null;
  };
  g.k.Bk = function (a) {
    var b = g.ya.apply(1, arguments);
    if (2 != this.Ac.B)
      if (k$(this)) {
        if (1081 != N9(this.Ac).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              N9(this.Ac).fd() ? this.Ac.pause() : this.Ac.play();
              break;
            case "control_play":
              this.Ac.play();
              break;
            case "control_pause":
              this.Ac.pause();
              break;
            case "control_seek":
              this.I.UI(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              Nrb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.F.getCurrentTime();
            l$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            l$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            Nrb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.h5 = function (a) {
    this.J.LZ(a);
  };
  g.k.m9 = function (a) {
    this.Bk("control_subtitles_set_track", g.Rc(a) ? null : a);
  };
  g.k.EX = function () {
    var a = this.F.getOption("captions", "track");
    g.Rc(a) || Nrb(this, a);
  };
  g.k.xc = function (a) {
    this.module.xc(a, this.F.getVideoData().lengthSeconds);
  };
  g.k.N5 = function () {
    g.Rc(this.B) || Orb(this, this.B);
    this.C = !1;
  };
  g.k.bW = function (a, b) {
    this.u.stop();
    2 === b && this.wX();
  };
  g.k.RC = function () {
    if (k$(this)) {
      this.j.stop();
      var a = N9(this.Ac);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Bh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Bh = 0;
          break;
        default:
          this.module.Bh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.qc(new g.EM(8));
          this.vX();
          break;
        case 1085:
        case 3:
          this.qc(new g.EM(9));
          break;
        case 1083:
        case 0:
          this.qc(new g.EM(2));
          this.I.stop();
          this.xc(this.F.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.qc(new g.EM(4));
          break;
        case 2:
          this.qc(new g.EM(4));
          this.xc(J9(a));
          break;
        case -1:
          this.qc(new g.EM(64));
          break;
        case -1e3:
          this.qc(
            new g.EM(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              pF: 2,
            })
          );
      }
      a = N9(this.Ac).trackData;
      var b = this.B;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.B = a), Orb(this, a));
      a = N9(this.Ac);
      -1 === a.volume ||
        (Math.round(this.F.getVolume()) === a.volume &&
          this.F.isMuted() === a.muted) ||
        this.V.isActive() ||
        this.lY();
    } else Mrb(this);
  };
  g.k.YV = function () {
    this.F.ma("mdxpreviousnextchange");
  };
  g.k.TG = function () {
    k$(this) || Mrb(this);
  };
  g.k.SV = function (a) {
    isNaN(a) || this.F.ma("mdxnowautoplaying", a);
  };
  g.k.uV = function () {
    this.F.ma("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    k$(this) && this.Ac.setAudioTrack(this.F.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === N9(this.Ac).playerState ? l$(this, a) : b && this.Ac.seekTo(a);
  };
  g.k.lY = function () {
    var a = this;
    if (k$(this)) {
      var b = N9(this.Ac);
      this.events.Hc(this.Y);
      b.muted ? this.F.mute() : this.F.unMute();
      this.F.setVolume(b.volume);
      this.Y = this.events.S(this.F, "onVolumeChange", function (c) {
        Jrb(a, c);
      });
    }
  };
  g.k.vX = function () {
    this.j.stop();
    if (!this.Ac.isDisposed()) {
      var a = N9(this.Ac);
      a.fd() && this.qc(new g.EM(8));
      this.xc(J9(a));
      this.j.start();
    }
  };
  g.k.wX = function () {
    this.u.stop();
    this.j.stop();
    var a = this.Ac.xs();
    2 == this.Ac.B && !isNaN(a) && this.u.start();
  };
  g.k.qc = function (a) {
    this.u.stop();
    var b = this.D;
    if (!g.JM(b, a)) {
      var c = g.S(a, 2);
      c !== g.S(this.D, 2) && this.F.Iz(c);
      this.D = a;
      Qrb(this.module, b, a);
    }
  };
  g.v(m$, g.T);
  m$.prototype.Sc = function () {
    this.j.show();
  };
  m$.prototype.Bb = function () {
    this.j.hide();
  };
  m$.prototype.u = function () {
    d8("mdx-privacy-popup-cancel");
    this.Bb();
  };
  m$.prototype.B = function () {
    d8("mdx-privacy-popup-confirm");
    this.Bb();
  };
  g.v(n$, g.T);
  n$.prototype.onStateChange = function (a) {
    this.uc(a.state);
  };
  n$.prototype.uc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.S(a, 128)
        ? g.mM("Error on $RECEIVER_NAME", b)
        : a.fd() || g.KM(a)
        ? g.mM("Playing on $RECEIVER_NAME", b)
        : g.mM("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.v(o$, g.dV);
  o$.prototype.C = function () {
    var a = this.F.getOption("remote", "receivers");
    a && 1 < a.length && !this.F.getOption("remote", "quickCast")
      ? ((this.nt = g.Ib(a, this.j, this)),
        g.eV(this, g.xh(a, this.j)),
        (a = this.F.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.xj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  o$.prototype.j = function (a) {
    return a.key;
  };
  o$.prototype.lk = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.nt[a].name;
  };
  o$.prototype.Yg = function (a) {
    g.dV.prototype.Yg.call(this, a);
    this.F.setOption("remote", "currentReceiver", this.nt[a]);
    this.ub.Bb();
  };
  g.v(Prb, g.aS);
  g.k = Prb.prototype;
  g.k.create = function () {
    var a = this.player.T(),
      b = g.oI(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.K("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.K("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.K("enable_cast_short_lived_lounge_token"),
    };
    Arb(b, a);
    this.subscriptions.push(g.nA("yt-remote-before-disconnect", this.f5, this));
    this.subscriptions.push(g.nA("yt-remote-connection-change", this.A6, this));
    this.subscriptions.push(
      g.nA("yt-remote-receiver-availability-change", this.aW, this)
    );
    this.subscriptions.push(g.nA("yt-remote-auto-connect", this.y6, this));
    this.subscriptions.push(g.nA("yt-remote-receiver-resumed", this.x6, this));
    this.subscriptions.push(g.nA("mdx-privacy-popup-confirm", this.S7, this));
    this.subscriptions.push(g.nA("mdx-privacy-popup-cancel", this.R7, this));
    this.aW();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.aS.prototype.load.call(this);
    this.xl = new Lrb(this, this.player, this.Ac);
    var a = (a = Irb()) ? a.currentTime : 0;
    var b = Frb() ? new M9(f$(), void 0) : null;
    0 == a && b && (a = J9(N9(b)));
    0 !== a && this.xc(a);
    Qrb(this, this.Se, this.Se);
    this.player.qp(6);
  };
  g.k.unload = function () {
    this.player.ma("mdxautoplaycanceled");
    this.Kr = this.Zo;
    g.Za(this.xl, this.Ac);
    this.Ac = this.xl = null;
    g.aS.prototype.unload.call(this);
    this.player.qp(5);
    p$(this);
  };
  g.k.ra = function () {
    g.oA(this.subscriptions);
    g.aS.prototype.ra.call(this);
  };
  g.k.fp = function (a) {
    var b = g.ya.apply(1, arguments);
    this.loaded && this.xl.Bk.apply(this.xl, [a].concat(g.u(b)));
  };
  g.k.getAdState = function () {
    return this.Bh;
  };
  g.k.No = function () {
    return this.Ac ? N9(this.Ac).No : !1;
  };
  g.k.Dk = function () {
    return this.Ac ? N9(this.Ac).Dk : !1;
  };
  g.k.xc = function (a, b) {
    this.JU = a || 0;
    this.player.ma("progresssync", a, b);
    this.player.Na("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.JU;
  };
  g.k.getProgressState = function () {
    var a = N9(this.Ac),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Ah(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.u ? a.B + H9(a) : a.B,
      isAtLiveHead: 1 >= (a.u ? a.j + H9(a) : a.j) - this.getCurrentTime(),
      loaded: a.V,
      seekableEnd: a.u ? a.j + H9(a) : a.j,
      seekableStart: 0 < a.C ? a.C + H9(a) : a.C,
      offset: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Ac && this.Ac.nextVideo();
  };
  g.k.kH = function () {
    this.Ac && this.Ac.kH();
  };
  g.k.f5 = function (a) {
    1 === a && (this.UN = this.Ac ? N9(this.Ac) : null);
  };
  g.k.A6 = function () {
    var a = Frb() ? new M9(f$(), void 0) : null;
    if (a) {
      var b = this.Kr;
      this.loaded && this.unload();
      this.Ac = a;
      this.UN = null;
      b.key !== this.Zo.key && ((this.Kr = b), this.load());
    } else
      g.Ya(this.Ac),
        (this.Ac = null),
        this.loaded &&
          (this.unload(),
          (a = this.UN) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, J9(a)));
    this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.aW = function () {
    var a = [this.Zo],
      b = a.concat,
      c = Brb();
    D9() &&
      g.lB("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.nt = b.call(a, c);
    a = Drb() || this.Zo;
    q$(this, a);
    this.player.Na("onMdxReceiversChange");
  };
  g.k.y6 = function () {
    var a = Drb();
    q$(this, a);
  };
  g.k.x6 = function () {
    this.Kr = Drb();
  };
  g.k.S7 = function () {
    this.fD = !0;
    p$(this);
    j$ = !1;
    g$ && i$(g$, 1);
    g$ = null;
  };
  g.k.R7 = function () {
    this.fD = !1;
    p$(this);
    q$(this, this.Zo);
    this.Kr = this.Zo;
    j$ = !1;
    g$ = null;
    this.player.playVideo();
  };
  g.k.rh = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.nt;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? Uqb() : q$(this, b)),
          this.loaded ? this.Kr : this.Zo
        );
      case "quickCast":
        return 2 === this.nt.length &&
          "cast-selector-receiver" === this.nt[1].key
          ? (b && Uqb(), !0)
          : !1;
    }
  };
  g.k.gP = function () {
    this.Ac.gP();
  };
  g.k.Tk = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.$R("remote", Prb);
})(_yt_player);
