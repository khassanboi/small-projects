$(document).ready(function () {

    var language = {
        en: {
            welcome: "Welcome to my portfolio!",
            experience: "For the best experience use computer",
            techTitle: "Technologies I use",
            prosTitle: "Pros of working with me",
            a: "Quality",
            b: "Time saving",
            c: "Good prices",
            d: "Friendly communication",
            e: "Responsive web-pages",
            f: "Well-coding",
            projectsTitle: "My projects",
            hello: "Hello",
            g: "world!",
            h: "visitors!",
            i: "users!",
            j: "everybody!",
            k: "c",
            l: "o",
            m: "m",
            n: "i",
            o: "n",
            p: "g",
            q: "",
            r: "s",
            s: "o",
            t: "o",
            u: "n",
            v: "...",
            abtMyself: "About myself",
            w: "First name:",
            x: "Last name:",
            y: "Age:",
            z: "Occupation:",
            aa: "Languages:",
            ab: "Khasanboy",
            ac: "Tadjibaev",
            ad: "18",
            ae: "Student",
            af: "Uzbek",
            ag: "English",
            ah: "Russian",
            ai: "Contact me",
            aj: "Made with"


        },
        ru: {
            welcome: "Добро пожаловать в мое портфолио!",
            experience: "Для лучшего впечатления испольуйте компьютер",
            techTitle: "Технологии которые Я использую",
            prosTitle: "Плюсы работы со мной",
            a: "Качества",
            b: "Экономия времени",
            c: "Отличные цены",
            d: "Дружеское общение",
            e: "Отзывчивые веб-страницы",
            f: "Хорошо кодирование",
            projectsTitle: "Мои проекты",
            hello: "Привет",
            g: "мир!",
            h: "посетители!",
            i: "пользователи!",
            j: "всем!",
            k: "с",
            l: "к",
            m: "о",
            n: "р",
            o: "о",
            p: "...",
            q: "",
            r: "",
            s: "",
            t: "",
            u: "",
            v: "",
            abtMyself: "О себе",
            w: "Имя:",
            x: "Фамилия:",
            y: "Возраст:",
            z: "Занятие:",
            aa: "Языки:",
            ab: "Хасанбой",
            ac: "Таджибаев",
            ad: "18",
            ae: "Студент",
            af: "Узбекский",
            ag: "Английский",
            ah: "Русский",
            ai: "Контакты",
            aj: "Сделано с"
        },
        uz: {
            welcome: "Portfolioyimga Hush kelibsiz!",
            experience: "Yaxshiroq taassurot uchun kompyuterdan foydalaning",
            techTitle: "Men foydalanadigan texnologiyalar",
            prosTitle: "Men bilan ishlashning afzalliklari",
            a: "Sifat",
            b: "Vaqt tejami",
            c: "Hamyonbop narxlar",
            d: "Do'stona aloqa",
            e: "Moslashuvchan veb-sahifalar",
            f: "Mustahkam tuzilma",
            projectsTitle: "Mening proyektlarim",
            hello: "Salom",
            g: "dunyo!",
            h: "tashrifchilar!",
            i: "foydalanuvchilar!",
            j: "barchaga!",
            k: "",
            l: "t",
            m: "e",
            n: "z",
            o: "",
            p: "",
            q: "o",
            r: "r",
            s: "a",
            t: "d",
            u: "a",
            v: "...",
            abtMyself: "Men haqimda",
            w: "Ism:",
            x: "Familiya:",
            y: "Yosh:",
            z: "Kasbi:",
            aa: "Biladigan tillari:",
            ab: "Xasanboy",
            ac: "Tadjibayev",
            ad: "18",
            ae: "Talaba",
            af: "O'zbekcha",
            ag: "Inglizcha",
            ah: "Ruscha",
            ai: "Men bilan bog'lanish",
            aj: "<div class=\"col-1 offset-5 text-center mt-5 pt-5\">\n" +
            "            <div id=\"wrapper\" class=\"mt-5 pt-5\">\n" +
            "                <div id=\"pulsingheart\"></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"col-12 mt-5 pt-5\">\n" +
            "            <h5 class=\"text-white mt-5 pt-5\" id=\"madeWith\">bilan tayyorlandi</h5>\n" +
            "        </div>"

        }
    };

    var dataReload = jQuery("body").find("[data-reload]");
    var hash = window.location.hash;

    if(hash){
        if(hash === '#uz'){
            $('#welcome').text(language.uz.welcome);
            $('#exp').text(language.uz.experience);
            $('#tech').text(language.uz.techTitle);
            $('#pros').text(language.uz.prosTitle);
            $('#quality').text(language.uz.a);
            $('#time').text(language.uz.b);
            $('#price').text(language.uz.c);
            $('#communication').text(language.uz.d);
            $('#responsive').text(language.uz.e);
            $('#well-construction').text(language.uz.f);
            $('#projects').text(language.uz.projectsTitle);
            $('#hello').text(language.uz.hello);
            $('#world').text(language.uz.g);
            $('#visitors').text(language.uz.h);
            $('#users').text(language.uz.i);
            $('#everybody').text(language.uz.j);
            $('#k').text(language.uz.k);
            $('#l').text(language.uz.l);
            $('#m').text(language.uz.m);
            $('#n').text(language.uz.n);
            $('#o').text(language.uz.o);
            $('#p').text(language.uz.p);
            $('#q').text(language.uz.q);
            $('#r').text(language.uz.r);
            $('#s').text(language.uz.s);
            $('#t').text(language.uz.t);
            $('#u').text(language.uz.u);
            $('#v').text(language.uz.v);
            $('#abtMyself').text(language.uz.abtMyself);
            $('#w').text(language.uz.w);
            $('#x').text(language.uz.x);
            $('#y').text(language.uz.y);
            $('#z').text(language.uz.z);
            $('#aa').text(language.uz.aa);
            $('#ab').text(language.uz.ab);
            $('#ac').text(language.uz.ac);
            $('#ad').text(language.uz.ad);
            $('#ae').text(language.uz.ae);
            $('#af').text(language.uz.af);
            $('#ag').text(language.uz.ag);
            $('#ah').text(language.uz.ah);
            $('#contactMe').text(language.uz.ai);
            $('#footerRow').html(language.uz.aj);

            $('.contents__container__list').css('padding-left','120px');
            animateTitles();

        }else if(hash === '#en'){
            $('#welcome').text(language.en.welcome);
            $('#exp').text(language.en.experience);
            $('#tech').text(language.en.techTitle);
            $('#pros').text(language.en.prosTitle);
            $('#quality').text(language.en.a);
            $('#time').text(language.en.b);
            $('#price').text(language.en.c);
            $('#communication').text(language.en.d);
            $('#responsive').text(language.en.e);
            $('#well-construction').text(language.en.f);
            $('#projects').text(language.en.projectsTitle);
            $('#hello').text(language.en.hello);
            $('#world').text(language.en.g);
            $('#visitors').text(language.en.h);
            $('#users').text(language.en.i);
            $('#everybody').text(language.en.j);
            $('#k').text(language.en.k);
            $('#l').text(language.en.l);
            $('#m').text(language.en.m);
            $('#n').text(language.en.n);
            $('#o').text(language.en.o);
            $('#p').text(language.en.p);
            $('#q').text(language.en.q);
            $('#r').text(language.en.r);
            $('#s').text(language.en.s);
            $('#t').text(language.en.t);
            $('#u').text(language.en.u);
            $('#v').text(language.en.v);
            $('#abtMyself').text(language.en.abtMyself);
            $('#w').text(language.en.w);
            $('#x').text(language.en.x);
            $('#y').text(language.en.y);
            $('#z').text(language.en.z);
            $('#aa').text(language.en.aa);
            $('#ab').text(language.en.ab);
            $('#ac').text(language.en.ac);
            $('#ad').text(language.en.ad);
            $('#ae').text(language.en.ae);
            $('#af').text(language.en.af);
            $('#ag').text(language.en.ag);
            $('#ah').text(language.en.ah);
            $('#contactMe').text(language.en.ai);
            $('#madeWith').text(language.en.aj);
            animateTitles();

        }else if(hash === '#ru'){
            $('#welcome').text(language.ru.welcome);
            $('#exp').text(language.ru.experience);
            $('#tech').text(language.ru.techTitle);
            $('#pros').text(language.ru.prosTitle);
            $('#quality').text(language.ru.a);
            $('#time').text(language.ru.b);
            $('#price').text(language.ru.c);
            $('#communication').text(language.ru.d);
            $('#responsive').text(language.ru.e);
            $('#well-construction').text(language.ru.f);
            $('#projects').text(language.ru.projectsTitle);
            $('#hello').text(language.ru.hello);
            $('#world').text(language.ru.g);
            $('#visitors').text(language.ru.h);
            $('#users').text(language.ru.i);
            $('#everybody').text(language.ru.j);
            $('#k').text(language.ru.k);
            $('#l').text(language.ru.l);
            $('#m').text(language.ru.m);
            $('#n').text(language.ru.n);
            $('#o').text(language.ru.o);
            $('#p').text(language.ru.p);
            $('#q').text(language.ru.q);
            $('#r').text(language.ru.r);
            $('#s').text(language.ru.s);
            $('#t').text(language.ru.t);
            $('#u').text(language.ru.u);
            $('#v').text(language.ru.v);
            $('#abtMyself').text(language.ru.abtMyself);
            $('#w').text(language.ru.w);
            $('#x').text(language.ru.x);
            $('#y').text(language.ru.y);
            $('#z').text(language.ru.z);
            $('#aa').text(language.ru.aa);
            $('#ab').text(language.ru.ab);
            $('#ac').text(language.ru.ac);
            $('#ad').text(language.ru.ad);
            $('#ae').text(language.ru.ae);
            $('#af').text(language.ru.af);
            $('#ag').text(language.ru.ag);
            $('#ah').text(language.ru.ah);
            $('#contactMe').text(language.ru.ai);
            $('#madeWith').text(language.ru.aj);
            $('.contents__container__list').css('padding-left','135px');
            $('#welcome').css('font-size', '4vw');
            animateTitles()
        }
    }

    for (i=0; i<= dataReload.length; i++){
        dataReload[i].onclick = function () {
            location.reload(true);
        };
    }



});