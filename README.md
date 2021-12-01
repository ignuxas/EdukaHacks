# EdukaHacks
It's a simple `.js` script that exploits `klase.eduka.lt` api
and gives you the access to all the answers your questions.

## How it works?
`klase.eduka.lt` made a huge mistake by not protecting their 
api and basically giving access to anyone who want's to use it.
So just by getting eduka assignment id and using edukas api
we easily getting all the answers. 

## How to use?
- Open developer console window in yout eduka session tap.
- Paste the script and execute it by pressing `[ENTER]`.
- Then search for your question name in that `.xml` page, scroll a little bit lower and you will see all of your answers to your question.

## Video Tutoarial
[![N|Solid](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.alchemysoftware.com%2Fimages%2Fyoutube_play_small.png&f=1&nofb=1)](https://youtu.be/ge3s9L1Dj8M)

## Quick script preview
```js
window.open("https://klase.eduka.lt/api/student/quiz-templates/result-xml/"+(window.location.pathname).slice(30, 38)+"/perziura")
```
