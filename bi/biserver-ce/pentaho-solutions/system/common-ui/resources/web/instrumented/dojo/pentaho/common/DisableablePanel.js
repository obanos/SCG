/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['dojo/pentaho/common/DisableablePanel.js']) {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'] = [];
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][21] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][22] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][23] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][24] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][26] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][37] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][39] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][40] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][46] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][52] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][54] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][58] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][62] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][66] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][68] = 0;
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][72] = 0;
}
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> * Pentaho</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Copyright (C) 2002-2012 by Pentaho : http://www.pentaho.com</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Licensed under the Apache License, Version 2.0 (the \"License\");</span>","<span class=\"c\"> * you may not use this file except in compliance with</span>","<span class=\"c\"> * the License. You may obtain a copy of the License at</span>","<span class=\"c\"> *    http://www.apache.org/licenses/LICENSE-2.0</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Unless required by applicable law or agreed to in writing, software</span>","<span class=\"c\"> * distributed under the License is distributed on an \"AS IS\" BASIS,</span>","<span class=\"c\"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span>","<span class=\"c\"> * See the License for the specific language governing permissions and</span>","<span class=\"c\"> * limitations under the License.</span>","<span class=\"c\"> * *****************************************************************************</span>","<span class=\"c\"> */</span>","","dojo<span class=\"k\">.</span>provide<span class=\"k\">(</span><span class=\"s\">\"pentaho.common.DisableablePanel\"</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit._Templated\"</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit.layout._LayoutWidget\"</span><span class=\"k\">);</span>","dojo<span class=\"k\">.</span>require<span class=\"k\">(</span><span class=\"s\">\"dijit.layout.ContentPane\"</span><span class=\"k\">);</span>","","dojo<span class=\"k\">.</span>declare<span class=\"k\">(</span>","  <span class=\"s\">\"pentaho.common.DisableablePanel\"</span><span class=\"k\">,</span>","  <span class=\"k\">[</span>dijit<span class=\"k\">.</span>layout<span class=\"k\">.</span>ContentPane<span class=\"k\">,</span> dijit<span class=\"k\">.</span>layout<span class=\"k\">.</span>_LayoutWidget<span class=\"k\">,</span> dijit<span class=\"k\">.</span>_Templated<span class=\"k\">],</span>","<span class=\"k\">{</span>","","  templatePath<span class=\"k\">:</span> dojo<span class=\"k\">.</span>moduleUrl<span class=\"k\">(</span><span class=\"s\">'pentaho.common'</span><span class=\"k\">,</span> <span class=\"s\">'DisableablePanel.html'</span><span class=\"k\">),</span>","  widgetsInTemplate<span class=\"k\">:</span> <span class=\"k\">true</span><span class=\"k\">,</span>","  width<span class=\"k\">:</span> <span class=\"s\">\"150px\"</span><span class=\"k\">,</span>","  disabled<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","","  postCreate<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">this</span><span class=\"k\">.</span>inherited<span class=\"k\">(</span>arguments<span class=\"k\">);</span>","","    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>disabled<span class=\"k\">)</span> <span class=\"k\">{</span>","      <span class=\"k\">this</span><span class=\"k\">.</span>disable<span class=\"k\">();</span>","    <span class=\"k\">}</span>","","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  disable<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    dojo<span class=\"k\">.</span>style<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>disabledPane<span class=\"k\">,</span> <span class=\"k\">{</span>","      display<span class=\"k\">:</span> <span class=\"s\">\"block\"</span><span class=\"k\">,</span>","      height<span class=\"k\">:</span> <span class=\"s\">\"100%\"</span><span class=\"k\">,</span>","      width<span class=\"k\">:</span> <span class=\"s\">\"100%\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","    dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">'input'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>containerNode<span class=\"k\">).</span>forEach<span class=\"k\">(</span>","      <span class=\"k\">function</span><span class=\"k\">(</span>inputElem<span class=\"k\">)</span><span class=\"k\">{</span>","        inputElem<span class=\"k\">.</span>disabled <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">);</span>","","    <span class=\"k\">this</span><span class=\"k\">.</span>disabled <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","  <span class=\"k\">}</span><span class=\"k\">,</span>","","  enable<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","    dojo<span class=\"k\">.</span>style<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>disabledPane<span class=\"k\">,</span> <span class=\"k\">{</span>","      display<span class=\"k\">:</span> <span class=\"s\">\"none\"</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","    dojo<span class=\"k\">.</span>query<span class=\"k\">(</span><span class=\"s\">'input'</span><span class=\"k\">,</span> <span class=\"k\">this</span><span class=\"k\">.</span>containerNode<span class=\"k\">).</span>forEach<span class=\"k\">(</span>","      <span class=\"k\">function</span><span class=\"k\">(</span>inputElem<span class=\"k\">)</span><span class=\"k\">{</span>","        inputElem<span class=\"k\">.</span>disabled <span class=\"k\">=</span> <span class=\"k\">false</span><span class=\"k\">;</span>","      <span class=\"k\">}</span>","    <span class=\"k\">);</span>","","    <span class=\"k\">this</span><span class=\"k\">.</span>disabled <span class=\"k\">=</span> <span class=\"k\">false</span><span class=\"k\">;</span>","","  <span class=\"k\">}</span>","","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'][21]++;
dojo.provide("pentaho.common.DisableablePanel");
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'][22]++;
dojo.require("dijit._Templated");
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'][23]++;
dojo.require("dijit.layout._LayoutWidget");
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'][24]++;
dojo.require("dijit.layout.ContentPane");
_$jscoverage['dojo/pentaho/common/DisableablePanel.js'][26]++;
dojo.declare("pentaho.common.DisableablePanel", [dijit.layout.ContentPane, dijit.layout._LayoutWidget, dijit._Templated], {templatePath: dojo.moduleUrl("pentaho.common", "DisableablePanel.html"), widgetsInTemplate: true, width: "150px", disabled: false, postCreate: (function () {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][37]++;
  this.inherited(arguments);
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][39]++;
  if (this.disabled) {
    _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][40]++;
    this.disable();
  }
}), disable: (function () {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][46]++;
  dojo.style(this.disabledPane, {display: "block", height: "100%", width: "100%"});
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][52]++;
  dojo.query("input", this.containerNode).forEach((function (inputElem) {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][54]++;
  inputElem.disabled = true;
}));
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][58]++;
  this.disabled = true;
}), enable: (function () {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][62]++;
  dojo.style(this.disabledPane, {display: "none"});
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][66]++;
  dojo.query("input", this.containerNode).forEach((function (inputElem) {
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][68]++;
  inputElem.disabled = false;
}));
  _$jscoverage['dojo/pentaho/common/DisableablePanel.js'][72]++;
  this.disabled = false;
})});