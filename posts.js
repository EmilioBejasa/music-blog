// Add a new post by copying the template below and pasting it into the
// POSTS array. Newest posts can go anywhere — they're sorted by date
// automatically. Date format: "YYYY-MM-DD".
//
// Each item in `body` is a raw HTML block, rendered in order. Common blocks:
//   `<p>A paragraph.</p>`
//   `<h3>A TIER OR SECTION HEADER</h3>`
//   `<h4>10. Song Title by Artist</h4>`
//   `<img src="assets/posts/<post-folder>/img1.png" alt="Description">`
//   `<ul><li><strong>Title</strong> — description.</li></ul>`
//
// {
//   title: "Song or Album Title",
//   date: "2026-08-13",
//   tags: ["pop", "review"],
//   body: [
//     `<p>First paragraph of your thoughts.</p>`,
//     `<p>Second paragraph, if you want one.</p>`
//   ]
// },

const POSTS = [
  {
    title: "Welcome to Hit Takes",
    date: "2026-08-13",
    tags: ["intro"],
    body: [
      `<p>This is where the takes on 2020s hit music live. Reviews, rankings, hot takes, whatever comes to mind after a song won't leave your head.</p>`,
      `<p>Open posts.js and add a new entry to the POSTS array to publish your next post.</p>`
    ]
  },
  {
    title: "Billboard Fall 2023 Top 20 Ranking",
    date: "2023-11-01",
    tags: ["ranking", "2023"],
    body: [
      `<p>Will reiterate this ranking involves the 10/7 chart, skipping songs I've talked about in the past (which only Erin has seen), let me know if you want those released as well, starting with last year's worst (possibly edited because I forgot like 2 songs AT LEAST on it) and best list. I will have all the songs linked next to their placement.</p>`,

      `<h3>Terrible Tier</h3>`,
      `<p>So I want to establish immediately that modern Drake is a goddamn travesty.</p>`,
      `<h4>20. <a href="https://www.youtube.com/watch?v=2_gLD1jarfU" target="_blank" rel="noopener">Slime You Out</a> by Drake ft. SZA</h4>`,
      `<p>I wish I could be angry about how from the time he released Honestly, Nevermind until now it's just slog after slog with this dude, he hasn't even gotten a single song I'm INTERESTED in, let alone like (at least Certified Lesbian Boy had Knife Talk which is just a Savage Mode II cut left out in someone's backyard). This song has one of the WORST lines I've ever heard: "Whipped and chained you like American slaves" and it's drawn out to REALLY emphasize the metaphor. And of course he had to drag SZA because of course he does, riding off the coattails of her own talent to make the song guarantee the #1 spot. JESUS CHRIST man take a BREAK.</p>`,
      `<p><a href="https://www.bbc.com/news/world-us-canada-67035523" target="_blank" rel="noopener">Rapper Drake taking break from music to focus on health</a></p>`,
      `<p>Oh. I mean I've made this joke for the last 3 album cycles but um... yeah I guess it's actually happening and I kinda feel bad. I guess this list season will be my last Drake rant for a while. And for a while I mean about two years because THAT'S apparently a break for him (for context the aforementioned CLB was released two years ago, and in that time he has dropped a house EP, a 21 Savage collab album, and another full-length album).</p>`,
      `<p>When I originally wrote this ranking, this was at the top of the mid tier, then I looked into the lyrics and I AM FURIOUS. This is easily the hottest take on the list.</p>`,

      `<h4>19. <a href="https://www.youtube.com/watch?v=phtcAd8j6Ro" target="_blank" rel="noopener">What It Is (Block Boy)</a> by Doechii ft. Kodak Black</h4>`,
      `<p>So a no-name RnB artist got a remix with Kodak to boost popularity, wait THIS is the original song. WHAT. It's about how "good girls need thugs" you say? YOU COULD NOT HAVE CHOSEN A WORSE FUCKING PERSON.</p>`,
      `<p>I'm convinced the music industry is just making so much money off of the resurgence of Kodak Black after the success of Super Gremlin and they have to keep milking money out of it. Need I remind y'all that this motherfucker is a RAPIST, and became popular AFTER the incident because he referenced it in an EXTREMELY racebait song called Tunnel Vision and its video in 2017.</p>`,
      `<img src="assets/posts/billboard-fall-2023/img1.png" alt="Headline: Kodak Black Takes On the KKK in Fiery 'Tunnel Vision' Video">`,
      `<p>Since then, he has hits with Travis Scott, Offset, and fucking Bruno Mars, and his biggest hit came last year with Super Gremlin, which was song I used to hate. His verse here is just plain bad tho, breaking down why he likes her with "she has a fat ass" and... that's it. BUT WHAT REALLY PISSED ME OFF are these two lines:</p>`,
      `<blockquote>"He know who to come to every time the world handling him bad"<br>"Being black in America is the hardest thing to be"</blockquote>`,
      `<p>Now, out of context, this would just be out of place. BUT CONSIDERING THIS IS KODAK BLACK, who has done the same bullshit in the past, I will not overlook this as victimizing himself for his own problem, including rape and other legal troubles after getting released, and oh yeah he only got out because the said racebaiter got released from jail since TRUMP PARDONED HIM (considering the video for Tunnel Vision I'm not surprised at all). Christ these two lines SINGLEHANDEDLY made a pretty good song fucking horrible, since the woman now is praising this guy being a thug who comes to her for everything. I just fucking cannot with this guy anymore.</p>`,
      `<p>All in all, Kodak Black is the 2020s Chris Brown, I FUCKING SAID IT.</p>`,

      `<h3>Bad Tier</h3>`,
      `<p>So Doja Cat has "returned" to music, and is clogging the charts with her boring song to date.</p>`,
      `<h4>18. <a href="https://www.youtube.com/watch?v=m4_9TFeMfJE" target="_blank" rel="noopener">Paint the Town Red</a> by Doja Cat</h4>`,
      `<p>Wow another #1 hit I could not give less of a shit about. #1 hits used to mean so much back in the day when pop music was titanic; nowadays, who the hell listens to this anymore. It all started with the Butter by BTS incident where people were attacking others on Twitter over how BTS were artificially boosting their chart position through streams like THAT was the first major sign of it (when it really should've started with FEFE by 69 and Nicki Minaj, the song that almost went to #1 off of 69 getting out of jail after the PEDO ALLEGATIONS and the Barbz doing the same sales tactic bullshit that BTS fans did). The #1 hit has really died off after that, and music itself is consumed by the TikTokification of itself.</p>`,
      `<p><em>Editor's note: THANK GOD that, as I was writing this, Cruel Summer ACTUALLY hit #1, but even this kinda proves my point.</em></p>`,
      `<p>I kinda went on about this because holy shit there's nothing else to say about the song, other than it's lacking in personality (which is Doja Cat's fucking BRAND at this point), the Walk On By sample is annoying in the background, and the chorus is just wack.</p>`,
      `<p>Time for the most controversial artist working. And also its biggest.</p>`,

      `<h4>17. <a href="https://www.youtube.com/watch?v=5DCdL1zdpdM" target="_blank" rel="noopener">Thinkin Bout Me</a> by Morgan Wallen</h4>`,
      `<p>Morgan Wallen. Where do I even fucking begin.</p>`,
      `<p>So in 2020, a little known country artist named Morgan Wallen started getting huge recognition and put out some solid hits despite his extremely twangy and goofy voice. He's really the pioneer of the big country star getting popular through TikTok, and being unique to his contemporaries by even using trap elements in country while also making story-driven songs as well. He might've had a small incident where he partied without a mask during COVID, which only delayed his SNL appearance for 3 months and was able to <a href="https://www.youtube.com/watch?v=40fjM6ux2Ko" target="_blank" rel="noopener">make a skit about it</a>, where he screams: "TO NO CONSEQUENCES."</p>`,
      `<p>Then he said the N word in an early 2021 drunken rage and everything changed for him.</p>`,
      `<p>He had his contract suspended, the whole internet was outraged, and the radio banned his hits from his new album Dangerous from making it on airplay. Well it's too bad, it's not like it'll be the biggest album of the year, right?</p>`,
      `<img src="assets/posts/billboard-fall-2023/img2.png" alt="Chart showing Dangerous: The Double Album by Morgan Wallen at #1">`,
      `<p>Um... so his album was so huge on streams that he literally needed no radio play for this to happen. What's even crazier was when the ban ended, the radio pushed his hits for this album, while he rolled out the single for the album that released this year, and this happened:</p>`,
      `<img src="assets/posts/billboard-fall-2023/img3.png" alt="Year-end albums chart showing Dangerous: The Double Album by Morgan Wallen at #3">`,
      `<p>The country airplay ban and the fact he stayed out of the public limelight until early 2022 made his whole career successful. When I said the incident changed him, I meant he became EVEN BIGGER despite the incident. His new album set a new record of having all THIRTY SIX songs on it chart at once, which is where the newly dubbed "Drake of country" comparison comes in. This leads us to this song, the third hit off the album (which might see a 2024 radio push).</p>`,
      `<p>So his new album, One Thing At A Time, is a HUGE downgrade from Dangerous, at least from what I can tell from the singles. Thinkin Bout Me isn't even his WORST single, but again topic for another time coming very soon. The song has this UGLY atmosphere and set of lyrics where he talks about his ex possibly thinking about him when they broke up and how she "can't stop", which is just the most copious shit ever. He sounds fucking crazy in this song, this song isn't produced well, the only thing I remotely like about this is the hi-hat before the first chorus and that's it. Bad song all around.</p>`,

      `<h4>16. <a href="https://www.youtube.com/watch?v=fmdLsdmYzTo" target="_blank" rel="noopener">I KNOW?</a> by Travis Scott</h4>`,
      `<p>After that, we have a song where it's very simple why it's so bad. UTOPIA as a whole is soooooo bad, Travis lacks energy. This song in particular is a fucking lullaby, it's like he's mumbling throughout. But yet again, not the worst song on the album and I'll talk about what that is soon.</p>`,

      `<h3>Mid Tier</h3>`,
      `<h4>15. <a href="https://www.youtube.com/watch?v=sqSA-SY5Hro" target="_blank" rel="noopener">Rich Men North Of Richmond</a> by Oliver Anthony Music</h4>`,
      `<p>Wait... WHO.</p>`,
      `<p>So this Oliver Anthony guy blew up out of literally nowhere with a country complaining about the rich and how hard it is to be a working class citizen. People accused this guy of being a heavy right-wing guy and he came out as a centrist, just shouting out the top 1% for taxing us and making us work all day for bullshit pay. But what REALLY doesn't make sense at all about the intent of the song is the obese milking welfare. WHY THE FUCK would he take potshots at the rich AND the people taking welfare, it makes NO SENSE.</p>`,
      `<p>I don't want to rank this in any higher tier or lower tier because I get the intention, it just wasn't conveyed well.</p>`,
      `<p>And now more country, with a guy that really, REALLY wants to replace Morgan Wallen.</p>`,

      `<h4>14. <a href="https://www.youtube.com/watch?v=UYCWaK6Sbik" target="_blank" rel="noopener">Religiously</a> by Bailey Zimmerman</h4>`,
      `<p>Like it's to the point where this guy also blew up on TikTok and has an unconventional voice for the mainstream. Anyways, for this song, there is literally ZERO reason to name the song what it is, it's just about not having the one woman that he cared about so much, and has almost no religious similes or anything to justify calling it this. He makes "religiously" barely sound like a word. Paired with bog-standard country guitars and the strain on his voice in the chorus, another country hit I do not care for.</p>`,
      `<p>You want to know the worst vocalist working in pop? Well...</p>`,

      `<h4>13. <a href="https://www.youtube.com/watch?v=1K_--gz5jhY" target="_blank" rel="noopener">Greedy</a> by Tate McRae</h4>`,
      `<p>Yeah I simply don't like her voice, she drags down every song she's been on, which sucks because the production of most of her songs are really good. She just sounds really bad on the chorus, which plays 3.5 times in 2 minutes so it gets really irritating.</p>`,

      `<h4>12. <a href="https://www.youtube.com/watch?v=0c66ksfigtU" target="_blank" rel="noopener">Agora Hills</a> by Doja Cat</h4>`,
      `<p>The chorus of this one is pretty good, trying to show off her partner to the world, even the title is a play on words of Agoura Hills and agoraphilia, the love of doing it in public places, which does fit in with the themes of the song. However the appeal of the chorus is cancelled out by her awful Valley girl which just detracts from the rest of an otherwise good song. Maybe this grows on me? Nah that capping skit is a minus.</p>`,

      `<h3>Decent Tier</h3>`,
      `<p>Alright thank god we have an ok country song, I swear I'm growing on this genre more now.</p>`,
      `<h4>11. <a href="https://www.youtube.com/watch?v=_3jv0_wGK1M" target="_blank" rel="noopener">Watermelon Moonshine</a> by Lainey Wilson</h4>`,
      `<p>Lainey Wilson is one of the best country vocalists working and she got popular this year by... wait you can't be serious.</p>`,
      `<p><a href="https://rare.us/rare-media/entertainment-and-culture/lainey-wilsons-butt-is-going-insanely-viral-on-tiktok-im-happy-youre-here/" target="_blank" rel="noopener">Lainey Wilson's Butt Is Going Insanely Viral on TikTok</a></p>`,
      `<p>WAIT IT GETS EVEN BETTER:</p>`,
      `<img src="assets/posts/billboard-fall-2023/img4.png" alt="Chart showing Wait In The Truck by HARDY ft. Lainey Wilson at #38 and Heart Like A Truck by Lainey Wilson at #39">`,
      `<p>SHE HAD TWO HITS NAMED TRUCK EARLIER THIS YEAR.</p>`,
      `<p>Anyways this song is just about young love and how fleeting it can really be, just a standard and simple country song, nothing to really say about it.</p>`,

      `<h4>10. <a href="https://www.youtube.com/watch?v=IZ3XMOdOdKM" target="_blank" rel="noopener">Used to Be Young</a> by Miley Cyrus</h4>`,
      `<p>I won't talk about Miley here, since there is a song earlier in the year that conveys my opinions on her way better, and also that this song seems to be tapping into those same emotions, but just more reflective than that other song. River SLAPS tho.</p>`,
      `<p>Oh wow I've spent the whole year not talking about Barbie despite that soundtrack blowing up? Huh.</p>`,

      `<h4>9. <a href="https://www.youtube.com/watch?v=CUj2AWEJnwQ" target="_blank" rel="noopener">Barbie World</a> by Ice Spice, Nicki Minaj, and Aqua</h4>`,
      `<p>(the Barbie Girl band — Mattel had sued them in the past and somehow allowed the aforementioned artists to use the sample.) With the fanbase named the Barbz, of course Minaj was the most OBVIOUS choice for a song on the soundtrack. Also more Jersey Club on the chart, with that chopped sample and the pounding bass, which is the new sound of 2020s pop along with other hits I haven't talked about yet. But of course the best part of a Nicki and Ice collab is definitely Nicki, she does bring a better rap voice and more charisma. This works better than I thought, but there's a better version of this song that exists. I swear I do like Ice, but Nicki sort of blows her out of the water on multiple occasions.</p>`,

      `<h3>Good Tier</h3>`,
      `<p>So this is the part where it gets weird, the next two songs aren't really hits, but they just happened to hit the chart this week, both are album cuts. First is Rod Wave, who will become the next best thing, well hopefully.</p>`,
      `<h4>8. <a href="https://www.youtube.com/watch?v=nM6ayGKXFCw" target="_blank" rel="noopener">Great Gatsby</a> by Rod Wave</h4>`,
      `<p>He just sounds great, pretty good song about him throwing a party for someone he clearly wants back and the pain is just hard. Just him having this soulful voice easily made this good.</p>`,

      `<h4>7. Sarah's Place by Zach Bryan ft. Noah Kahan</h4>`,
      `<p>Finally, the next generation of country stars, and they are pretty damn good as well. This song is not either of these artist's best work, but I feel like this is pretty special. This came off of Zach Bryan's EP after he released his self-titled album and bombed the charts with it. This song is the most positive Zach Bryan is about an ex-lover reminiscing about their relationship, and seems very happy that Sarah is doing well with her new life. Oh yeah this Noah Kahan is pretty good, he should be the new Morgan Wallen with that slight twang in his voice, PLEASE.</p>`,

      `<h3>Excellent Tier</h3>`,
      `<p>All of you guys would be extremely sour that I didn't have the guts to put these songs at 1, 2, and 3. Terrible joke aside, here's Vampire.</p>`,
      `<h4>6. <a href="https://www.youtube.com/watch?v=RlPNh_PBZb4" target="_blank" rel="noopener">Vampire</a> by Olivia Rodrigo</h4>`,
      `<p>So she's finally back. Thank GOD, 2023 has been one of the most dead chart years ever, with TikTok bringing back songs that are literally a decade old and Taylor's re-recording of her old albums just hitting that nostalgia bone for everyone, and TikTok is just our version of thrift shopping where we dig up songs from years, even decades ago.</p>`,
      `<p>Oh right, I'm supposed to be talking about the song. So Vampire is one of Olivia's best vocal performances, period. The chorus has this bigness with that swell, which is something pop music could REALLY use right now. But, it gets tiring after listening to it so often, something I cannot say for...</p>`,

      `<h4>5. <a href="https://www.youtube.com/watch?v=Dj9qJsJTsjQ" target="_blank" rel="noopener">bad idea right?</a> by Olivia Rodrigo</h4>`,
      `<p>Wow this is just brutal with a new coat of paint, and I mean that with no negatives. Thank god she did not spend this album dealing with breaking up with the same guy. I mean, this song is just hooking back up with him but, whatever the lyrics are different enough. I'm not gonna go too into this too much but what I will say is this is not the best song on GUTS. This is:</p>`,

      `<h4>4. <a href="https://www.youtube.com/watch?v=ZsJ-BHohXRI" target="_blank" rel="noopener">get him back!</a> by Olivia Rodrigo</h4>`,
      `<p>America what the FUCK are you doing. This peaked at 11. WHY (for context my best lists include songs in the Billboard year-end charts or that peaked in the top 10 in any week in that calendar year, excluding December [unless Billboard wants to change how they track Christmas songs, since 5/6 of these will now make this year-end]).</p>`,
      `<p>Anyways, this song is a combination of the appeal of the last two songs but it's also extremely hilarious. Need I remind you guys that she started in sitcoms and songs like this and brutal show her acting chops are just as good as her singing. Also this song CRUSHES. The guitar just rules in this song, that bass slide in the second verse goes CRAZY, the lyrics are so on point, with the whole title being a double meaning of getting back at him like in a prank kind of way while also trying to win him over again. This and bad idea right hammering home that winning the guy over again is just a joke that she just plays so shyly.</p>`,
      `<p>Yeah no this is literally a combination of the last two songs.</p>`,
      `<p>Ok so, before I continue, I want to preface that the positively exceptional tier are for songs that go above and beyond the quality of an excellent tier song and it's EXTREMELY rare to even get one in a year. We got none last year, and 1, maybe 2 in 2021. This ranking has THREE. 2023 has been a dead chart year, but it's also, at the same time, chaotic; the quality of songs is so polarizing it's wild. I also won't talk about them at length right now, but will later. The order of this tier also doesn't matter right now, just know that these songs are just simply stunning.</p>`,

      `<h3>Exceptional+ Tier</h3>`,
      `<h4>3. <a href="https://www.youtube.com/watch?v=cW8VLC9nnTo" target="_blank" rel="noopener">What Was I Made For?</a> by Billie Eilish</h4>`,
      `<p>This is her best song. Period. Better than Everything I Wanted. Better than Happier Than Ever. This is just perfect.</p>`,
      `<p>Well, now I hear you thinking, wait why isn't a perfect song 1st? Well, I tend to find more enjoyment in the imperfect, the messy. Still really good, but there are aspects of the next two songs that can be technically worse than What Was I Made For, but I enjoy it more.</p>`,
      `<p>And I can't believe that coming out of the genre I least expected it from: country.</p>`,

      `<h4>2. <a href="https://www.youtube.com/watch?v=tGVRsIDNuKU" target="_blank" rel="noopener">Dial Drunk</a> by Noah Kahan ft. Post Malone</h4>`,
      `<p>This might be an overreaction to put this song this high, but for right now, this is my most played song recently. This is also Post Malone's best song since Circles, even though it's not even his.</p>`,

      `<h4>1. I Remember Everything by Zach Bryan ft. Kacey Musgraves</h4>`,
      `<p>So yeah. Zach Bryan is the best country artist working, and Kacey is hella underrated, this being her first major hit ever despite being in the industry a long ass time. That's all I'll say, but this is now the best country song ever, beating out Need You Now. I'm serious, it's THAT good.</p>`,

      `<p><strong>Season Score: 61/100</strong> — 2023 is the most CHAOTIC year of music I've seen.</p>`,

      `<h3>Song Recommendations</h3>`,
      `<ul>
        <li><strong>Doomsday</strong> by Juice WRLD and Cordae — Very fun song of Juice and Cordae trading bars over an Eminem beat.</li>
        <li><strong>Super Shy</strong> by NewJeans — The new biggest group from HYBE (because that label doesn't have their cash cow BTS printing money for them anymore) is pretty good, and their songs have been, on average, pretty good. This and Ditto.</li>
        <li><strong>Nakamura</strong> by Lil Uzi Vert — Remixing a WWE fighter's entrance song is a pretty neat and novel concept, it's a banger too.</li>
        <li><strong>Tally</strong> by midwxst and Denzel Curry — SPEAKING OF BANGERS, the blown out horns and stomping horns on top of the most entertaining flows of the year send it over the top.</li>
        <li><strong>Rush</strong> by Ayra Starr — Wow afrobeats is a pretty lush and warm genre, we need more stuff like this, oh wait one of the biggest hits of the year was one, huh.</li>
        <li><strong>Rush</strong> by Troye Sivan — Yes, the two songs named Rush I added to my playlist, not by coincidence. However, this extremely dancey beat makes this really fun.</li>
        <li><strong>MY AOTY — SCARING THE HOES</strong> by JPEGMAFIA and Danny Brown — A collection of the most disjointed, off-the-wall, and unintentionally funny bangers I've ever heard.</li>
        <li><strong>TOPIA TWINS</strong> by Travis Scott, Rob49, and 21 Savage — The only song on UTOPIA worth a damn, also has the funniest moment of pop music this year being Travis' first ad lib in his verse, that single-handedly made me burst out laughing for 5 minutes straight the first time I heard it.</li>
        <li><strong>JEALOUSY</strong> by Cardi B and Offset — This is just Clout again, so it's really good.</li>
        <li><strong>Desire</strong> by Calvin Harris and Sam Smith — An unlikely duo making one of the best trance hits of the year.</li>
        <li><strong>IDOL</strong> by Yoasobi — The theme song to probably the best anime (or so I hear) of the year, Oshi no Ko, where the show and the song detail the struggles of idol life. But even through the language barrier, this is another massive banger, so like the few Yoasobi songs I've heard.</li>
        <li><strong>Sprinter</strong> by Dave and Central Cee — This is currently the biggest rap hit worldwide, and it hasn't even CHARTED here. Oh yeah Cee hard carries this since Dave has his collection of cringe lines, overall pretty good with a ukelele beat.</li>
        <li><strong>River</strong> by Miley Cyrus — I should've included this in Spring, but I started listening to this now. What I DID NOT expect was a 2023 Madonna song made by Miley Cyrus. She needs to do more rock songs, she already made the modern version of Edge of Seventeen in Midnight Sky.</li>
        <li><strong>Bongos</strong> by Cardi B and Megan Thee Stallion — WAP 2, nothing more, nothing less.</li>
        <li><strong>Watch This (ARIZONATEARS remix)</strong> by Lil Uzi Vert — This is probably the most hit or miss recommendation on the list, but if you wanted a high-tempo banger with an alarm in your ear, be my guest.</li>
      </ul>`,

      `<p>So yeah, that was A LOT, but if y'all liked this, I have two other top 20 rankings I can re-write (which would reflect more of the top hits of that season and the year overall) and I have worst/best lists from now until 2009. Tell me if I should write another one of these long-ass emails for that too!</p>`
    ]
  }
];
