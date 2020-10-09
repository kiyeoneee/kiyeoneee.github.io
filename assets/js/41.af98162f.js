(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{400:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx를-이용해-springboot-application을-80-port로-프록시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx를-이용해-springboot-application을-80-port로-프록시"}},[t._v("#")]),t._v(" Nginx를 이용해 SpringBoot Application을 80 port로 프록시")]),t._v(" "),a("p",[t._v("SpringBoot Application을 80 port로 사용하고 싶은데, 리눅스 환경에서 80, 443과 같은 포트는 루트 권한으로 사용이 가능하다."),a("br"),t._v("\nSpringBoot application의 내장 톰켓이 해당 포트를 사용할 수 있도록 sudo 권한을 사용해 서비스를 올리는 것 보다 proxy 서버를 올리는게 더욱 용이하므로 Nginx를 사용한 내용을 정리한다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"nginx-란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-란"}},[t._v("#")]),t._v(" Nginx 란?")]),t._v(" "),a("p",[t._v("Apache의 1만명 규모 클라이언트의 동시 접속을 다루는 기술적인 이슈를 해결하기 위해 만든 Event-driven 구조의 오픈소스 서버 프로그램이다.\n일반적인 HTTP 웹서버의 역할 외에도 proxy, reverse proxy를 제공한다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"설치-및-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치-및-설정"}},[t._v("#")]),t._v(" 설치 및 설정")]),t._v(" "),a("h3",{attrs:{id:"centos6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos6"}},[t._v("#")]),t._v(" Centos6")]),t._v(" "),a("p",[t._v("서버의 권한 이슈로 sudo 명령어를 사용")]),t._v(" "),a("h4",{attrs:{id:"설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[t._v("#")]),t._v(" 설치")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),a("br"),t._v(" "),a("h4",{attrs:{id:"라우팅-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#라우팅-설정"}},[t._v("#")]),t._v(" 라우팅 설정")]),t._v(" "),a("p",[t._v("yum으로 nginx를 설치하게 되면 "),a("code",[t._v("/etc/nginx")]),t._v(" 경로에 설치된다."),a("br"),t._v("\nnginx 디렉토리 중 "),a("code",[t._v("conf.d")]),t._v("디렉토리 하위의 "),a("code",[t._v("default.conf")]),t._v(" 파일을 변경하여 SpringBoot Application을 80 port로 포팅 한다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nginx/conf.d/default.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 아래와 같이 변경")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The default server")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       80 default_server; ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    listen       [::]:80 default_server;")]),t._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root         /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load configuration files for the default server block.")]),t._v("\n    include /etc/nginx/default.d/*.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t\t\t\tSpringBoot application을 매핑")]),t._v("\n        proxy_pass http://localhost:9100"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t\t\t\tjava application은 requestUrl을 실제 client가 조회하는 url로 받기 위한 설정")]),t._v("\n        proxy_set_header Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" /404.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /40x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v(" /50x.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"server-블럭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-블럭"}},[t._v("#")]),t._v(" "),a("strong",[t._v("server 블럭")])]),t._v(" "),a("p",[t._v("도메인 단위의 1차 라우팅에 대한 설정을 담당한다..")]),t._v(" "),a("ul",[a("li",[t._v("listen : 서버 블록 정의 중 해당 서버에서 라우팅 할 특정 port를 정의하는 필드\n"),a("ul",[a("li",[t._v("default_server : 여러개의 server 블록을 작성할 때 default_server는 프로토콜 별로 단 하나의 server 블록에만 존재해야 합니다. 이 설정은 별도로 지정하지 않은 도메인으로 들어오는 다른 모든 요청에 대해서 해당 server 블록이 처리함을 의미한다.")])])]),t._v(" "),a("li",[t._v("server_name : 어떤 도메인을 라우팅 할지에 대한 필드")])]),t._v(" "),a("br"),t._v(" "),a("h5",{attrs:{id:"location-블럭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-블럭"}},[t._v("#")]),t._v(" location 블럭")]),t._v(" "),a("p",[t._v("URI 리퀘스트의 path prefix의 매칭을 확인하여 적절한 어플리케이션으로 매핑한다.")]),t._v(" "),a("ul",[a("li",[t._v("proxy_pass : 실질적으로 요청 할 서비스를 명시하는 필드")])]),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"nginx-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-실행"}},[t._v("#")]),t._v(" Nginx 실행")]),t._v(" "),a("p",[t._v("아래의 명령어로 nginx 명령어 만으로 실행이 완료되고 별다른 알람 없이 실행이 완료되면 ps 명령어로 한번 더 확인 해 준다.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20270")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":36 ?        00:00:00 nginx: master process nginx\nnginx    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20271")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20270")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":36 ?        00:00:01 nginx: worker process\nnginx    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20272")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20270")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":36 ?        00:00:01 nginx: worker process\nnginx    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20273")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20270")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":36 ?        00:00:01 nginx: worker process\n")])])]),a("br"),t._v(" "),a("h4",{attrs:{id:"nginx-기타-운영"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-기타-운영"}},[t._v("#")]),t._v(" Nginx 기타 운영")]),t._v(" "),a("h5",{attrs:{id:"nginx-중지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-중지"}},[t._v("#")]),t._v(" Nginx 중지")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ nginx -s stop\n")])])]),a("h5",{attrs:{id:"nginx-리로드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-리로드"}},[t._v("#")]),t._v(" Nginx 리로드")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ nginx -s reload\n")])])]),a("h5",{attrs:{id:"nginx-체크"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-체크"}},[t._v("#")]),t._v(" Nginx 체크")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ nginx -s check\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);