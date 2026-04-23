function makePath() {
  let overpos = "";

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote =
    "Tu abres teus olhos, vendo pilhas de livros espalhados pelo chão e estantes subindo até o teto. A poeira no ar causa-te um leve descomforto.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tú estás na Biblioteca. Ao teu redor há quatro pessoas.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Harriet";
  quote = "Ai, eu já falei! Nós estamos em algum tipo de romance!";
  sprite1 = Harriethappy1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "Romance? Esse lugar é muito assustador para ser um romance...";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Amber";
  quote = "Gente, calma, eu tenho certeza que vamos encontrar algo fixe aqui!";
  sprite1 = Amberhappy1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Watson";
  quote = "Hm.";
  sprite1 = Watsonneutral2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote =
    "De repente, o som de algo pesado caindo vem do final de um corredor escuro.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Watson";
  quote = "Alguém deveria ver o que isso foi.";
  sprite1 = Watsonneutral1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Watson";
  quote = "Mas seria demasiado perigoso ires sozinho.";
  sprite1 = Watsonneutral1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Watson";
  quote = false;
  sprite1 = Watsonneutral2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

  sbount = 2;
  sbt1 = "Eu vou com o George";
  sbt2 = "Eu vou com a Amber";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e George caminham pelo corredor escuro.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "Por que que tu escolheu-me...";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

  sbount = 2;
  sbt1 = "Tu pareces útil";
  sbt2 = "Tu pareces forte";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "Util... Mesmo...?";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "link";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "E-Eu? Não, deves estar enganado...";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "O som de algo a ranger vem do fim dum corredor.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "O que foi isso??";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "O corredor é escuro, e não é possivel ver o fim.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

  sbount = 2;
  sbt1 = "Vamos voltar";
  sbt2 = "Vamos ver";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Ao se virar na direção de onde vieram, tu encontras...";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Uma parede.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "George";
  quote = "O que!? De onde veio essa parede!?";
  sprite1 = Georgesad1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "George tenta empurrar a parede. Nada acontece.";
  sprite1 = Georgeangry2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "O corredor é iluminado apenas pela luz entrando de uma janela.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

  sbount = 2;
  sbt1 = "Olhar para fora da janela";
  sbt2 = "Procurar outro caminho";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Olhando pela janela, tu ves um abismo.";
  sprite1 = false;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Névoa ofusca a queda, escondendo o fundo e verdadeira grandeza.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

  sbount = 2;
  sbt1 = "Tentar sair";
  sbt2 = "Voltar";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu tentas sair pela janela, se segurando na moldura.";
  sprite1 = false;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "A moldura se revela lisa e escorregadia, causando a tua mão a escapar.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Sem suporte, tu cais.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "end";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "A cada passo, o ambiente torna-se mais escuro.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Escutas um rosnar a vir do corredor.";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);
  
  /* ------------------------------ */

  speaker = "George";
  quote = "O-Ok, basta pra mim!";
  sprite1 = Georgesad2;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);
  
  /* ------------------------------ */

  speaker = "Nate";
  quote = "George corre na direção oposta.";
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);
  
  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = false;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "button";

    sbount = 2;
  sbt1 = "Investigar";
  sbt2 = "Procurar George";
  sbt3 = false;
  sbt4 = false;

  slide = new Slide(
    speaker,
    quote,
    sprite1,
    sprite2,
    ord,
    pos,
    smode,
    sbount,
    sbt1,
    sbt2,
    sbt3,
    sbt4
  );
  slides.push(slide);
  
  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e Amber caminham pelo corredor escuro.";
  sprite1 = Georgehappy2;
  sprite2 = false;

  ord = "b";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e Amber caminham pelo corredor escuro.";
  sprite1 = Georgehappy2;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e Amber caminham pelo corredor escuro.";
  sprite1 = Georgehappy2;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e Amber caminham pelo corredor escuro.";
  sprite1 = Georgehappy2;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "Tu e Amber caminham pelo corredor escuro.";
  sprite1 = Amberhappy2;
  sprite2 = false;

  ord = "c";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = "De repente, um rato corre na tua direção.";
  sprite1 = Amberneutral1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "forward";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------ */

  speaker = "Nate";
  quote = false;
  sprite1 = Amberneutral1;
  sprite2 = false;

  ord = "a";
  pos = 0;

  smode = "bar";

  slide = new Slide(speaker, quote, sprite1, sprite2, ord, pos, smode);
  slides.push(slide);

  /* ------------------------------
  
  Ordernar
  
  ------------------------------ */

  for (i = 0; i < slides.length; i++) {
    if (slides[i].ord == "c") {
      for (j = 0; i < slides.length; j++) {
        if (overpos.charAt(overpos.length - 1) != "b") {
          overpos = overpos.slice(0, -1);
        } else {
          overpos = overpos.slice(0, -1);
          overpos += slides[i].ord;
          slides[i].pos = overpos;
          break;
        }
      }
    } else if (slides[i].ord == "d") {
      for (j = 0; i < slides.length; j++) {
        if (overpos.charAt(overpos.length - 1) != "c") {
          overpos = overpos.slice(0, -1);
        } else {
          overpos = overpos.slice(0, -1);
          overpos += slides[i].ord;
          slides[i].pos = overpos;
          break;
        }
      }
    } else if (slides[i].ord == "e") {
      for (j = 0; i < slides.length; j++) {
        if (overpos.charAt(overpos.length - 1) != "d") {
          overpos = overpos.slice(0, -1);
        } else {
          overpos = overpos.slice(0, -1);
          overpos += slides[i].ord;
          slides[i].pos = overpos;
          break;
        }
      }
    } else if (slides[i].ord == "b") {
      overpos += slides[i].ord;
      slides[i].pos = overpos;
    } else if (slides[i].ord == "a") {
      overpos += slides[i].ord;
      slides[i].pos = overpos;
    }
    console.log(overpos);
  }
}
