(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('echarts')) :
  typeof define === 'function' && define.amd ? define(['vue', 'echarts'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.thunderDataV = factory(global.Vue, global.Echarts));
}(this, (function (vue, Echarts) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var Echarts__namespace = /*#__PURE__*/_interopNamespace(Echarts);

  var script$b = {
    name: "TestComponent",
    setup(props, context) {
      const message = "hello world";
      const count = vue.ref(1);
      const doubleCount = vue.computed(() => count.value * 2);
      const addCount = () => {
        count.value++;
      };

      return {
        message,
        doubleCount,
        addCount,
      };
    },
  };

  const _withId$a = /*#__PURE__*/vue.withScopeId("data-v-653ba654");

  vue.pushScopeId("data-v-653ba654");
  const _hoisted_1$6 = /*#__PURE__*/vue.createVNode("svg", {
    width: "0",
    height: "0",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/vue.createCommentVNode(" defs:容器 "),
    /*#__PURE__*/vue.createVNode("defs", null, [
      /*#__PURE__*/vue.createCommentVNode(" g:打包成一个固定的组件 "),
      /*#__PURE__*/vue.createVNode("symbol", {
        id: "more",
        viewBox: "0 0 100 100"
      }, [
        /*#__PURE__*/vue.createVNode("circle", {
          r: "5",
          cx: "20",
          cy: "25",
          fill: "currentColor"
        }),
        /*#__PURE__*/vue.createVNode("circle", {
          r: "5",
          cx: "20",
          cy: "50",
          fill: "currentColor"
        }),
        /*#__PURE__*/vue.createVNode("circle", {
          r: "5",
          cx: "20",
          cy: "75",
          fill: "currentColor"
        }),
        /*#__PURE__*/vue.createVNode("line", {
          x1: "40",
          y1: "25",
          x2: "100",
          y2: "25",
          "stroke-width": "8",
          stroke: "currentColor"
        }),
        /*#__PURE__*/vue.createVNode("line", {
          x1: "40",
          y1: "50",
          x2: "100",
          y2: "50",
          "stroke-width": "8",
          stroke: "currentColor"
        }),
        /*#__PURE__*/vue.createVNode("line", {
          x1: "40",
          y1: "75",
          x2: "100",
          y2: "75",
          "stroke-width": "8",
          stroke: "currentColor"
        })
      ]),
      /*#__PURE__*/vue.createVNode("symbol", {
        id: "filledArrowRight",
        viewBox: "0 0 100 100"
      }, [
        /*#__PURE__*/vue.createVNode("polyline", {
          points: "20 10,80 50, 20 90",
          fill: "currentColor"
        })
      ]),
      /*#__PURE__*/vue.createVNode("symbol", {
        id: "arrowRight",
        viewBox: "0 0 100 100"
      }, [
        /*#__PURE__*/vue.createVNode("polyline", {
          points: "30 10,70 50, 30 90",
          fill: "transparent",
          stroke: "currentColor",
          "stroke-width": "5"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  vue.popScopeId();

  const render$b = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", null, [
      _hoisted_1$6
    ]))
  });

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$a = ".test[data-v-653ba654] {\n  color: red;\n}";
  styleInject(css_248z$a);

  script$b.render = render$b;
  script$b.__scopeId = "data-v-653ba654";
  script$b.__file = "src/components/Text/Test.vue";

  function Text (Vue) {
    Vue.component(script$b.name, script$b);
  }

  var script$a = {
    name: "TestComponent2",
    setup() {
      const message = "hello world2";
      return {
        message,
      };
    },
  };

  const _withId$9 = /*#__PURE__*/vue.withScopeId("data-v-2ccf16d6");

  vue.pushScopeId("data-v-2ccf16d6");
  const _hoisted_1$5 = { class: "test" };
  vue.popScopeId();

  const render$a = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$5, vue.toDisplayString($setup.message), 1 /* TEXT */))
  });

  var css_248z$9 = ".test[data-v-2ccf16d6] {\n  color: red;\n}";
  styleInject(css_248z$9);

  script$a.render = render$a;
  script$a.__scopeId = "data-v-2ccf16d6";
  script$a.__file = "src/components/Text2/Test2.vue";

  function Text2 (Vue) {
    Vue.component(script$a.name, script$a);
  }

  var script$9 = {
    name: "TestComponent3",
    setup(props, context) {
      const message = "hello world3";

      return {
        message,

      };
    },
  };

  const _withId$8 = /*#__PURE__*/vue.withScopeId("data-v-7c7c3dd0");

  vue.pushScopeId("data-v-7c7c3dd0");
  const _hoisted_1$4 = { class: "test" };
  vue.popScopeId();

  const render$9 = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$4, vue.toDisplayString($setup.message), 1 /* TEXT */))
  });

  var css_248z$8 = ".test[data-v-7c7c3dd0] {\n  color: red;\n}";
  styleInject(css_248z$8);

  script$9.render = render$9;
  script$9.__scopeId = "data-v-7c7c3dd0";
  script$9.__file = "src/components/Text3/Test3.vue";

  function Text3 (Vue) {
    Vue.component(script$9.name, script$9);
  }

  var script$8 = {
    name: "SvgIcon", 
    porps: {
      name: String,
      style: Object,
    },
    setup(props, ctx) {
      const iconName = `#${ctx.attrs.name}`;
      const style = ctx.attrs.style;
      return {
        iconName,
        style
      };
    },
  };

  const _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-5e4c8412");

  const render$8 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("svg", {
      style: $setup.style,
      class: "svgIcon"
    }, [
      vue.createVNode("use", { href: $setup.iconName }, null, 8 /* PROPS */, ["href"])
    ], 4 /* STYLE */))
  });

  var css_248z$7 = ".svgIcon[data-v-5e4c8412] {\n  width: 100%;\n  height: 100%;\n}";
  styleInject(css_248z$7);

  script$8.render = render$8;
  script$8.__scopeId = "data-v-5e4c8412";
  script$8.__file = "src/components/Icon/SvgIcon.vue";

  function SvgIcon (Vue) {
    Vue.component(script$8.name, script$8);
  }

  var script$7 = {
    name: 'SvgAnimation',
    porps: {},
    setup(props, ctx) {
      vue.onMounted(() => {
        document.getElementsByClassName('logo')[0];
      });
      return {};
    },
  };

  const _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-f7dca322");

  vue.pushScopeId("data-v-f7dca322");
  const _hoisted_1$3 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "500",
      height: "200",
      viewBox: "0 0 500 200"
    }, [
      /*#__PURE__*/vue.createCommentVNode("\r\n             [2,-1,50]  => 2 * _x + (-1) * _y + 50 =x\r\n             [1,2,0] => 1 * _x + 2 * _y + 0 =y\r\n             顶点坐标\r\n             [0,0]  => [50,0]\r\n             [100,0]  => [250,100]\r\n             [100,50]  => [200,200]\r\n             [0,50]  => [0,100]\r\n             最后将四个点重新组合成一个新的矩形\r\n              translate(10,10) \r\n                    rotate(30)\r\n                    skewY(30) \r\n                    scale(1.5)\r\n                    matrix(2 1 -1 2 50 0)\r\n        "),
      /*#__PURE__*/vue.createVNode("rect", {
        class: "rect",
        x: "0",
        y: "0",
        width: "100",
        height: "50",
        fill: "none",
        transform: "",
        stroke: "blue",
        "stroke-width": "5"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_2$2 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "440",
      height: "440",
      viewBox: "0 0 440 440"
    }, [
      /*#__PURE__*/vue.createVNode("circle", {
        cx: "220",
        cy: "220",
        r: "200",
        "stroke-width": "20",
        stroke: "#d1d3d7",
        fill: "transparent"
      }),
      /*#__PURE__*/vue.createVNode("circle", {
        class: "circle",
        cx: "220",
        cy: "220",
        r: "200",
        "stroke-width": "20",
        stroke: "#00a5e0",
        fill: "transparent",
        transform: "matrix(0,-1,1,0,0,440)"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_3$1 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200",
      viewBox: "0 0 200 200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "none",
        stroke: "grey",
        "stroke-width": "8"
      }),
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "none",
        stroke: "blue",
        "stroke-width": "8",
        class: "rect-process"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_4 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("path", {
        class: "logo",
        d: "M630.406488 5.607197a302.779994 302.779994 0 0 1 240.37002 242.364121l2.047996 12.719131a211.266924 211.266924 0 0 1 105.094515 280.252042 212.129238 212.129238 0 0 1-158.07293 120.88564 14.874916 14.874916 0 0 1-0.916209 2.91031l-40.313178 82.404879h120.88564c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940207 10.671135l-60.092505 126.00563a27.108996 27.108996 0 0 1-35.408767 14.066496 27.055101 27.055101 0 0 1-14.066497-35.408767l43.978013-88.171604H738.357418a27.108996 27.108996 0 0 1-27.16289-27.16289c0-3.880413 0.970103-7.275774 1.940206-10.671136l46.241587-98.896633H549.456763l-40.313178 82.404879h120.88564c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940206 10.671135l-81.111409 188.631182a27.108996 27.108996 0 0 1-35.462662 14.066497 27.055101 27.055101 0 0 1-14.012602-35.354873l64.996916-150.904946H468.884301a27.108996 27.108996 0 0 1-27.16289-27.108995c0-3.880413 0.970103-7.275774 1.940207-10.671136l46.241586-98.896633H279.983646l-40.313178 82.404879H360.556108c15.090495 0 27.216785 12.12629 27.216785 27.16289a37.780131 37.780131 0 0 1-1.940206 10.671135l-60.092505 126.00563a27.108996 27.108996 0 0 1-35.408768 14.066496 27.055101 27.055101 0 0 1-14.066497-35.408767l43.978013-88.171604H199.411184a27.108996 27.108996 0 0 1-27.16289-27.16289c0-3.880413 0.970103-7.275774 1.940207-10.671136l46.672744-99.705053A211.80587 211.80587 0 0 1 26.94839 453.255938a211.859765 211.859765 0 0 1 236.05845-210.189031l11.856817 1.616839C306.823169 80.844091 466.027886-26.244526 630.406488 5.607197zM539.378469 62.41213A242.202437 242.202437 0 0 0 334.417216 256.001617l-11.263976 58.044509-58.421772-9.91661A151.497786 151.497786 0 0 0 90.005099 427.97936a151.174419 151.174419 0 0 0 149.018634 176.343208H784.706794a151.336102 151.336102 0 0 0 151.65947-151.06663c0-59.230191-34.654243-113.017025-88.71055-137.592973l-30.342673-13.904813V301.812047l-4.527148-32.875721a242.364121 242.364121 0 0 0-273.35353-206.524196z m33.091298 88.548866a151.389997 151.389997 0 0 1 151.282208 141.904543l0.269473 9.162086a30.288778 30.288778 0 0 1-60.200294 4.958306l-0.377262-4.904411c0-47.427269-36.540555-86.393081-83.10551-90.327389l-7.868615-0.323368a30.288778 30.288778 0 0 1-4.850516-60.092505l4.850516-0.377262z",
        fill: "#959BA6",
        "p-id": "2524"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_5 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      class: "line-container",
      viewBox: "0 0 400 400",
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("line", {
        class: "line",
        x1: "0",
        y1: "50",
        x2: "400",
        y2: "50",
        fill: "none",
        "stroke-width": "20",
        stroke: "red"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_6 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "100",
        height: "50"
      }, [
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "x",
          attributeType: "XML",
          to: "10",
          begin: "1s"
        }),
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "x",
          attributeType: "XML",
          to: "20",
          begin: "2s"
        }),
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "fill",
          attributeType: "XML",
          to: "blue",
          begin: "3s"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_7 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("circle", {
        cx: "0",
        cy: "0",
        r: "30",
        stroke: "black",
        "stroke-width": "1"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "cx",
          attributeType: "XML",
          from: "0",
          to: "100",
          begin: "0s",
          dur: "1s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "cy",
          attributeType: "XML",
          from: "0",
          to: "100",
          begin: "0s",
          dur: "1s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "fill",
          attributeType: "XML",
          from: "blue",
          to: "red",
          begin: "0s",
          dur: "1s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "scale",
          from: "1",
          to: "2",
          begin: "0s",
          dur: "3s",
          repeatCount: "2",
          fill: "freeze"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_8 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("polygon", {
        points: "30 30 70 30 90 70 10 70",
        fill: "#fcc",
        stroke: "black"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "points",
          attributeType: "XML",
          to: "50 30 70 50 50 90 30 50",
          dur: "5s",
          fill: "freeze",
          repeatCount: "1"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_9 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "10",
        height: "10"
      }, [
        /*#__PURE__*/vue.createVNode("animateMotion", {
          path: "M 10 10 L 110 10 L 110 110 L 10 110 Z",
          dur: "5s",
          rotate: "0",
          fill: "freeze",
          repeatCount: "indefinite"
        })
      ]),
      /*#__PURE__*/vue.createVNode("path", {
        id: "motion-path",
        d: "M 10 10 L 110 10 L 110 110 L 10 110 Z",
        fill: "none",
        stroke: "green"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_10 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "10",
        height: "10"
      }, [
        /*#__PURE__*/vue.createVNode("animateMotion", {
          id: "forward-rect",
          path: "M 10 10 L 110 10 L 110 110 L 10 110",
          dur: "5s",
          rotate: "0",
          fill: "freeze",
          begin: "0; backward-rect.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animateMotion", {
          id: "backward-rect",
          path: "M 10 110 L 110 110 L 110 10 L 10 10",
          dur: "5s",
          rotate: "0",
          fill: "freeze",
          begin: "forward-rect.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          id: "red-to-blue",
          attributeName: "fill",
          attributeType: "XML",
          from: "red",
          to: "blue",
          dur: "2s",
          fill: "freeze",
          begin: "0; blue-to-red.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          id: "blue-to-red",
          attributeName: "fill",
          attributeType: "XML",
          from: "blue",
          to: "red",
          dur: "2s",
          fill: "freeze",
          begin: "red-to-blue.end + 0.5s"
        })
      ]),
      /*#__PURE__*/vue.createVNode("path", {
        id: "motion-path",
        d: "M 10 10 L 110 10 L 110 110 L 10 110 ",
        fill: "none",
        stroke: "green"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_11 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      viewBox: "0 0 200 200",
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("g", { id: "rect1" }, [
        /*#__PURE__*/vue.createVNode("rect", {
          x: "0",
          y: "0",
          rx: "0",
          ry: "0",
          width: "100",
          height: "100",
          fill: "red"
        }, [
          /*#__PURE__*/vue.createVNode("animate", {
            attributeType: "XML",
            attributeName: "fill",
            from: "red",
            to: "green",
            begin: "rect1.click",
            dur: "2s",
            fill: "freeze"
          })
        ])
      ]),
      /*#__PURE__*/vue.createVNode("animateTransform", {
        attributeType: "XML",
        attributeName: "transform",
        type: "translate",
        from: "0, 0",
        to: "50, 50",
        begin: "rect1.click",
        dur: "2s",
        fill: "freeze"
      }),
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "100",
        width: "100",
        height: "100",
        fill: "blue"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeType: "XML",
          attributeName: "fill",
          from: "blue",
          to: "green",
          begin: "rect1.click",
          dur: "2s",
          fill: "freeze"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_12 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createCommentVNode(" mask 蒙版 "),
    /*#__PURE__*/vue.createVNode("svg", {
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("defs", null, [
        /*#__PURE__*/vue.createVNode("mask", { id: "test-mask" }, [
          /*#__PURE__*/vue.createVNode("rect", {
            x: "5",
            y: "5",
            width: "390",
            height: "390",
            fill: "purple"
          }),
          /*#__PURE__*/vue.createCommentVNode(" 此时cirlcle 没有填充色,所以是透明的 "),
          /*#__PURE__*/vue.createVNode("circle", {
            r: "50",
            cx: "50",
            cy: "50"
          })
        ]),
        /*#__PURE__*/vue.createCommentVNode(" 渐变颜色 "),
        /*#__PURE__*/vue.createVNode("linearGradient", { id: "test-linear-gradient" }, [
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "0%",
            "stop-color": "red",
            "stop-opacity": "1"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "100%",
            "stop-color": "blue",
            "stop-opacity": "0"
          })
        ]),
        /*#__PURE__*/vue.createCommentVNode(" 径向渐变 "),
        /*#__PURE__*/vue.createVNode("radialGradient", {
          id: "test-rafial-gradient",
          r: "50%",
          cx: "",
          cy: "",
          fx: "25%",
          fy: "75%"
        }, [
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "0%",
            "stop-color": "white"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "10%",
            "stop-color": "yellow"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "95%",
            "stop-color": "red",
            "stop-opacity": "1"
          })
        ])
      ]),
      /*#__PURE__*/vue.createVNode("rect", {
        x: "5",
        y: "5",
        width: "390",
        height: "390",
        fill: "url(#test-rafial-gradient)"
      }),
      /*#__PURE__*/vue.createCommentVNode(" <rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"blue\" mask=\"url(#test-mask)\"></rect> ")
    ])
  ], -1 /* HOISTED */);
  vue.popScopeId();

  const render$7 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", null, [
      _hoisted_1$3,
      _hoisted_2$2,
      _hoisted_3$1,
      _hoisted_4,
      _hoisted_5,
      _hoisted_6,
      _hoisted_7,
      _hoisted_8,
      vue.createCommentVNode(" M Z:分别表示的是path的开始和结尾 \r\n        Z:写上Z可以变为闭合状态"),
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      _hoisted_12
    ]))
  });

  var css_248z$6 = ".container[data-v-f7dca322] svg[data-v-f7dca322] {\n  border: 1px solid #000;\n}\n\n.rect[data-v-f7dca322] {\n  stroke-dasharray: 10 20;\n}\n\n.circle[data-v-f7dca322] {\n  animation: circle-f7dca322 5s linear infinite;\n}\n\n@keyframes circle-f7dca322 {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n@keyframes rect-process-f7dca322 {\n  from {\n    stroke-dasharray: 0 800;\n  }\n  to {\n    stroke-dasharray: 800 0;\n  }\n}\n.rect-process[data-v-f7dca322] {\n  animation: rect-process-f7dca322 5s linear infinite;\n}\n\n.logo[data-v-f7dca322] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo-f7dca322 5s linear infinite;\n}\n\n@keyframes logo-f7dca322 {\n  0% {\n    fill: white;\n    stroke-dasharray: 8140;\n    stroke-dashoffset: 8140;\n  }\n  50% {\n    fill: white;\n    stroke-dasharray: 8140;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: red;\n    stroke: white;\n  }\n  100% {\n    fill: blue;\n    stroke: white;\n  }\n}\n.line[data-v-f7dca322] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container[data-v-f7dca322][data-v-f7dca322]:hover .line[data-v-f7dca322] {\n  stroke-dashoffset: 0;\n}";
  styleInject(css_248z$6);

  script$7.render = render$7;
  script$7.__scopeId = "data-v-f7dca322";
  script$7.__file = "src/components/svgAnimation/SvgAnimation.vue";

  function SvgAnimation (Vue) {
    Vue.component(script$7.name, script$7);
  }

  var script$6 = {
    name: 'ThunderLoading',
    props: {
      width: {
        type: [Number, String],
        default: 50,
      },
      height: {
        type: [Number, String],
        default: 50,
      },
      outsideColor: {
        type: String,
        default: '#3be6cb',
      },
      insideColor: {
        type: String,
        default: '#02bcfe',
      },
      duration: {
        type: [Number, String],
        default: 2,
      },
    },
    setup(props, ctx) {
      const outsideColorAnimation = vue.computed(() => `${props.outsideColor};${props.insideColor};${props.outsideColor}`);
      const insideColorAnimation = vue.computed(() => `${props.insideColor};${props.outsideColor};${props.insideColor}`);

      return {
        outsideColorAnimation,
        insideColorAnimation,
      };
    },
  };

  const _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-46ff08e2");

  vue.pushScopeId("data-v-46ff08e2");
  const _hoisted_1$2 = { class: "thunder-loading" };
  const _hoisted_2$1 = { class: "thunder-loading-content" };
  vue.popScopeId();

  const render$6 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [
      vue.createCommentVNode(" stroke-dasharray : 2 π r / 需要展示的部分(4) "),
      (vue.openBlock(), vue.createBlock("svg", {
        width: $props.width,
        height: $props.height,
        viewBox: "0 0 50 50",
        preserveAspectRatio: "xMidYMid meet"
      }, [
        vue.createVNode("circle", {
          cx: "25",
          cy: "25",
          r: "22 ",
          fill: "none",
          "stroke-width": "3",
          stroke: $props.outsideColor,
          "stroke-dasharray": "34",
          "stroke-linecap": "round"
        }, [
          vue.createVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 25 25;360 25 25",
            dur: `${$props.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["dur"]),
          vue.createVNode("animate", {
            attributeName: "stroke",
            values: $setup.outsideColorAnimation,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["values"])
        ], 8 /* PROPS */, ["stroke"]),
        vue.createVNode("circle", {
          cx: "25",
          cy: "25",
          r: "12 ",
          fill: "none",
          "stroke-width": "3",
          stroke: $props.insideColor,
          "stroke-dasharray": "19",
          "stroke-linecap": "round"
        }, [
          vue.createVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "360 25 25;0 25 25",
            dur: `${$props.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["dur"]),
          vue.createVNode("animate", {
            attributeName: "stroke",
            values: $setup.insideColorAnimation,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["values"])
        ], 8 /* PROPS */, ["stroke"])
      ], 8 /* PROPS */, ["width", "height"])),
      vue.createVNode("div", _hoisted_2$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]))
  });

  var css_248z$5 = ".thunder-loading[data-v-46ff08e2] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}";
  styleInject(css_248z$5);

  script$6.render = render$6;
  script$6.__scopeId = "data-v-46ff08e2";
  script$6.__file = "src/components/ThunderLoading/ThunderLoading.vue";

  function ThunderLoading (Vue) {
    Vue.component(script$6.name, script$6);
  }

  // Unique ID creation requires a high quality random # generator. In the browser we therefore
  // require the crypto API and do not support built-in fallback to lower quality random number
  // generators (like Math.random()).
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
      // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
      // find the complete implementation of crypto (msCrypto) on IE11.
      getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }
    }

    return getRandomValues(rnds8);
  }

  var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */

  var byteToHex = [];

  for (var i$1 = 0; i$1 < 256; ++i$1) {
    byteToHex.push((i$1 + 0x100).toString(16).substr(1));
  }

  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields

    if (!validate(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }

    return uuid;
  }

  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return stringify(rnds);
  }

  var script$5 = {
    name: 'ThunderFlyBox',
    props: {
      lineColor: {
        type: String,
        default: '#235fa7',
      },
      startColor: {
        type: String,
        default: '#4fd2dd',
      },
      startLength: {
        type: [Number, String],
        default: 50,
      },
      duration: {
        type: [Number, String],
        default: 5,
      },
    },
    setup(props, ctx) {
      const uuid = v4();
      const width = vue.ref(0);
      const height = vue.ref(0);
      const refName = 'thunderFlyBox';
      const pathId = `${refName}-path-${uuid}`;
      const radialGradientId = `${refName}-radient-${uuid}`;
      const maskId = `${refName}-maslId-${uuid}`;

      const path = vue.computed(
        () => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
      );
      const init = () => {
        const instance = vue.getCurrentInstance();
        const dom = instance.ctx.$refs[refName];
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      };
      vue.onMounted(() => {
        init();
      });
      return {
        width,
        height,
        refName,
        path,
        pathId,
        radialGradientId,
        maskId,
      };
    },
  };

  const _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-11d53d6e");

  vue.pushScopeId("data-v-11d53d6e");
  const _hoisted_1$1 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }, null, -1 /* HOISTED */);
  const _hoisted_2 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  }, null, -1 /* HOISTED */);
  const _hoisted_3 = { class: "thunder-fly-box-content" };
  vue.popScopeId();

  const render$5 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", {
      class: "thunder-flybox",
      ref: $setup.refName
    }, [
      (vue.openBlock(), vue.createBlock("svg", {
        width: $setup.width,
        height: $setup.height,
        viewBox: `0 0 ${$setup.width} ${$setup.height}`
      }, [
        vue.createVNode("defs", null, [
          vue.createCommentVNode(" path：元素是用来定义形状的通用元素。所有的基本形状都可以用path元素来创建。"),
          vue.createVNode("path", {
            id: $setup.pathId,
            d: $setup.path,
            fill: "none"
          }, null, 8 /* PROPS */, ["id", "d"]),
          vue.createCommentVNode("radialGradient: 用来定义径向渐变，以对图形元素进行填充或描边。 "),
          vue.createVNode("radialGradient", {
            id: $setup.radialGradientId,
            cx: "50%",
            cy: "50%",
            fx: "100%",
            fy: "50%",
            r: "50%"
          }, [
            _hoisted_1$1,
            _hoisted_2
          ], 8 /* PROPS */, ["id"]),
          vue.createCommentVNode(" mask:蒙版 "),
          vue.createVNode("mask", { id: $setup.maskId }, [
            vue.createVNode("circle", {
              r: $props.startLength,
              cx: "0",
              cy: "0",
              fill: `url(#${$setup.radialGradientId})`
            }, [
              vue.createVNode("animateMotion", {
                dur: `${$props.duration}s`,
                path: $setup.path,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8 /* PROPS */, ["dur", "path"])
            ], 8 /* PROPS */, ["r", "fill"])
          ], 8 /* PROPS */, ["id"])
        ]),
        vue.createVNode("use", {
          href: `#${$setup.pathId}`,
          "stroke-width": "1",
          stroke: $props.lineColor
        }, null, 8 /* PROPS */, ["href", "stroke"]),
        vue.createVNode("use", {
          href: `#${$setup.pathId}`,
          "stroke-width": "3",
          stroke: $props.startColor,
          mask: `url(#${$setup.maskId})`
        }, null, 8 /* PROPS */, ["href", "stroke", "mask"])
      ], 8 /* PROPS */, ["width", "height", "viewBox"])),
      vue.createVNode("div", _hoisted_3, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 512 /* NEED_PATCH */))
  });

  var css_248z$4 = ".thunder-flybox[data-v-11d53d6e] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.thunder-flybox[data-v-11d53d6e] svg[data-v-11d53d6e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.thunder-flybox[data-v-11d53d6e] .thunder-fly-box-content[data-v-11d53d6e] {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
  styleInject(css_248z$4);

  script$5.render = render$5;
  script$5.__scopeId = "data-v-11d53d6e";
  script$5.__file = "src/components/ThunderFlyBox/ThunderFlyBox.vue";

  function ThunderFlyBox (Vue) {
    Vue.component(script$5.name, script$5);
  }

  function debounce(delay, callback) {
    var timer = null;
    return function () {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(_this, args);
      }, delay);
    };
  }

  var script$4 = {
    name: 'Container',
    props: {
      options: Object,
    },
    setup(props, ctx) {
      const refName = 'thunderContainer';
      const width = vue.ref(0);
      const height = vue.ref(0);
      const originalWidth = vue.ref(0);
      const originalHeight = vue.ref(0);
      const ready = vue.ref(false);
      let context, dom, observerObj;
      const initSize = () => {
        return new Promise((resolve) => {
          vue.nextTick(() => {
            dom = context.$refs[refName];
            //获取大屏的真是尺寸
            if (props.options && props.options.width && props.options.height) {
              width.value = props.options.width;
              height.value = props.options.height;
            } else {
              width.value = dom.clientWidth;
              height.vlaue = dom.clientHeight;
            }
            //获取画布的尺寸
            if (!originalWidth.value || !originalHeight.value) {
              //在没有复制的情况下调用次函数
              originalWidth.value = window.screen.width;
              originalHeight.value = window.screen.height;
            }
            resolve();
          });
        });
      };

      const updateSize = () => {
        if (width.value && height.value) {
          dom.style.width = `${width.value}px`;
          dom.style.height = `${height.value}px`;
        } else {
          dom.style.width = `${originalWidth.value}px`;
          dom.style.height = `${originalHeight.value}px`;
        }
      };

      const updateScale = () => {
        //获取真实的视口尺寸
        const currentWidth = document.body.clientWidth;
        const currentHeight = document.body.clientHeight;
        //获取大屏的最终宽高 当 width没有值的情况下
        const realWidth = width.value || originalWidth.value;
        const realHeight = height.value || originalHeight.value;
        const widthScale = currentWidth / realWidth;
        const heightScale = currentHeight / realHeight;
        dom && (dom.style.transform = `scale(${widthScale},${heightScale})`);
      };
      const onResize = async (e) => {
        await initSize();
        updateScale();
      };

      // 新的需求, 页面更新样式
      const initMutationObserver = () => {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        observerObj = new MutationObserver(onResize);
        observerObj.observe(dom, { attributes: true, attributeFilter: ['style'], attributesOldValue: true });
      };

      const removeMutationObserver = () => {
        if (observerObj) {
          observerObj.disconnect();
          observerObj.takeRecords();
          observerObj = null;
        }
      };
      vue.onMounted(async () => {
        ready.value = false;
        context = vue.getCurrentInstance().ctx;
        await initSize();
        updateSize();
        updateScale();
        window.addEventListener('resize', debounce(150, onResize));
        initMutationObserver();
        ready.value = true;
      });

      vue.onUnmounted(() => {
        window.removeEventListener('resize', onResize);
        removeMutationObserver();
      });
      return {
        refName,
        ready,
      };
    },
  };

  const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-807af65a");

  const render$4 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", {
      id: "thunder-container",
      ref: $setup.refName
    }, [
      ($setup.ready)
        ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
        : vue.createCommentVNode("v-if", true)
    ], 512 /* NEED_PATCH */))
  });

  var css_248z$3 = "#thunder-container[data-v-807af65a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}";
  styleInject(css_248z$3);

  script$4.render = render$4;
  script$4.__scopeId = "data-v-807af65a";
  script$4.__file = "src/components/Container/Container.vue";

  function Container (Vue) {
    Vue.component(script$4.name, script$4);
  }

  var script$3 = {
    name: 'ThunderLogo',
    props: {
      strokeWidth: {
        type: [String, Number],
        default: 1,
      },
      stroke: {
        type: String,
        default: '#000',
      },
    },
    setup(props, ctx) {
      vue.onMounted(() => {
        document.getElementsByClassName('thunder-logo1')[0];
      });
      return {};
    },
  };

  const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-20df31af");

  vue.pushScopeId("data-v-20df31af");
  const _hoisted_1 = {
    class: "thunder-logo",
    viewBox: "0 0 1061 1024"
  };
  vue.popScopeId();

  const render$3 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
      vue.createVNode("path", {
        class: "thunder-logo1",
        stroke: $props.stroke,
        "stroke-width": $props.strokeWidth,
        d: "M817.7830496 295.9533408C808.73239893 108.88666773 629.93534293 76.20390613 599.03650453 72.6801728 419.51290453 52.2033344 362.18606293 222.03147627 357.65944 222.03147627 200.53023253 136.9545824 193.22198827 306.5141632 187.1877888 311.039488c-55.81666987 13.5772736-123.869104 58.91096533-120.68788373 126.72338027 5.98749333 127.63545173 101.91063787 157.72730773 162.87797973 163.8951392l477.53080213-419.4151424-72.53494506 300.05709226 212.57741653 2.21206507-133.98102613 124.032576c188.63393067 27.9952608 234.9886752-83.18009813 238.5578176-98.37003733 39.51096853-168.17266133-126.20182613-221.76429333-133.74490027-214.22122027z"
      }, null, 8 /* PROPS */, ["stroke", "stroke-width"]),
      vue.createVNode("path", {
        stroke: $props.stroke,
        "stroke-width": $props.strokeWidth,
        d: "M741.9708768 529.64980693l-164.1649984-1.71126826 69.12927467-250.59897174L287.09913493 604.71857067h158.0633344L310.2551008 929.31205973z",
        class: "thunder-logo1"
      }, null, 8 /* PROPS */, ["stroke", "stroke-width"])
    ]))
  });

  var css_248z$2 = ".thunder-logo[data-v-20df31af] {\n  width: 100%;\n  height: 100%;\n}\n\n.thunder-logo1[data-v-20df31af] {\n  fill: none;\n  animation: thunder-logo-animation-20df31af 5s linear infinite forwards;\n}\n\n@keyframes thunder-logo-animation-20df31af {\n  0% {\n    stroke-dasharray: 3239;\n    stroke-dashoffset: 2202;\n  }\n  50% {\n    stroke-dasharray: 3239;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 3239;\n    stroke-dashoffset: 0;\n  }\n}";
  styleInject(css_248z$2);

  script$3.render = render$3;
  script$3.__scopeId = "data-v-20df31af";
  script$3.__file = "src/components/ThunderLogo/ThunderLogo.vue";

  function ThunderLogo (Vue) {
    Vue.component(script$3.name, script$3);
  }

  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

  var requestAnimationFrame;
  var cancelAnimationFrame;
  var isServer = typeof window === 'undefined';

  if (isServer) {
    requestAnimationFrame = function requestAnimationFrame() {
      return;
    };

    cancelAnimationFrame = function cancelAnimationFrame() {
      return;
    };
  } else {
    requestAnimationFrame = window.requestAnimationFrame;
    cancelAnimationFrame = window.cancelAnimationFrame;
    var prefix; // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式

    for (var i = 0; i < prefixes.length; i++) {
      if (requestAnimationFrame && cancelAnimationFrame) {
        break;
      }

      prefix = prefixes[i];
      requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
      cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
    } // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout


    if (!requestAnimationFrame || !cancelAnimationFrame) {
      requestAnimationFrame = function requestAnimationFrame(callback) {
        var currTime = new Date().getTime(); // 为了使setTimteout的尽可能的接近每秒60帧的效果

        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

      cancelAnimationFrame = function cancelAnimationFrame(id) {
        window.clearTimeout(id);
      };
    }
  }

  var script$2 = {
    name:'VueCountTo',
    props: {
      startVal: {
        type: Number,
        required: false,
        default: 0
      },
      endVal: {
        type: Number,
        required: false,
        default: 2017
      },
      duration: {
        type: Number,
        required: false,
        default: 3000
      },
      autoplay: {
        type: Boolean,
        required: false,
        default: true
      },
      decimals: {
        type: Number,
        required: false,
        default: 0,
        validator(value) {
          return value >= 0
        }
      },
      decimal: {
        type: String,
        required: false,
        default: '.'
      },
      separator: {
        type: String,
        required: false,
        default: ','
      },
      prefix: {
        type: String,
        required: false,
        default: ''
      },
      suffix: {
        type: String,
        required: false,
        default: ''
      },
      useEasing: {
        type: Boolean,
        required: false,
        default: true
      },
      easingFn: {
        type: Function,
        default(t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        }
      }
    },
    data() {
      return {
        localStartVal: this.startVal,
        displayValue: this.formatNumber(this.startVal),
        printVal: null,
        paused: false,
        localDuration: this.duration,
        startTime: null,
        timestamp: null,
        remaining: null,
        rAF: null
      };
    },
    computed: {
      countDown() {
        return this.startVal > this.endVal
      }
    },
    watch: {
      startVal() {
        if (this.autoplay) {
          this.start();
        }
      },
      endVal() {
        if (this.autoplay) {
          this.start();
        }
      }
    },
    mounted() {
      if (this.autoplay) {
        this.start();
      }
      this.$emit('mountedCallback');
    },
    methods: {
      start() {
        this.localStartVal = this.startVal;
        this.startTime = null;
        this.localDuration = this.duration;
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      },
      pauseResume() {
        if (this.paused) {
          this.resume();
          this.paused = false;
        } else {
          this.pause();
          this.paused = true;
        }
      },
      pause() {
        cancelAnimationFrame(this.rAF);
      },
      resume() {
        this.startTime = null;
        this.localDuration = +this.remaining;
        this.localStartVal = +this.printVal;
        requestAnimationFrame(this.count);
      },
      reset() {
        this.startTime = null;
        cancelAnimationFrame(this.rAF);
        this.displayValue = this.formatNumber(this.startVal);
      },
      count(timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        this.timestamp = timestamp;
        const progress = timestamp - this.startTime;
        this.remaining = this.localDuration - progress;

        if (this.useEasing) {
          if (this.countDown) {
            this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endVal, this.localDuration);
          } else {
            this.printVal = this.easingFn(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration);
          }
        } else {
          if (this.countDown) {
            this.printVal = this.localStartVal - ((this.localStartVal - this.endVal) * (progress / this.localDuration));
          } else {
            this.printVal = this.localStartVal + (this.endVal - this.localStartVal) * (progress / this.localDuration);
          }
        }
        if (this.countDown) {
          this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal;
        } else {
          this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal;
        }

        this.displayValue = this.formatNumber(this.printVal);
        if (progress < this.localDuration) {
          this.rAF = requestAnimationFrame(this.count);
        } else {
          this.$emit('callback');
        }
      },
      isNumber(val) {
        return !isNaN(parseFloat(val))
      },
      formatNumber(num) {
        num = num.toFixed(this.decimals);
        num += '';
        const x = num.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? this.decimal + x[1] : '';
        const rgx = /(\d+)(\d{3})/;
        if (this.separator && !this.isNumber(this.separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + this.separator + '$2');
          }
        }
        return this.prefix + x1 + x2 + this.suffix;
      }
    },
    unmounted() {
      cancelAnimationFrame(this.rAF);
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("span", null, vue.toDisplayString($data.displayValue), 1 /* TEXT */))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/VueCountTo/vue-countTo.vue";

  function VueCountTo (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$1 = {
    name: 'VueEcharts',
    props: {
      option: Object,
      theme: [String, Object],
    },
    setup(props) {
      let dom, chart;
       let className = `echarts${v4()}`;
        const initChart = () => {
          if (!chart) {
            dom = document.getElementsByClassName(className)[0];
            chart = Echarts__namespace.init(dom, props.theme);
          }
          if (props.option) {
            chart.setOption(props.option);
          }
        };
        vue.onMounted(() => {
          initChart();
        });
        vue.watch(() => props.option, () => {
          initChart();
        });

     return {
          className
        }
    },
  };

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-38cd74e2");

  const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", {
      class: [$setup.className, 'echarts']
    }, null, 2 /* CLASS */))
  });

  var css_248z$1 = ".echarts[data-v-38cd74e2] {\n  width: 100%;\n  height: 100%;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-38cd74e2";
  script$1.__file = "src/components/VueEcharts/VueEcharts.vue";

  function VueEcharts (Vue) {
    Vue.component(script$1.name, script$1);
  }

  /**
   * @description: 获取当前选中元素的宽高
   * @param {*} id:元素的id
   * @return {*}
   */

  function useScreen(id) {
    var width = vue.ref(0);
    var height = vue.ref(0);
    var dom;
    vue.onMounted(function () {
      dom = document.getElementById(id);
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    });
    return {
      width: width,
      height: height
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear$1;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$3(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq$3;

  var eq$2 = eq_1;
  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function assocIndexOf$4(array, key) {
    var length = array.length;

    while (length--) {
      if (eq$2(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  var _assocIndexOf = assocIndexOf$4;

  var assocIndexOf$3 = _assocIndexOf;
  /** Used for built-in method references. */

  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function listCacheDelete$1(key) {
    var data = this.__data__,
        index = assocIndexOf$3(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete$1;

  var assocIndexOf$2 = _assocIndexOf;
  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function listCacheGet$1(key) {
    var data = this.__data__,
        index = assocIndexOf$2(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet$1;

  var assocIndexOf$1 = _assocIndexOf;
  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas$1;

  var assocIndexOf = _assocIndexOf;
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */

  function listCacheSet$1(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  var _listCacheSet = listCacheSet$1;

  var listCacheClear = _listCacheClear,
      listCacheDelete = _listCacheDelete,
      listCacheGet = _listCacheGet,
      listCacheHas = _listCacheHas,
      listCacheSet = _listCacheSet;
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache$4(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.


  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;

  var ListCache$3 = _ListCache;
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */

  function stackClear$1() {
    this.__data__ = new ListCache$3();
    this.size = 0;
  }

  var _stackClear = stackClear$1;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete$1;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet$1;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas$1;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root$8 = freeGlobal || freeSelf || Function('return this')();
  var _root = root$8;

  var root$7 = _root;
  /** Built-in value references. */

  var Symbol$3 = root$7.Symbol;
  var _Symbol = Symbol$3;

  var Symbol$2 = _Symbol;
  /** Used for built-in method references. */

  var objectProto$d = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$a = objectProto$d.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$d.toString;
  /** Built-in value references. */

  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto$c.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$1 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;
  /** `Object#toString` result references. */

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag$4(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  var _baseGetTag = baseGetTag$4;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$6(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$6;

  var baseGetTag$3 = _baseGetTag,
      isObject$5 = isObject_1;
  /** `Object#toString` result references. */

  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction$2(value) {
    if (!isObject$5(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = baseGetTag$3(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$2;

  var root$6 = _root;
  /** Used to detect overreaching core-js shims. */

  var coreJsData$1 = root$6['__core-js_shared__'];
  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;
  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource$2;

  var isFunction$1 = isFunction_1,
      isMasked = _isMasked,
      isObject$4 = isObject_1,
      toSource$1 = _toSource;
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto = Function.prototype,
      objectProto$b = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$9).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative$1(value) {
    if (!isObject$4(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */

  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$7;

  var getNative$6 = _getNative,
      root$5 = _root;
  /* Built-in method references that are verified to be native. */

  var Map$3 = getNative$6(root$5, 'Map');
  var _Map = Map$3;

  var getNative$5 = _getNative;
  /* Built-in method references that are verified to be native. */

  var nativeCreate$4 = getNative$5(Object, 'create');
  var _nativeCreate = nativeCreate$4;

  var nativeCreate$3 = _nativeCreate;
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */

  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear$1;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete$1;

  var nativeCreate$2 = _nativeCreate;
  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
  /** Used for built-in method references. */

  var objectProto$a = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function hashGet$1(key) {
    var data = this.__data__;

    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }

    return hasOwnProperty$8.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet$1;

  var nativeCreate$1 = _nativeCreate;
  /** Used for built-in method references. */

  var objectProto$9 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$7.call(data, key);
  }

  var _hashHas = hashHas$1;

  var nativeCreate = _nativeCreate;
  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */

  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  var _hashSet = hashSet$1;

  var hashClear = _hashClear,
      hashDelete = _hashDelete,
      hashGet = _hashGet,
      hashHas = _hashHas,
      hashSet = _hashSet;
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash$1(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.


  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;

  var Hash = _Hash,
      ListCache$2 = _ListCache,
      Map$2 = _Map;
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */

  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$2 || ListCache$2)(),
      'string': new Hash()
    };
  }

  var _mapCacheClear = mapCacheClear$1;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  var _isKeyable = isKeyable$1;

  var isKeyable = _isKeyable;
  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */

  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  var _getMapData = getMapData$4;

  var getMapData$3 = _getMapData;
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete$1;

  var getMapData$2 = _getMapData;
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet$1;

  var getMapData$1 = _getMapData;
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas$1;

  var getMapData = _getMapData;
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */

  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
        size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet$1;

  var mapCacheClear = _mapCacheClear,
      mapCacheDelete = _mapCacheDelete,
      mapCacheGet = _mapCacheGet,
      mapCacheHas = _mapCacheHas,
      mapCacheSet = _mapCacheSet;
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache$1(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.


  MapCache$1.prototype.clear = mapCacheClear;
  MapCache$1.prototype['delete'] = mapCacheDelete;
  MapCache$1.prototype.get = mapCacheGet;
  MapCache$1.prototype.has = mapCacheHas;
  MapCache$1.prototype.set = mapCacheSet;
  var _MapCache = MapCache$1;

  var ListCache$1 = _ListCache,
      Map$1 = _Map,
      MapCache = _MapCache;
  /** Used as the size to enable large array optimizations. */

  var LARGE_ARRAY_SIZE = 200;
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */

  function stackSet$1(key, value) {
    var data = this.__data__;

    if (data instanceof ListCache$1) {
      var pairs = data.__data__;

      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet$1;

  var ListCache = _ListCache,
      stackClear = _stackClear,
      stackDelete = _stackDelete,
      stackGet = _stackGet,
      stackHas = _stackHas,
      stackSet = _stackSet;
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Stack$1(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  } // Add methods to `Stack`.


  Stack$1.prototype.clear = stackClear;
  Stack$1.prototype['delete'] = stackDelete;
  Stack$1.prototype.get = stackGet;
  Stack$1.prototype.has = stackHas;
  Stack$1.prototype.set = stackSet;
  var _Stack = Stack$1;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$1(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }

  var _arrayEach = arrayEach$1;

  var getNative$4 = _getNative;

  var defineProperty$2 = function () {
    try {
      var func = getNative$4(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  var _defineProperty = defineProperty$2;

  var defineProperty$1 = _defineProperty;
  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue$2;

  var baseAssignValue$1 = _baseAssignValue,
      eq$1 = eq_1;
  /** Used for built-in method references. */

  var objectProto$8 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function assignValue$3(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty$6.call(object, key) && eq$1(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue$1(object, key, value);
    }
  }

  var _assignValue = assignValue$3;

  var assignValue$2 = _assignValue,
      baseAssignValue = _baseAssignValue;
  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */

  function copyObject$5(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }

      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$2(object, key, newValue);
      }
    }

    return object;
  }

  var _copyObject = copyObject$5;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  var _baseTimes = baseTimes$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$5(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$5;

  var baseGetTag$2 = _baseGetTag,
      isObjectLike$4 = isObjectLike_1;
  /** `Object#toString` result references. */

  var argsTag$2 = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments$1(value) {
    return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$2;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$3 = isObjectLike_1;
  /** Used for built-in method references. */

  var objectProto$7 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments$1 = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike$3(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable$1.call(value, 'callee');
  };
  var isArguments_1 = isArguments$1;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray$3 = Array.isArray;
  var isArray_1 = isArray$3;

  var isBuffer$2 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
    var root = _root,
        stubFalse = stubFalse_1;
    /** Detect free variable `exports`. */

    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */

    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  })(isBuffer$2, isBuffer$2.exports);

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex$2(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var _isIndex = isIndex$2;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength$2(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength$2;

  var baseGetTag$1 = _baseGetTag,
      isLength$1 = isLength_1,
      isObjectLike$2 = isObjectLike_1;
  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$2 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$2 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray$1(value) {
    return isObjectLike$2(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$3(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$3;

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
    var freeGlobal = _freeGlobal;
    /** Detect free variable `exports`. */

    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */

    var freeProcess = moduleExports && freeGlobal.process;
    /** Used to access faster Node.js helpers. */

    var nodeUtil = function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        } // Legacy `process.binding('util')` for Node.js < 10.


        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }();

    module.exports = nodeUtil;
  })(_nodeUtil, _nodeUtil.exports);

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary$2 = _baseUnary,
      nodeUtil$2 = _nodeUtil.exports;
  /* Node.js helper references. */

  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray$1 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$1;

  var baseTimes = _baseTimes,
      isArguments = isArguments_1,
      isArray$2 = isArray_1,
      isBuffer$1 = isBuffer$2.exports,
      isIndex$1 = _isIndex,
      isTypedArray = isTypedArray_1;
  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$2(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer$1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex$1(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$2;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype$4(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
    return value === proto;
  }

  var _isPrototype = isPrototype$4;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys$1 = overArg$1(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;

  var isPrototype$3 = _isPrototype,
      nativeKeys = _nativeKeys;
  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys$1(object) {
    if (!isPrototype$3(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys$1;

  var isFunction = isFunction_1,
      isLength = isLength_1;
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike$4(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  var isArrayLike_1 = isArrayLike$4;

  var arrayLikeKeys$1 = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$3 = isArrayLike_1;
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */

  function keys$4(object) {
    return isArrayLike$3(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }

  var keys_1 = keys$4;

  var copyObject$4 = _copyObject,
      keys$3 = keys_1;
  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */

  function baseAssign$1(object, source) {
    return object && copyObject$4(source, keys$3(source), object);
  }

  var _baseAssign = baseAssign$1;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];

    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }

    return result;
  }

  var _nativeKeysIn = nativeKeysIn$1;

  var isObject$3 = isObject_1,
      isPrototype$2 = _isPrototype,
      nativeKeysIn = _nativeKeysIn;
  /** Used for built-in method references. */

  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeysIn$1(object) {
    if (!isObject$3(object)) {
      return nativeKeysIn(object);
    }

    var isProto = isPrototype$2(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeysIn = _baseKeysIn,
      isArrayLike$2 = isArrayLike_1;
  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */

  function keysIn$3(object) {
    return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var keysIn_1 = keysIn$3;

  var copyObject$3 = _copyObject,
      keysIn$2 = keysIn_1;
  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */

  function baseAssignIn$1(object, source) {
    return object && copyObject$3(source, keysIn$2(source), object);
  }

  var _baseAssignIn = baseAssignIn$1;

  var _cloneBuffer = {exports: {}};

  (function (module, exports) {
    var root = _root;
    /** Detect free variable `exports`. */

    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? root.Buffer : undefined,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */

    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }

    module.exports = cloneBuffer;
  })(_cloneBuffer, _cloneBuffer.exports);

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  var _copyArray = copyArray$1;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$1(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  var _arrayFilter = arrayFilter$1;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return [];
  }

  var stubArray_1 = stubArray$2;

  var arrayFilter = _arrayFilter,
      stubArray$1 = stubArray_1;
  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return arrayFilter(nativeGetSymbols$1(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$3;

  var copyObject$2 = _copyObject,
      getSymbols$2 = _getSymbols;
  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */

  function copySymbols$1(source, object) {
    return copyObject$2(source, getSymbols$2(source), object);
  }

  var _copySymbols = copySymbols$1;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$2(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush$2;

  var overArg = _overArg;
  /** Built-in value references. */

  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$2;

  var arrayPush$1 = _arrayPush,
      getPrototype$1 = _getPrototype,
      getSymbols$1 = _getSymbols,
      stubArray = stubArray_1;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];

    while (object) {
      arrayPush$1(result, getSymbols$1(object));
      object = getPrototype$1(object);
    }

    return result;
  };
  var _getSymbolsIn = getSymbolsIn$2;

  var copyObject$1 = _copyObject,
      getSymbolsIn$1 = _getSymbolsIn;
  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */

  function copySymbolsIn$1(source, object) {
    return copyObject$1(source, getSymbolsIn$1(source), object);
  }

  var _copySymbolsIn = copySymbolsIn$1;

  var arrayPush = _arrayPush,
      isArray$1 = isArray_1;
  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys$2;

  var baseGetAllKeys$1 = _baseGetAllKeys,
      getSymbols = _getSymbols,
      keys$2 = keys_1;
  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeys$1(object) {
    return baseGetAllKeys$1(object, keys$2, getSymbols);
  }

  var _getAllKeys = getAllKeys$1;

  var baseGetAllKeys = _baseGetAllKeys,
      getSymbolsIn = _getSymbolsIn,
      keysIn$1 = keysIn_1;
  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn$1;

  var getNative$3 = _getNative,
      root$4 = _root;
  /* Built-in method references that are verified to be native. */

  var DataView$1 = getNative$3(root$4, 'DataView');
  var _DataView = DataView$1;

  var getNative$2 = _getNative,
      root$3 = _root;
  /* Built-in method references that are verified to be native. */

  var Promise$2 = getNative$2(root$3, 'Promise');
  var _Promise = Promise$2;

  var getNative$1 = _getNative,
      root$2 = _root;
  /* Built-in method references that are verified to be native. */

  var Set$1 = getNative$1(root$2, 'Set');
  var _Set = Set$1;

  var getNative = _getNative,
      root$1 = _root;
  /* Built-in method references that are verified to be native. */

  var WeakMap$1 = getNative(root$1, 'WeakMap');
  var _WeakMap = WeakMap$1;

  var DataView = _DataView,
      Map = _Map,
      Promise$1 = _Promise,
      Set = _Set,
      WeakMap = _WeakMap,
      baseGetTag = _baseGetTag,
      toSource = _toSource;
  /** `Object#toString` result references. */

  var mapTag$3 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$3 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$2 = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag$3 = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag$3(new Map()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
    getTag$3 = function (value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$2;

          case mapCtorString:
            return mapTag$3;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag$3;

          case weakMapCtorString:
            return weakMapTag$1;
        }
      }

      return result;
    };
  }

  var _getTag = getTag$3;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */

  function initCloneArray$1(array) {
    var length = array.length,
        result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

    if (length && typeof array[0] == 'string' && hasOwnProperty$1.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }

    return result;
  }

  var _initCloneArray = initCloneArray$1;

  var root = _root;
  /** Built-in value references. */

  var Uint8Array$2 = root.Uint8Array;
  var _Uint8Array = Uint8Array$2;

  var Uint8Array$1 = _Uint8Array;
  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */

  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer$3;

  var cloneArrayBuffer$2 = _cloneArrayBuffer;
  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */

  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView$1;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;
  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */

  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp$1;

  var Symbol = _Symbol;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */

  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol$1;

  var cloneArrayBuffer$1 = _cloneArrayBuffer;
  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */

  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray$1;

  var cloneArrayBuffer = _cloneArrayBuffer,
      cloneDataView = _cloneDataView,
      cloneRegExp = _cloneRegExp,
      cloneSymbol = _cloneSymbol,
      cloneTypedArray = _cloneTypedArray;
  /** `Object#toString` result references. */

  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';
  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */

  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;

    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$1:
        return cloneDataView(object, isDeep);

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor();

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return cloneRegExp(object);

      case setTag$2:
        return new Ctor();

      case symbolTag$1:
        return cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag$1;

  var isObject$2 = isObject_1;
  /** Built-in value references. */

  var objectCreate = Object.create;
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */

  var baseCreate$1 = function () {
    function object() {}

    return function (proto) {
      if (!isObject$2(proto)) {
        return {};
      }

      if (objectCreate) {
        return objectCreate(proto);
      }

      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  var _baseCreate = baseCreate$1;

  var baseCreate = _baseCreate,
      getPrototype = _getPrototype,
      isPrototype$1 = _isPrototype;
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */

  function initCloneObject$1(object) {
    return typeof object.constructor == 'function' && !isPrototype$1(object) ? baseCreate(getPrototype(object)) : {};
  }

  var _initCloneObject = initCloneObject$1;

  var getTag$2 = _getTag,
      isObjectLike$1 = isObjectLike_1;
  /** `Object#toString` result references. */

  var mapTag$1 = '[object Map]';
  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */

  function baseIsMap$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
  }

  var _baseIsMap = baseIsMap$1;

  var baseIsMap = _baseIsMap,
      baseUnary$1 = _baseUnary,
      nodeUtil$1 = _nodeUtil.exports;
  /* Node.js helper references. */

  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */

  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
  var isMap_1 = isMap$1;

  var getTag$1 = _getTag,
      isObjectLike = isObjectLike_1;
  /** `Object#toString` result references. */

  var setTag$1 = '[object Set]';
  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */

  function baseIsSet$1(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
  }

  var _baseIsSet = baseIsSet$1;

  var baseIsSet = _baseIsSet,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtil.exports;
  /* Node.js helper references. */

  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */

  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  var isSet_1 = isSet$1;

  var Stack = _Stack,
      arrayEach = _arrayEach,
      assignValue$1 = _assignValue,
      baseAssign = _baseAssign,
      baseAssignIn = _baseAssignIn,
      cloneBuffer = _cloneBuffer.exports,
      copyArray = _copyArray,
      copySymbols = _copySymbols,
      copySymbolsIn = _copySymbolsIn,
      getAllKeys = _getAllKeys,
      getAllKeysIn = _getAllKeysIn,
      getTag = _getTag,
      initCloneArray = _initCloneArray,
      initCloneByTag = _initCloneByTag,
      initCloneObject = _initCloneObject,
      isArray = isArray_1,
      isBuffer = isBuffer$2.exports,
      isMap = isMap_1,
      isObject$1 = isObject_1,
      isSet = isSet_1,
      keys$1 = keys_1,
      keysIn = keysIn_1;
  /** Used to compose bitmasks for cloning. */

  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values supported by `_.clone`. */

  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */

  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject$1(value)) {
      return value;
    }

    var isArr = isArray(value);

    if (isArr) {
      result = initCloneArray(value);

      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }

      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);

        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = initCloneByTag(value, tag, isDeep);
      }
    } // Check for circular references and return its corresponding clone.


    stack || (stack = new Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys$1;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      } // Recursively populate clone (susceptible to call stack limits).


      assignValue$1(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone$1;

  var baseClone = _baseClone;
  /** Used to compose bitmasks for cloning. */

  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;
  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */

  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  var cloneDeep_1 = cloneDeep;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$2(value) {
    return value;
  }

  var identity_1 = identity$2;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }

  var _apply = apply$1;

  var apply = _apply;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax = Math.max;
  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */

  function overRest$1(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }

      index = -1;
      var otherArgs = Array(start + 1);

      while (++index < start) {
        otherArgs[index] = args[index];
      }

      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest$1;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function () {
      return value;
    };
  }

  var constant_1 = constant$1;

  var constant = constant_1,
      defineProperty = _defineProperty,
      identity$1 = identity_1;
  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */

  var baseSetToString$1 = !defineProperty ? identity$1 : function (func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };
  var _baseSetToString = baseSetToString$1;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeNow = Date.now;
  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */

  function shortOut$1(func) {
    var count = 0,
        lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;

      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }

      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut$1;

  var baseSetToString = _baseSetToString,
      shortOut = _shortOut;
  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */

  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;

  var identity = identity_1,
      overRest = _overRest,
      setToString = _setToString;
  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */

  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  var _baseRest = baseRest$1;

  var eq = eq_1,
      isArrayLike$1 = isArrayLike_1,
      isIndex = _isIndex,
      isObject = isObject_1;
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */

  function isIterateeCall$1(value, index, object) {
    if (!isObject(object)) {
      return false;
    }

    var type = typeof index;

    if (type == 'number' ? isArrayLike$1(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }

    return false;
  }

  var _isIterateeCall = isIterateeCall$1;

  var baseRest = _baseRest,
      isIterateeCall = _isIterateeCall;
  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */

  function createAssigner$1(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }

      object = Object(object);

      while (++index < length) {
        var source = sources[index];

        if (source) {
          assigner(object, source, index, customizer);
        }
      }

      return object;
    });
  }

  var _createAssigner = createAssigner$1;

  var assignValue = _assignValue,
      copyObject = _copyObject,
      createAssigner = _createAssigner,
      isArrayLike = isArrayLike_1,
      isPrototype = _isPrototype,
      keys = keys_1;
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */

  var assign = createAssigner(function (object, source) {
    if (isPrototype(source) || isArrayLike(source)) {
      copyObject(source, keys(source), object);
      return;
    }

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        assignValue(object, key, source[key]);
      }
    }
  });
  var assign_1 = assign;

  var script = {
    name: 'BaseScrollList',
    props: {
      config: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, ctx) {
     
      const defaultConfig = {
        //标题的数据
        headerData: [],
        //标题的样式
        headerStyle: [],
        //标题的背景颜色
        headerBg: 'rgb(90,90,90)',
        // 标题的高度
        headerHeight: 35,
        //标题是否展示
        headerIndex: false,
        //序号列标题的内容
        headerIndexContext: '#',
        //序号列头部的样式
        headerIndexStyle: {
          width: '50px',
        },
        //存储序号列
        headerIndexData: [],
        //序号列内容的展示
        rowIndexStyle: {
          width: '50px',
        },
        data: [], //二维数组
        //显示的数据量(行数)
        rowNum: 5,
        //每行的样式
        rowStyle: [],
        //奇数和偶数的背景颜色
        rowBg: [],
        //居中方式
        aligns: [],
        headerFontSize: 28,
        rowFontSize: 28,
        headerColor: '#fff',
        rowColor: '#000',
        moveNumber: 1, //移动的位置
        duration: 2000, //动画间隔时间
      };
      const id = `scroll-list-${v4()}`;
      const { width, height } = useScreen(id);
      const actualConfig = vue.ref([]);
      const headerData = vue.ref([]);
      const headerStyle = vue.ref([]);
      const rowStyle = vue.ref([]);
      const columnWidths = vue.ref([]);
      const rowHeights = vue.ref([]);
      const rowsData = vue.ref([]);
      const rowBg = vue.ref([]);
      const rowNum = vue.ref(defaultConfig.rowNum);
      const aligns = vue.ref([]);
      const currentRowsData = vue.ref([]); //
      const currentIndex = vue.ref(0); //动画指针
      const isAnimationStart = vue.ref(true);
      let avgHeight;
      const handleHeader = (config) => {
        let _headerData = cloneDeep_1(config.headerData);
        const _headerStyle = cloneDeep_1(config.headerStyle);
        const _rowStyle = cloneDeep_1(config.rowStyle);
        const _aligns = cloneDeep_1(config.aligns);
        // rowStyle
        const _rowsData = cloneDeep_1(config.data);

        if (_headerData.length === 0) {
        _headerData=  new Array(_rowsData[0].length).fill([]);
        }
        if (config.headerIndex) {
          _headerData.unshift(config.headerIndexContext);
          _headerStyle.unshift(config.headerIndexStyle);
          _rowStyle.unshift(config.rowIndexStyle);
          
          _rowsData.forEach((rows, index) => {
      
            //处理序号列的数据
            if (config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
              rows.unshift(config.headerIndexData[index]);
            } else {
              rows.unshift(index + 1);
            }
          
          });
          _aligns.unshift('center');
        }
        //动态计算header中没一列的宽度 (因为unshift元素后需要重新计算宽高)
        let usedWidth = 0; // 记录父级元素剩余的width宽度
        let usedColmnNum = 0;
        _headerStyle.forEach((style, index) => {
          if (style.width) {
            usedWidth = +style.width.replace('px', '');
            usedColmnNum++; //获取设置width属性的元素数量
          }
        });
        //动态计算列款时: 剩余的宽度 / 剩余无width元素的个数
        const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColmnNum);
        const _columnWidth = new Array(_headerData.length).fill(avgWidth);
        _headerStyle.forEach((style, index) => {
          if (style.width) {
            const headerWidth = +style.width.replace('px', '');
            // usedColumnNum++; //获取设置width属性的元素数量
            _columnWidth[index] = headerWidth;
          }
        });
        columnWidths.value = _columnWidth;
        headerData.value = _headerData;
        headerStyle.value = _headerStyle;
        rowStyle.value = _rowStyle;
        const { rowNum } = config;
        // rowNum:默认是10 _rowsData.length是23
        if (_rowsData.length >= rowNum) {
          const newRowData = [..._rowsData, ..._rowsData];
          rowsData.value = newRowData.map((item, index) => ({
            data: item,
            rowIndex: index,
          }));
        } else {
          rowsData.value = _rowsData.map((item, index) => {
            return {
              data: item,
              rowIndex: index,
            };
          });

        }

        aligns.value = _aligns;
      };
      //赋值rowsData
      const handleRows = (config) => {
        //动态计算每行数据的高度
        const { headerHeight } = config;
        rowNum.value = config.rowNum;
        const unusedHeight = height.value - headerHeight;
        //如果rowNum大于实际的数据长度,则以实际数据长度为准
        if (rowNum.value > rowsData.value.length) {
          avgHeight = unusedHeight / rowsData.value.length;
          rowNum.value = rowsData.value.length;
        }
        avgHeight = unusedHeight / rowNum.value; //平均高度F
        rowHeights.value = new Array(rowNum.value).fill(avgHeight);
        //获取行背景色
        if (config.rowBg) {
          rowBg.value = config.rowBg;
        }
      };
      const startAnimation = async () => {
        if (!isAnimationStart.value) return;
        const config = actualConfig.value;
        const { rowNum, moveNumber, duration } = config;
        const totalLength = rowsData.value.length;
        if (totalLength < rowNum) return;
        const index = currentIndex.value;
        const _rowsData = cloneDeep_1(rowsData.value);

        //将数据重新头尾连接
        const rows = _rowsData.slice(index);
        rows.push(..._rowsData.slice(0, index));
        currentRowsData.value = rows;
        //先将所有行高度还原
        rowHeights.value = new Array(totalLength).fill(avgHeight);
        const waitTime = 300;
        if (!isAnimationStart.value) return;
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        //将moveNumber的航高度设置为0
        rowHeights.value.splice(0, moveNumber, ...new Array(moveNumber).fill(0));
        currentIndex.value += moveNumber;
        //是否到达最后一组数据
        const isLast = currentIndex.value - totalLength;
        //解决移动的次数大于1
        if (isLast >= 0) {
          currentIndex.value = isLast;
        }
        if (!isAnimationStart.value) return;
        //延迟操作 sleep休眠
        await new Promise((resolve) => setTimeout(resolve, duration - waitTime));
        if (!isAnimationStart.value) return;
        // stopAnimation()
        // await startAnimation();
      };
      const stopAnimation = () => {
        isAnimationStart.value = false;
      };
     
      const update = () => {
        stopAnimation();
        const _actualConfig = assign_1(defaultConfig, props.config);
        rowsData.value = _actualConfig.data || [];
        handleHeader(_actualConfig);
        handleRows(_actualConfig);
        actualConfig.value = _actualConfig;
        //展示动画
        isAnimationStart.value = true;
        startAnimation();
      };
       vue.onMounted(() =>{
      });
      vue.watch(
        () => props.config,
        () => {
          update();
        }
      );
      return {
        id,
        headerData,
        headerStyle,
        actualConfig,
        columnWidths,
        rowsData,
        rowHeights,
        rowStyle,
        rowBg,
        aligns,
        currentRowsData,
        height,
      };
    },
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-69eed30f");

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", {
      class: "scroll-list",
      id: $setup.id
    }, [
      ($setup.actualConfig.showMenu)
        ? (vue.openBlock(), vue.createBlock("div", {
            key: 0,
            class: "base-scroll-list-header",
            style: {
          backgroundColor: $setup.actualConfig.headerBg,
          height: `${$setup.actualConfig.headerHeight}px`,
          fontSize: `${$setup.actualConfig.headerFontSize}px`,
          color: $setup.actualConfig.headerColor,
        }
          }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($setup.headerData, (headerItem, i) => {
              return (vue.openBlock(), vue.createBlock("div", {
                class: "header-item base-scroll-list-text",
                key: headerItem + i,
                style: { width: `${$setup.columnWidths[i]}px`, ...$setup.headerStyle[i] },
                innerHTML: headerItem,
                align: $setup.aligns[i]
              }, null, 12 /* STYLE, PROPS */, ["innerHTML", "align"]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 4 /* STYLE */))
        : vue.createCommentVNode("v-if", true),
      vue.createVNode("div", {
        class: "base-scroll-list-rows-wrapper",
        style: { height:$setup.actualConfig.showMenu? `${$setup.height - $setup.actualConfig.headerHeight}px`: `${$setup.height}px` }
      }, [
        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($setup.currentRowsData, (rowData, index) => {
          return (vue.openBlock(), vue.createBlock("div", {
            class: "base-scroll-list-rows",
            key: rowData.rowIndex,
            style: {
            height: `${$setup.rowHeights[index]}px`,
            backgroundColor: rowData.rowIndex % 2 === 0 ? $setup.rowBg[1] : $setup.rowBg[0],
            fontSize: `${$setup.actualConfig.rowFontSize}px`,
            color: $setup.actualConfig.rowColor,
            lineHeight: `${$setup.rowHeights[index]}px`,
          }
          }, [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(rowData.data, (cloData, colIndex) => {
              return (vue.openBlock(), vue.createBlock("div", {
                class: "base-scroll-list-colums base-scroll-list-text",
                innerHTML: cloData,
                key: cloData + colIndex,
                style: {
              width: `${$setup.columnWidths[colIndex]}px`,
              ...$setup.rowStyle[colIndex],
            },
                align: $setup.aligns[colIndex]
              }, null, 12 /* STYLE, PROPS */, ["innerHTML", "align"]))
            }), 128 /* KEYED_FRAGMENT */))
          ], 4 /* STYLE */))
        }), 128 /* KEYED_FRAGMENT */))
      ], 4 /* STYLE */)
    ], 8 /* PROPS */, ["id"]))
  });

  var css_248z = ".scroll-list[data-v-69eed30f] {\n  width: 100%;\n  height: 100%;\n}\n.scroll-list[data-v-69eed30f] .base-scroll-list-text[data-v-69eed30f] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n}\n.scroll-list[data-v-69eed30f] .base-scroll-list-header[data-v-69eed30f] {\n  display: flex;\n  font-size: 15px;\n  align-items: center;\n}\n.scroll-list[data-v-69eed30f] .header-item[data-v-69eed30f] {\n  width: 150px;\n}\n.scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] {\n  overflow: hidden;\n}\n.scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] .base-scroll-list-rows[data-v-69eed30f] {\n  display: flex;\n  align-items: center;\n  transition: all 0.3s linear;\n}\n.scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] .base-scroll-list-rows[data-v-69eed30f] .base-scroll-list-colums[data-v-69eed30f] {\n  height: 100%;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-69eed30f";
  script.__file = "src/components/BaseScrollList/BaseScrollList.vue";

  function BaseScrollList (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(Text);
    Vue.use(Text2);
    Vue.use(Text3);
    Vue.use(SvgIcon);
    Vue.use(SvgAnimation);
    Vue.use(ThunderLoading);
    Vue.use(ThunderFlyBox);
    Vue.use(Container);
    Vue.use(ThunderLogo);
    Vue.use(VueCountTo);
    Vue.use(VueEcharts);
    Vue.use(BaseScrollList);
  }

  return index;

})));
