(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(a,t,s){"use strict";s.r(t);var e=s(42),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_3장-모든-객체의-공통-메서드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3장-모든-객체의-공통-메서드"}},[a._v("#")]),a._v(" 3장. 모든 객체의 공통 메서드")]),a._v(" "),s("h2",{attrs:{id:"목차"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#목차"}},[a._v("#")]),a._v(" 목차")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#Item-10-equals%EB%8A%94-%EC%9D%BC%EB%B0%98-%EA%B7%9C%EC%95%BD%EC%9D%84-%EC%A7%80%EC%BC%9C-%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%9D%BC"}},[a._v("Item 10. equals는 일반 규약을 지켜 재정의하라")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Item-11-equals%EB%A5%BC-%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%A0%A4%EA%B1%B0%EB%93%A0-hashCode%EB%8F%84-%EC%9E%AC%EC%A0%95%EC%9D%98%ED%95%98%EB%9D%BC"}},[a._v("Item 11. equals를 재정의하려거든 hashCode도 재정의하라")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Item-12-toString%EC%9D%84-%ED%95%AD%EC%83%81-%EC%9E%AC%EC%A0%95%EC%9D%98-%ED%95%98%EB%9D%BC"}},[a._v("Item 12. toString을 항상 재정의 하라")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Item-13-clone-%EC%9E%AC%EC%A0%95%EC%9D%98%EB%8A%94-%EC%A3%BC%EC%9D%98%ED%95%B4%EC%84%9C-%EC%A7%84%ED%96%89%ED%95%98%EB%9D%BC"}},[a._v("Item 13. clone 재정의는 주의해서 진행하라")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Item-14-Comparable%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%A0%EC%A7%80-%EA%B3%A0%EB%A0%A4%ED%95%98%EB%9D%BC"}},[a._v("Item 14. Comparable을 구현할지 고려하라")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#Additional-Keyword"}},[a._v("Additional Keyword")])])]),a._v(" "),s("hr"),a._v(" "),s("blockquote",[s("p",[a._v("Object final이 아닌 메서드(equals, hashCode, toString, clone, finalize)는 일반 규약에 맞게 재정의 됨을 염두에 두고 설계되었음"),s("br"),a._v("\nObject를 상속하는 클래스, 즉 모든 클래스는 위 메서드를 재정의 해야 함")])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"item-10-equals는-일반-규약을-지켜-재정의하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-10-equals는-일반-규약을-지켜-재정의하라"}},[a._v("#")]),a._v(" Item 10. equals는 일반 규약을 지켜 재정의하라")]),a._v(" "),s("p",[s("strong",[a._v("요약!")]),a._v(" equals는 꼭 필요한 경우가 아니면 재정의를 피하여 의도치 않은 문제를 일으키지 않도록 하자")]),a._v(" "),s("ul",[s("li",[a._v("equals 메서드는 아래의 상황일 경우 재정의 하지 않음\n"),s("ul",[s("li",[a._v("각 인스턴스가 본질적으로 고유 : 단순히 값이 아닌 고유한 동작 개체일 경우 (eg. Thread, Enum)")]),a._v(" "),s("li",[a._v("논리적 동치성을 검사할 일이 없는 경우")]),a._v(" "),s("li",[a._v("상위 클래스에서 재정의한 equals를 따를 경우")]),a._v(" "),s("li",[a._v("클래스가 private/package-private이고 equals 메서드를 호출할 일이 없는 경우")])])]),a._v(" "),s("li",[a._v("equals를 재정의해야 할 때\n"),s("ul",[s("li",[a._v("논리적 동치성을 확인해야 하는데, 상위 클래스의 equals가 이를 포함하지 않는 경우")])])]),a._v(" "),s("li",[a._v("구체 클래스를 확장해 새로운 값을 추가하면서 equals 규약을 만족시킬 방법은 존재하지 않음")]),a._v(" "),s("li",[a._v("equals 재정의 일반 규약\n"),s("ul",[s("li",[a._v("반사성")]),a._v(" "),s("li",[a._v("대칭성")]),a._v(" "),s("li",[a._v("추이성\n"),s("ul",[s("li",[a._v("구체 클래스를 확장해 새로운 값을 추가하면서 equals 규약을 만족시킬 방법은 존재하지 않으므로 유의해야 함")])])]),a._v(" "),s("li",[a._v("일관성\n"),s("ul",[s("li",[a._v("자원이 일관성을 띄지 않으면 equals는 일관성을 유지하기 어려움")]),a._v(" "),s("li",[a._v("메모리에 존재하는 객체만을 사용한 결정적 계산만 수행")])])]),a._v(" "),s("li",[a._v("null-아님\n"),s("ul",[s("li",[a._v("건네받은 객체를 가장 먼저 instanceof 연산자로 검사 (명시적 null check를 피하자)")])])])])]),a._v(" "),s("li",[a._v("equals 메서드 구현 단계\n"),s("ol",[s("li",[a._v("== 연산자로 자기 자신의 참조인지 확인")]),a._v(" "),s("li",[a._v("instanceof 연산자로 타입 확인")]),a._v(" "),s("li",[a._v("입력을 올바른 타입으로 형변환")]),a._v(" "),s("li",[a._v("모든 핵심 필드들의 일치 여부 확인")])])]),a._v(" "),s("li",[a._v("equals를 재정의할 땐 hashCode도 반드시 재정의")])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"item-11-equals를-재정의하려거든-hashcode도-재정의하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-11-equals를-재정의하려거든-hashcode도-재정의하라"}},[a._v("#")]),a._v(" Item 11. equals를 재정의하려거든 hashCode도 재정의하라")]),a._v(" "),s("ul",[s("li",[a._v("equals(Object)가 두 객체를 같다고 판단했다면, 두 객체의 hashCode는 똑같은 값을 반환")]),a._v(" "),s("li",[a._v("좋은 해시 함수라면 서로 다른 인스턴스에 다른 해시코드를 반환")])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"item-12-tostring을-항상-재정의-하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-12-tostring을-항상-재정의-하라"}},[a._v("#")]),a._v(" Item 12. toString을 항상 재정의 하라")]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"item-13-clone-재정의는-주의해서-진행하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-13-clone-재정의는-주의해서-진행하라"}},[a._v("#")]),a._v(" Item 13. clone 재정의는 주의해서 진행하라")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("clone 메서드의 일반 규약")]),a._v(" "),s("blockquote",[s("p",[a._v("**'복사'**의 정확한 뜻은 그 객체를 구현한 클래스에 따라 다르지만 일반적인 의도는 갖추자")]),a._v(" "),s("ul",[s("li",[a._v("x.clone != x")]),a._v(" "),s("li",[a._v("x.clone.getClass() = x.getClass()")])]),a._v(" "),s("p",[a._v("일반적으로 참이지만 필수는 아닌 조건")]),a._v(" "),s("ul",[s("li",[a._v("x.clone().equal(x)")])]),a._v(" "),s("p",[a._v("반환된 객체와 원본 객체는 독립적이어야 함")])])]),a._v(" "),s("li",[s("p",[a._v("원본 객체에 아무런 해를 끼치지 않는 동시에 복제된 객체의 불변식을 보장해야 함")]),a._v(" "),s("ul",[s("li",[a._v("가변 객체의 복제 시 유의")])])]),a._v(" "),s("li",[s("p",[a._v("Cloneable을 구현한 스레드 안전 클래스를 작성할 떄는 clone 메서드 역시 적절히 동기화해줘야 함")])]),a._v(" "),s("li",[s("p",[a._v("Cloneable을 구현한 클래스를 확장한다면 clone을 잘 작동하도록 구현하거나 변환 생성자, 변환 팩터리를 통해 객체 복사 방식을 제공하는 방법이 있음")])])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"item-14-comparable을-구현할지-고려하라"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-14-comparable을-구현할지-고려하라"}},[a._v("#")]),a._v(" Item 14. Comparable을 구현할지 고려하라")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("compareTo 메서드의 일반 규약")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("반환값\n"),s("ul",[s("li",[a._v("this < source : 음의 정수 ( -1 )")]),a._v(" "),s("li",[a._v("this == source : 0")]),a._v(" "),s("li",[a._v("this > souce : 양의 정수 ( 1 )")])])]),a._v(" "),s("li",[a._v("sgn(x.compareTo(y)) == - sgn(y.compareTo(x))")]),a._v(" "),s("li",[a._v("추이성 보장 (a > b && b > c 이면 a > c, a == b 이면 a == z, b == z)")]),a._v(" "),s("li",[a._v("필수는 아니지만 권장 (x.compareTo(y) == 0) == x.equals(y)"),s("br"),a._v("\n위 규약을 지키지 않을 시 클래스의 순서와 equals 메서드가 일관되지 않음을 명시할 것")])])])]),a._v(" "),s("li",[s("p",[a._v("comparable을 구현하지 않은 필드나 표준이 아닌 순서로 비교해야 한다면 Comparator를 대신 사용할 것")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CaseInsensitiveString")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CaseInsensitiveString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Comparable<T> ")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CaseInsensitiveString")]),a._v(" cis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CASE_INSENSITIVE_ORDER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("클래스에 핵심 필드가 여러 개라면 핵심적인 필드부터 비교")]),a._v(" "),s("ul",[s("li",[a._v("핵심 필드부터 순차적으로 비교하다가 0이 아닌 결과가 나오는 경우 해당 결과 반환")])])]),a._v(" "),s("li",[s("p",[a._v("Java 7 이후로는 박싱된 기본 타입 비교는 >, < 비교연산자를 지양하고 클래스들에 추가된 compare을 사용")])])]),a._v(" "),s("br"),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"additional-keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-keyword"}},[a._v("#")]),a._v(" Additional Keyword")]),a._v(" "),s("h3",{attrs:{id:"item-13"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-13"}},[a._v("#")]),a._v(" Item 13")]),a._v(" "),s("ul",[s("li",[a._v("공변 반환 타이핑")])])])}),[],!1,null,null,null);t.default=v.exports}}]);