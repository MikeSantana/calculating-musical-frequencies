# calculating-musical-frequencies
## Calculando frequência de notas musicais pt-br

 - Este foi uns dos exercícios proposto em uma candidatura de estágio para a empresa ci&t em 09/2021.
 - Faço questão de deixar o código exatamente como foi entregue, para que futuramente eu venha visita-lo e comparar o nível de evolução :).
 - 
##

A música é feita de sons, que são ondas sonoras que vibram em uma frequência. As notas musicais principais são dó, ré, mi, fá sol, lá, si, representadas por (C, D, E, F, G, A, B) nesta ordem.

A escala musical com estas sete notas principais e é subdividida em 12 notas com a distância entre duas notas consecutivas igual a 1/2 tom ou 1 semitom, pois entre Mi e Fá e Sí e Dó, não há sustenido/bemol (#, b). Desta forma a escala de semitons pode ser representada das seguintes formas:

Crescente
[C, C#, D, D#, E, F, F#, G, G#, A, A#, B]

Decrescente
[C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B]



<img src="https://cdn.discordapp.com/attachments/892183894365966346/892183926561447996/69f97f40ce61203999d06f573bcfbb61-image.png">

O lá (A) central tem a frequência de 440 Hz (ou 440 ciclos por segundo).

Para avançar meio tom (para A#) a partir do A (440) é preciso fazer a operação 440*****2^(1/12). Para ir para o B (ou seja, avançar dois meios-tons), é preciso, a partir do A (440), fazer 440*****2^(2/12).

Monte uma função que retorne qual a frequência de qualquer nota sendo que valores positivos estão acima do A (440) e valores negativos estão abaixo do A (440), e diga qual o nome da nota (considerando a escala de tons e semitons acima, crescente ou decrescente de acordo com sua referência ao A (440)).

O formato da resposta deve ser um array de strings de duas posições, com a primeira sendo a frequência com 4 casas decimais sempre que o valor não for inteiro e a segunda qual nota esta frequência representa, exemplo: `['440', 'A']` ou `["466.1638", "A#"]`



