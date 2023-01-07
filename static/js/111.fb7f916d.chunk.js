"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[111],{4574:function(n,r,e){e.d(r,{h:function(){return s}});var t,o,i=e(168),a=e(6444),s=(a.ZP.button(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100px;\n  min-height: 30px;\n  margin: ",";\n  padding: 8px 10px;\n  font-size: ",";\n  font-weight: 700;\n  text-transform: uppercase;\n  color: rgb(42 42 42);\n  background-color: ",";\n  border-radius: 5px;\n  border: none;\n  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);\n  cursor: pointer;\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 255 255);\n    background-color: rgba(9, 9, 121, 0.7);\n    border: none;\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.size||"10px"}),(function(n){return n.bgc||"rgba(160, 141, 196, 0.5)"})),a.ZP.button(o||(o=(0,i.Z)(["\n  display: inline-flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  margin: ",";\n  padding: 0;\n  color: ",";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 0 0);\n  }\n  & > svg {\n    fill: currentColor;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.color||"rgb(42 42 42)"})))},7830:function(n,r,e){e.d(r,{II:function(){return d},__:function(){return x},gN:function(){return p},k4:function(){return f},l0:function(){return u}});var t,o,i,a,s,c=e(168),l=e(6444),u=l.ZP.form(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 320px;\n  background-color: transparent;\n"]))),p=l.ZP.label(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),x=l.ZP.span(i||(i=(0,c.Z)(["\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.17;\n  letter-spacing: 0.01em;\n  color: #000;\n"]))),d=l.ZP.input(a||(a=(0,c.Z)(["\n  width: 250px;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #000;\n  background-color: transparent;\n  border-radius: 5px;\n  border: 1px solid rgba(128, 128, 128, 0.5);\n  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);\n  &:hover,\n  &:focus,\n  &:active {\n    outline: 0;\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;\n  }\n"]))),f=l.ZP.button(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 30px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: rgba(9, 9, 121);\n  border-radius: 5px;\n  border: 1px solid rgba(128, 128, 128, 0.263);\n  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);\n  cursor: pointer;\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: rgba(9, 9, 121, 0.9);\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;\n  }\n"])))},8813:function(n,r,e){e.d(r,{W:function(){return d}});var t,o=e(9439),i=e(168),a=e(6444),s=e(2791),c=e(7692),l=e(7830),u=e(4574),p=e(3329),x=a.ZP.span(t||(t=(0,i.Z)(["\n  position: relative;\n  display: block;\n  & svg {\n    position: absolute;\n    top: 50%;\n    right: 8px;\n    transform: translateY(-50%);\n    fill: rgba(128, 128, 128, 0.7);\n    &:hover {\n      fill: rgba(128, 128, 128, 1);\n    }\n  }\n"]))),d=function(n){var r=n.value,e=n.onChange,t=(0,s.useState)(!0),i=(0,o.Z)(t,2),a=i[0],d=i[1];return(0,p.jsxs)(x,{children:[(0,p.jsx)(l.II,{type:a?"password":"text",name:"password",value:r,onChange:e,placeholder:"Enter your password...",title:"Password must consist of numbers and letters",required:!0}),(0,p.jsx)(u.h,{onClick:function(n){n.preventDefault(),d(!a)},children:a?(0,p.jsx)(c.nJ9,{size:20}):(0,p.jsx)(c.A7v,{size:20})})]})}},6111:function(n,r,e){e.r(r),e.d(r,{default:function(){return p}});var t=e(8097),o=e(5048),i=e(9273),a=e(7830),s=e(8813),c=e(3329),l=function(){var n=(0,o.I0)();return(0,c.jsxs)(a.l0,{onSubmit:function(r){r.preventDefault();var e=r.target,t=e.elements.email,o=e.elements.password,a={email:t.value,password:o.value};n((0,i.Ib)(a)),e.reset()},children:[(0,c.jsxs)(a.gN,{"aria-label":"Email",children:[(0,c.jsx)(a.__,{children:"Email"}),(0,c.jsx)(a.II,{type:"email",name:"email",placeholder:"Enter your email...",title:"Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain",required:!0})]}),(0,c.jsxs)(a.gN,{"aria-label":"Password",children:[(0,c.jsx)(a.__,{children:"Password"}),(0,c.jsx)(s.W,{})]}),(0,c.jsx)(a.k4,{type:"submit",children:"Log in"})]})},u=e(9742),p=function(){return(0,c.jsxs)("main",{children:[(0,c.jsx)(u.H,{title:"Login",description:"You can login to your account"}),(0,c.jsx)(t.W2,{children:(0,c.jsxs)(t.$0,{children:[(0,c.jsx)(t.Dx,{children:"Log in to your account"}),(0,c.jsx)(l,{})]})})]})}},9742:function(n,r,e){e.d(r,{H:function(){return i}});e(2791);var t=e(6907),o=e(3329);function i(n){var r=n.title,e=n.description;return(0,o.jsxs)(t.ql,{children:[(0,o.jsx)("title",{children:r}),(0,o.jsx)("meta",{name:"description",content:e})]})}}}]);
//# sourceMappingURL=111.fb7f916d.chunk.js.map