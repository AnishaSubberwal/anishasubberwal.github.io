(function (d) {
    function r(e, c, l, b, a) {
        function f() {
            n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");
            c && x(c, l, b, a);
            a.startOrder = [];
            a.newOrder = [];
            a.origSort = [];
            a.checkSort = [];
            v.removeStyle(a.prefix + "filter, filter, " + a.prefix + "transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");
            window.atob || v.css({
                display: "none",
                opacity: "0"
            });
            n.removeStyle(a.prefix + "transition, transition, " + a.prefix + "perspective, perspective, " + a.prefix + "perspective-origin, perspective-origin, " +
                (a.resizeContainer ? "height" : ""));
            "list" == a.layoutMode ? (p.css({
                display: a.targetDisplayList,
                opacity: "1"
            }), a.origDisplay = a.targetDisplayList) : (p.css({
                display: a.targetDisplayGrid,
                opacity: "1"
            }), a.origDisplay = a.targetDisplayGrid);
            a.origLayout = a.layoutMode;
            setTimeout(function () {
                v.removeStyle(a.prefix + "transition, transition");
                a.mixing = !1;
                if ("function" == typeof a.onMixEnd) {
                    var b = a.onMixEnd.call(this, a);
                    a = b ? b : a
                }
            })
        }
        clearInterval(a.failsafe);
        a.mixing = !0;
        a.filter = e;
        if ("function" == typeof a.onMixStart) {
            var g = a.onMixStart.call(this,
                a);
            a = g ? g : a
        }
        for (var k = a.transitionSpeed, g = 0; 2 > g; g++) {
            var h = 0 == g ? h = a.prefix : "";
            a.transition[h + "transition"] = "all " + k + "ms linear";
            a.transition[h + "transform"] = h + "translate3d(0,0,0)";
            a.perspective[h + "perspective"] = a.perspectiveDistance + "px";
            a.perspective[h + "perspective-origin"] = a.perspectiveOrigin
        }
        var w = a.targetSelector,
            v = b.find(w);
        v.each(function () {
            this.data = {}
        });
        var n = v.parent();
        n.css(a.perspective);
        a.easingFallback = "ease-in-out";
        "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
        "windback" == a.easing && (a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
        "windup" == a.easing && (a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
        g = "list" == a.layoutMode && null != a.listEffects ? a.listEffects : a.effects;
        Array.prototype.indexOf && (a.fade = -1 < g.indexOf("fade") ? "0" : "", a.scale = -1 < g.indexOf("scale") ? "scale(.01)" : "", a.rotateZ = -1 < g.indexOf("rotateZ") ? "rotate(180deg)" : "", a.rotateY = -1 < g.indexOf("rotateY") ? "rotateY(90deg)" : "", a.rotateX = -1 < g.indexOf("rotateX") ? "rotateX(90deg)" : "", a.blur = -1 < g.indexOf("blur") ? "blur(8px)" : "", a.grayscale = -1 < g.indexOf("grayscale") ? "grayscale(100%)" : "");
        var p = d(),
            s = d(),
            t = [],
            r = !1;
        "string" === typeof e ? t = z(e) : (r = !0, d.each(e, function (a) {
            t[a] = z(this)
        }));
        "or" == a.filterLogic ? ("" == t[0] && t.shift(), 1 > t.length ? s = s.add(b.find(w + ":visible")) : v.each(function () {
            var a = d(this);
            if (r) {
                var b = 0;
                d.each(t, function (d) {
                    this.length ?
                        a.is("." + this.join(", .")) && b++ : 0 < b && b++
                });
                b == t.length ? p = p.add(a) : s = s.add(a)
            } else a.is("." + t.join(", .")) ? p = p.add(a) : s = s.add(a)
        })) : (p = p.add(n.find(w + "." + t.join("."))), s = s.add(n.find(w + ":not(." + t.join(".") + "):visible")));
        e = p.length;
        var u = d(),
            q = d(),
            m = d();
        s.each(function () {
            var a = d(this);
            "none" != a.css("display") && (u = u.add(a), m = m.add(a))
        });
        if (p.filter(":visible").length == e && !u.length && !c) {
            if (a.origLayout == a.layoutMode) return f(), !1;
            if (1 == p.length) return "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass),
                m.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass), m.css("display", a.targetDisplayGrid)), f(), !1
        }
        a.origHeight = n.height();
        if (p.length) {
            b.removeClass(a.failClass);
            p.each(function () {
                var a = d(this);
                "none" == a.css("display") ? q = q.add(a) : m = m.add(a)
            });
            if (a.origLayout != a.layoutMode && !1 == a.animateGridList) return "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass), m.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass),
                m.css("display", a.targetDisplayGrid)), f(), !1;
            if (!window.atob) return f(), !1;
            v.css(a.clean);
            m.each(function () {
                this.data.origPos = d(this).offset()
            });
            "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass), q.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass), q.css("display", a.targetDisplayGrid));
            q.each(function () {
                this.data.showInterPos = d(this).offset()
            });
            u.each(function () {
                this.data.hideInterPos = d(this).offset()
            });
            m.each(function () {
                this.data.preInterPos =
                    d(this).offset()
            });
            "list" == a.layoutMode ? m.css("display", a.targetDisplayList) : m.css("display", a.targetDisplayGrid);
            c && x(c, l, b, a);
            if (c && A(a.origSort, a.checkSort)) return f(), !1;
            u.hide();
            q.each(function (a) {
                this.data.finalPos = d(this).offset()
            });
            m.each(function () {
                this.data.finalPrePos = d(this).offset()
            });
            a.newHeight = n.height();
            c && x("reset", null, b, a);
            q.hide();
            m.css("display", a.origDisplay);
            "block" == a.origDisplay ? (b.addClass(a.listClass), q.css("display", a.targetDisplayList)) : (b.removeClass(a.listClass), q.css("display",
                a.targetDisplayGrid));
            a.resizeContainer && n.css("height", a.origHeight + "px");
            e = {};
            for (g = 0; 2 > g; g++) h = 0 == g ? h = a.prefix : "", e[h + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, e[h + "filter"] = a.blur + " " + a.grayscale;
            q.css(e);
            m.each(function () {
                var b = this.data,
                    c = d(this);
                c.hasClass("mix_tohide") ? (b.preTX = b.origPos.left - b.hideInterPos.left, b.preTY = b.origPos.top - b.hideInterPos.top) : (b.preTX = b.origPos.left - b.preInterPos.left, b.preTY = b.origPos.top - b.preInterPos.top);
                for (var e = {}, k = 0; 2 > k; k++) {
                    var h =
                        0 == k ? h = a.prefix : "";
                    e[h + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)"
                }
                c.css(e)
            });
            "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass)) : (b.addClass(a.gridClass), b.removeClass(a.listClass));
            setTimeout(function () {
                if (a.resizeContainer) {
                    for (var b = {}, c = 0; 2 > c; c++) {
                        var e = 0 == c ? e = a.prefix : "";
                        b[e + "transition"] = "all " + k + "ms ease-in-out";
                        b.height = a.newHeight + "px"
                    }
                    n.css(b)
                }
                u.css("opacity", a.fade);
                q.css("opacity", 1);
                q.each(function () {
                    var b = this.data;
                    b.tX = b.finalPos.left - b.showInterPos.left;
                    b.tY = b.finalPos.top - b.showInterPos.top;
                    for (var c = {}, e = 0; 2 > e; e++) {
                        var h = 0 == e ? h = a.prefix : "";
                        c[h + "transition-property"] = h + "transform, " + h + "filter, opacity";
                        c[h + "transition-timing-function"] = a.easing + ", linear, linear";
                        c[h + "transition-duration"] = k + "ms";
                        c[h + "transition-delay"] = "0";
                        c[h + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
                        c[h + "filter"] = "none"
                    }
                    d(this).css("-webkit-transition", "all " + k + "ms " + a.easingFallback).css(c)
                });
                m.each(function () {
                    var b = this.data;
                    b.tX = 0 != b.finalPrePos.left ? b.finalPrePos.left -
                        b.preInterPos.left : 0;
                    b.tY = 0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;
                    for (var c = {}, e = 0; 2 > e; e++) {
                        var h = 0 == e ? h = a.prefix : "";
                        c[h + "transition"] = "all " + k + "ms " + a.easing;
                        c[h + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)"
                    }
                    d(this).css("-webkit-transition", "all " + k + "ms " + a.easingFallback).css(c)
                });
                b = {};
                for (c = 0; 2 > c; c++) e = 0 == c ? e = a.prefix : "", b[e + "transition"] = "all " + k + "ms " + a.easing + ", " + e + "filter " + k + "ms linear, opacity " + k + "ms linear", b[e + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " +
                    a.rotateZ, b[e + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
                u.css(b);
                n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (a) {
                    if (-1 < a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) - 1 < w.indexOf(".") ? d(a.target).hasClass(w.replace(".", "")) && f() : d(a.target).is(w) && f()
                })
            }, 10);
            a.failsafe = setTimeout(function () {
                a.mixing && f()
            }, k + 400)
        } else {
            a.resizeContainer && n.css("height", a.origHeight + "px");
            if (!window.atob) return f(), !1;
            u = s;
            setTimeout(function () {
                n.css(a.perspective);
                if (a.resizeContainer) {
                    for (var c = {}, e = 0; 2 > e; e++) {
                        var d = 0 == e ? d = a.prefix : "";
                        c[d + "transition"] = "height " + k + "ms ease-in-out";
                        c.height = a.minHeight + "px"
                    }
                    n.css(c)
                }
                v.css(a.transition);
                if (s.length) {
                    c = {};
                    for (e = 0; 2 > e; e++) d = 0 == e ? d = a.prefix : "", c[d + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, c[d + "filter"] = a.blur + " " + a.grayscale, c.opacity = a.fade;
                    u.css(c);
                    n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (c) {
                        if (-1 < c.originalEvent.propertyName.indexOf("transform") || -1 < c.originalEvent.propertyName.indexOf("opacity")) b.addClass(a.failClass), f()
                    })
                } else a.mixing = !1
            }, 10)
        }
    }

    function x(e, c, l, b) {
        function a(a, b) {
            var c = isNaN(1 * a.attr(e)) ? a.attr(e).toLowerCase() : 1 * a.attr(e),
                d = isNaN(1 * b.attr(e)) ? b.attr(e).toLowerCase() : 1 * b.attr(e);
            return c < d ? -1 : c > d ? 1 : 0
        }

        function f(a) {
            "asc" == c ? k.prepend(a).prepend(" ") : k.append(a).append(" ")
        }

        function g(a) {
            a = a.slice();
            for (var b = a.length, c = b; c--;) {
                var e = parseInt(Math.random() * b),
                    d = a[c];
                a[c] = a[e];
                a[e] = d
            }
            return a
        }
        l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var k = l.find(".mix_sorter");
        b.origSort.length || k.find(b.targetSelector + ":visible").each(function () {
            d(this).wrap("<s/>");
            b.origSort.push(d(this).parent().html().replace(/\s+/g, ""));
            d(this).unwrap()
        });
        k.empty();
        if ("reset" == e) d.each(b.startOrder, function () {
            k.append(this).append(" ")
        });
        else if ("default" == e) d.each(b.origOrder, function () {
            f(this)
        });
        else if ("random" == e) b.newOrder.length || (b.newOrder = g(b.startOrder)), d.each(b.newOrder, function () {
            k.append(this).append(" ")
        });
        else if ("custom" == e) d.each(c, function () {
            f(this)
        });
        else {
            if ("undefined" === typeof b.origOrder[0].attr(e)) return console.log("No such attribute found. Terminating"), !1;
            b.newOrder.length || (d.each(b.origOrder, function () {
                b.newOrder.push(d(this))
            }), b.newOrder.sort(a));
            d.each(b.newOrder, function () {
                f(this)
            })
        }
        b.checkSort = [];
        k.find(b.targetSelector + ":visible").each(function (a) {
            var c = d(this);
            0 == a && c.attr("data-checksum", "1");
            c.wrap("<s/>");
            b.checkSort.push(c.parent().html().replace(/\s+/g, ""));
            c.unwrap()
        });
        l.find(b.targetSelector).unwrap()
    }

    function B(e) {
        for (var c = ["Webkit", "Moz", "O", "ms"], d = 0; d < c.length; d++)
            if (c[d] + "Transition" in e.style) return c[d];
        return "transition" in e.style ? "" : !1
    }

    function A(e, c) {
        if (e.length != c.length) return !1;
        for (var d = 0; d < c.length; d++)
            if (e[d].compare && !e[d].compare(c[d]) || e[d] !== c[d]) return !1;
        return !0
    }

    function z(e) {
        e = e.replace(/\s{2,}/g, " ");
        var c = e.split(" ");
        d.each(c, function (d) {
            "all" == this && (c[d] = "mix_all")
        });
        "" == c[0] && c.shift();
        return c
    }
    var y = {
        init: function (e) {
            return this.each(function () {
                var c = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
                    c = c ? parseInt(c[1], 10) : !1,
                    l = function (a) {
                        a = document.getElementById(a);
                        var b = a.parentElement,
                            c = document.createElement("div"),
                            d = document.createDocumentFragment();
                        b.insertBefore(c, a);
                        d.appendChild(a);
                        b.replaceChild(a, c)
                    };
                (c && 31 == c || 32 == c) && l(this.id);
                var b = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: ["fade", "scale"],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    sortOnLoad: !1,
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onWarLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                e && d.extend(b, e);
                this.config = b;
                d.support.touch = "ontouchend" in document;
                d.support.touch && (b.isTouch = !0, b.resetDelay = 350);
                b.container = d(this);
                var a = b.container;
                b.prefix = B(a[0]);
                b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
                a.find(b.targetSelector).each(function () {
                    b.origOrder.push(d(this))
                });
                if (b.sortOnLoad) {
                    var f;
                    d.isArray(b.sortOnLoad) ? (c = b.sortOnLoad[0], f = b.sortOnLoad[1], d(b.sortSelector + "[data-sort=" + b.sortOnLoad[0] +
                        "][data-order=" + b.sortOnLoad[1] + "]").addClass("active")) : (d(b.sortSelector + "[data-sort=" + b.sortOnLoad + "]").addClass("active"), c = b.sortOnLoad, b.sortOnLoad = "desc");
                    x(c, f, a, b)
                }
                for (f = 0; 2 > f; f++) c = 0 == f ? c = b.prefix : "", b.transition[c + "transition"] = "all " + b.transitionSpeed + "ms ease-in-out", b.perspective[c + "perspective"] = b.perspectiveDistance + "px", b.perspective[c + "perspective-origin"] = b.perspectiveOrigin;
                for (f = 0; 2 > f; f++) c = 0 == f ? c = b.prefix : "", b.clean[c + "transition"] = "none";
                "list" == b.layoutMode ? (a.addClass(b.listClass),
                    b.origDisplay = b.targetDisplayList) : (a.addClass(b.gridClass), b.origDisplay = b.targetDisplayGrid);
                b.origLayout = b.layoutMode;
                f = b.showOnLoad.split(" ");
                d.each(f, function () {
                    d(b.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                });
                a.find(b.targetSelector).addClass("mix_all");
                "all" == f[0] && (f[0] = "mix_all", b.showOnLoad = "mix_all");
                var g = d();
                d.each(f, function () {
                    g = g.add(d("." + this))
                });
                g.each(function () {
                    var a = d(this);
                    "list" == b.layoutMode ? a.css("display", b.targetDisplayList) : a.css("display", b.targetDisplayGrid);
                    a.css(b.transition)
                });
                setTimeout(function () {
                    b.mixing = !0;
                    g.css("opacity", "1");
                    setTimeout(function () {
                        "list" == b.layoutMode ? g.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayList,
                            opacity: 1
                        }) : g.removeStyle(b.prefix + "transition, transition").css({
                            display: b.targetDisplayGrid,
                            opacity: 1
                        });
                        b.mixing = !1;
                        if ("function" == typeof b.onWarLoad) {
                            var a = b.onWarLoad.call(this, b);
                            b = a ? a : b
                        }
                    }, b.transitionSpeed)
                }, 10);
                b.filter = b.showOnLoad;
                d(b.sortSelector).bind(b.buttonEvent, function () {
                    if (!b.mixing) {
                        var c =
                            d(this),
                            e = c.attr("data-sort"),
                            f = c.attr("data-order");
                        if (!c.hasClass("active")) d(b.sortSelector).removeClass("active"), c.addClass("active");
                        else if ("random" != e) return !1;
                        a.find(b.targetSelector).each(function () {
                            b.startOrder.push(d(this))
                        });
                        r(b.filter, e, f, a, b)
                    }
                });
                d(b.filterSelector).bind(b.buttonEvent, function () {
                    if (!b.mixing) {
                        var c = d(this);
                        if (!1 == b.multiFilter) d(b.filterSelector).removeClass("active"), c.addClass("active"), b.filter = c.attr("data-filter"), d(b.filterSelector + '[data-filter="' + b.filter + '"]').addClass("active");
                        else {
                            var e = c.attr("data-filter");
                            c.hasClass("active") ? (c.removeClass("active"), b.filter = b.filter.replace(RegExp("(\\s|^)" + e), "")) : (c.addClass("active"), b.filter = b.filter + " " + e)
                        }
                        r(b.filter, null, null, a, b)
                    }
                })
            })
        },
        toGrid: function () {
            return this.each(function () {
                var e = this.config;
                "grid" != e.layoutMode && (e.layoutMode = "grid", r(e.filter, null, null, d(this), e))
            })
        },
        toList: function () {
            return this.each(function () {
                var e = this.config;
                "list" != e.layoutMode && (e.layoutMode = "list", r(e.filter, null, null, d(this), e))
            })
        },
        filter: function (e) {
            return this.each(function () {
                var c =
                    this.config;
                c.mixing || (d(c.filterSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + e + '"]').addClass("active"), r(e, null, null, d(this), c))
            })
        },
        sort: function (e) {
            return this.each(function () {
                var c = this.config,
                    l = d(this);
                if (!c.mixing) {
                    d(c.sortSelector).removeClass("active");
                    if (d.isArray(e)) {
                        var b = e[0],
                            a = e[1];
                        d(c.sortSelector + '[data-sort="' + e[0] + '"][data-order="' + e[1] + '"]').addClass("active")
                    } else d(c.sortSelector + '[data-sort="' + e + '"]').addClass("active"), b = e, a = "desc";
                    l.find(c.targetSelector).each(function () {
                        c.startOrder.push(d(this))
                    });
                    r(c.filter, b, a, l, c)
                }
            })
        },
        multimix: function (e) {
            return this.each(function () {
                var c = this.config,
                    l = d(this);
                multiOut = {
                    filter: c.filter,
                    sort: null,
                    order: "desc",
                    layoutMode: c.layoutMode
                };
                d.extend(multiOut, e);
                c.mixing || (d(c.filterSelector).add(c.sortSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "undefined" !== typeof multiOut.sort && (d(c.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), l.find(c.targetSelector).each(function () {
                        c.startOrder.push(d(this))
                    })),
                    c.layoutMode = multiOut.layoutMode, r(multiOut.filter, multiOut.sort, multiOut.order, l, c))
            })
        },
        remix: function (e) {
            return this.each(function () {
                var c = this.config,
                    l = d(this);
                c.origOrder = [];
                l.find(c.targetSelector).each(function () {
                    var b = d(this);
                    b.addClass("mix_all");
                    c.origOrder.push(b)
                });
                c.mixing || "undefined" === typeof e || (d(c.filterSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + e + '"]').addClass("active"), r(e, null, null, l, c))
            })
        }
    };
    d.fn.themeWar = function (d, c) {
        if (y[d]) return y[d].apply(this, Array.prototype.slice.call(arguments,
            1));
        if ("object" === typeof d || !d) return y.init.apply(this, arguments)
    };
    d.fn.removeStyle = function (e) {
        return this.each(function () {
            var c = d(this);
            e = e.replace(/\s+/g, "");
            var l = e.split(",");
            d.each(l, function () {
                var b = RegExp(this.toString() + "[^;]+;?", "g");
                c.attr("style", function (a, c) {
                    if (c) return c.replace(b, "")
                })
            })
        })
    }
})(jQuery);