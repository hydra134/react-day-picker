webpackJsonp([0x607f265d06ac],{296:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),u=a(n),r=l(9),d=a(r),o=l(27),c=a(o),f=l(16),m=a(f),i=l(14),s=a(i),h=l(48),E=a(h);t.default=function(){return u.default.createElement(s.default,{title:"LocaleUtils API"},u.default.createElement("p",null,"Set of functions used internally to localize the component."),u.default.createElement("p",null," ","In some cases, you may want to implement your own ",u.default.createElement("code",null,"LocaleUtils"),", or override some of its functions (see:"," ",u.default.createElement(d.default,{to:"/docs/localization"},"Localization"),"). For example, this code renders the month’s title as ",u.default.createElement("code",null,"M/YYYY")," instead of the default:"),u.default.createElement(m.default,null,'import DayPicker, { LocaleUtils } from "react-day-picker";\n\nfunction formatMonthTitle(d, locale) {\n return `${d.getMonth() + 1}/${d.getFullYear()}`\n}\n\n<DayPicker localeUtils={ { ...LocaleUtils, formatMonthTitle } } />\n'),u.default.createElement("hr",null),u.default.createElement(E.default,null,u.default.createElement("h2",null,"Functions"),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"formatDay"}),"formatDay ",u.default.createElement("code",null,"(day: Date, locale: string) ⇒ string")),u.default.createElement("p",null,"Format the string used as aria-label for the given ",u.default.createElement("code",null,"day"),"."),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"formatMonthTitle"}),"formatMonthTitle ",u.default.createElement("code",null,"(month: Date, locale: string) ⇒ string")),u.default.createElement("p",null,"Return the string used to format the month’s title for the given"," ",u.default.createElement("code",null,"month"),"."),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"formatWeekdayLong"}),"formatWeekdayLong ",u.default.createElement("code",null,"(i: number, locale: string) ⇒ string")),u.default.createElement("p",null,"Return the string used to render the weekday’s long name (starting from",u.default.createElement("code",null,"0")," as Sunday)."),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"formatWeekdayShort"}),"formatWeekdayShort ",u.default.createElement("code",null,"(i: number, locale: string) ⇒ string")),u.default.createElement("p",null,"Return the string used to render the weekday’s short name, e.g."," ",u.default.createElement("code",null,"Mo")," for",u.default.createElement("i",null,"Monday"),"."),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"getFirstDayOfWeek"}),"getFirstDayOfWeek ",u.default.createElement("code",null,"(locale: string) ⇒ number")),u.default.createElement("p",null,"Return the first day of the week for the given locale (where"," ",u.default.createElement("code",null,"0"),"is Sunday)."),u.default.createElement("h3",null,u.default.createElement(c.default,{id:"getMonths"}),"getMonths ",u.default.createElement("code",null,"(locale: string) ⇒ number")),u.default.createElement("p",null,"Return the twelve months for the given locale (full name, e.g."," ",u.default.createElement("code",null,"January"),").")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-api-locale-utils-js-b772e211c8af8b9931b7.js.map