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
  },
  {
    title: "The Best and Worst Hit Songs of 2022 (and some non-hits), and updates about the 2023 YE Lists",
    date: "2023-12-08",
    tags: ["ranking", "2022", "best/worst"],
    body: [
      `<p>That's right, I am COMBINING both of last year's lists into one, mostly because I have nothing to change from the best list. Without further ado...</p>`,

      `<h3>Worst List — 2022</h3>`,
      `<p>This is the worst list for the 2022 year end Billboard chart, where all songs on it qualify, and any song that hit the top 10 in 2022 first counts as well (for example if a song already hit the top 10 in 2021, it wouldn't count for this list). There might be some exceptions if my opinion evolved from 2021 to 2022. That should be all, now let's start counting down...</p>`,

      `<p>One of the new sounds of the 2020s, as few as those new sounds are, is Afrobeats. Of course, America has a tendency to not immediately catch on to this (as this country is to ANYTHING), but overall every Afrobeats hit that's crossed over to America has been mostly okay to very good.</p>`,
      `<p>Except one.</p>`,
      `<h4>10. love nwantiti by Ckay</h4>`,
      `<p>Well, that's not accurate, it's mainly one element of this song. It sounds pretty good, as all Afrobeats songs are, with their lush and summery soundscape, and I definitely will talk about good hits in my 2023 lists (which I have some insane updates about those lists).</p>`,
      `<p>Alright, I need to stop beating around the bush. This chorus is AWFUL, HORRENDOUS even. Goddamn, why I would want to hear someone moan in my ear for 30 seconds and PRETEND that's an actual musical idea. I kinda don't have much to say about this; the chorus is definitely the worst of the year, or so you think.</p>`,
      `<p>The sad part is that's only one of the brain-destroying choruses that we have to cover, there will be much, MUCH worse.</p>`,

      `<p>The theme for this worst list is this: America has officially run out of ideas.</p>`,
      `<p>For years, I have seen so much remakes of Disney's beloved animated films get completely remade into these live-action money printers, which completely miss the point of why people loved the original in the first place. This rehashing of old material and remaking has leaked into this year of pop music, moreso than any year of pop music of recent.</p>`,
      `<p>What happens if a sequel to a movie no one wanted included a song on its soundtrack that is from someone who is clearly past their prime and is just getting a free paycheck? A disaster.</p>`,
      `<h4>9. Hold My Hand by Lady Gaga</h4>`,
      `<p>What is she doing on here. Why is she making a rock ballad for the TOP GUN SEQUEL about being a military wi-</p>`,
      `<p>**ring-ring** Hello? Wait say that again? This isn't the right song from that soundtrack? OH, right. The Lady Gaga song isn't even close to the year end. And this is also clearly worse.</p>`,
      `<h4>9. I Ain't Worried by OneRepublic</h4>`,
      `<p>Ryan Tedder is only good for writing songs now. The industry rewarded him with the main theme song for Top Gun: Maverick, and made a song several stratospheres worse than Danger Zone. This is like a McDonalds Playpen more than a Danger Zone.</p>`,
      `<p>So what's wrong with it... Oh yeah it's just Sucker, which was just Feel It Still. It's also the worst out of all these generic white-people-band songs with the whistling (I still have no idea how this is an actual genre in the mainstream now). The lyrics are impressively brain-rotting with, you guessed it, a completely DOGSHIT chorus. This chorus somehow makes me feel absolutely NOTHING and ANNOY me to no end. Tedder just cannot hit high notes, he sounds like he got castrated in the recording studio. All appeal for this band is bleached out of existence if they keep making schlock like this.</p>`,

      `<p>The other problem with popular music right now, and the other reason the industry is sampling every old song right now, is TikTok. Once thought as the birthplace for random artists out of nowhere getting hits, is now just another form of promotion by big artists to boost their own sales, as every song seems designed for TikTok. And what was the catalyst for this?</p>`,
      `<h4>8. abcdefu by GAYLE</h4>`,
      `<p>My original rankings had this way lower on the list, but my hate for the actual song has only lessened over the 1.5 years since the phenomenon's release.</p>`,
      `<p>Oh right I gotta explain how Atlantic abused GAYLE's indie girl brownie points to abuse TikTok, to where this is the easy target, the Astronaut in the Ocean of 2022 (AITO is actually good don't @ me).</p>`,
      `<p>So, "someone" suggested the idea of making a breakup song using the alphabet and a day later, she somehow made up the song, and that post blew up. Little did we know at the time that that someone was an Atlantic executive and the song was always coming out, the record label faked the whole story that GAYLE just came up with abcdefu out of the blue.</p>`,
      `<p>Honestly, that makes it worse. How did Atlantic get that nursery-rhyme, blackbear-core, SOUR-core of a song come out as the finished product. This is an EMBARRASSMENT to punk rock, as this pretty much killed the movement that fucking MGK and, ironically, blackbear revived. First of all, another completely ASS chorus, but the verses are so petty and childish. I mean I expect this out of a teenage breakup song, but then why is she complaining about the ex's means of living as a negative and not about anything the guy specifically. And then the "becoming the bitch" line is just cringe. This entire song is cringe, and it is not even GAYLE's fault, she seems like a nice person, even touring with Taylor Swift. But this is the industry-driven shitstain of a TikTok hit as it has ever been.</p>`,

      `<p>And we are back to the sampling, to probably the worst sample of the year.</p>`,
      `<h4>7. I'm Good (Blue) by David Guetta and Bebe Rexha</h4>`,
      `<p>Jesus Christ, this is the hit with the least amount of dignity. It's an ass dance track with awful audio mixing on Bebe's parts, she sounds dead with this upbeat song.</p>`,
      `<p>Also, let's give the original Blue (Da Ba Dee) credit, it has one of the stickiest hooks of all time. And David Guetta creates one of the worst beats and drops this year. My god. Everything is just bad, there is nothing redeeming about this.</p>`,
      `<p>Surely David Guetta doesn't do this formula again in 2023 right?</p>`,

      `<p>Elton John really said this wave of recent music isn't real. Then he dropped this.</p>`,
      `<h4>6. Hold Me Closer by Elton John and Britney Spears</h4>`,
      `<p>Let me get this out of the way, this song was made to help process Spears' stress about her whole conservatorship BS, and that is really sweet. I think that's a great way to help someone going through something life-altering.</p>`,
      `<p>It does not make the song better. He just took the lyrics of three of his songs AGAIN and remade it to Cold Heart 2.0. And I already despised 1.0, way too generous with it last year. This chorus has the worst vocal laceration I've ever heard, it sounds like they both were strangled and gasping for air. The verses don't sound any better, and with boring-ass instrumentation on top of it, this is the definition of music that isn't real.</p>`,

      `<p>Unholy did not make the list. It was on my previous iteration of it, but over time I grew a little fond of the goofy, silly, coy vibe it had (at least on Smith's part, Petras still sounds dogshit). I used to call this song washing-machine-core (even though that's usually saved for drill not songs that literally sound like washing machines), but there was a MUCH worse example.</p>`,
      `<h4>5. Get Into It (Yuh) by Doja Cat</h4>`,
      `<p>Easily her worst single, she sounds the worst she's ever sounded, with the worst production that... uh... producer has made. It sounds like if metal was thrown in it, and Doja sounds like what the machine would sound like if it was damaged by that metal. My god.</p>`,
      `<p>And the lyrics. It's actually the most inane shit I've ever seen. The first verse starts off with 4 lines starting with "you wanna", then another 4 lines with her saying "shawty", and ends with a reference to fucking SHAPE OF YOU. I can feel the brainrot creeping up on me. And the line about robbing a CHILD:</p>`,
      `<blockquote>"Call your mama and your papa like I'm finna take your daughter<br>Turn that b- into a soccer ball and rocka, rocka, rocka (brrr)"</blockquote>`,
      `<p>This is just a colossal failure on every front. This is the worst of the old Doja. Fuck America for making Attention flop by the way.</p>`,

      `<p>I'm Good had the worst sample, but this is the most EMBARRASSING one of the year.</p>`,
      `<h4>4. Big Energy by Latto</h4>`,
      `<p>Oh not this version. This version is still Dishonorable Mention-worthy but this inexplicably got a remix with the person THE SAMPLE IT'S BASED AROUND.</p>`,
      `<h4>4. Big Energy Remix by Latto ft. Mariah Carey</h4>`,
      `<p>So yeah the song based around "Fantasy" by Mariah Carey got her on the song. Oh wait. I forgot another feature. Like ANOTHER ONE.</p>`,
      `<h4>4. Big Energy Remix by Latto ft. Mariah Carey and DJ Khaled (for some reason)</h4>`,
      `<p>Yeah what even is this lineup. And yes this counts as the hit, I remember this remix boosting the original song to #3. This is a perfect example of why remix-gaming is goddamn annoying, a remix is meant to be a spin on a song that has a reason to be changed or add another artist to it, not JUST to boost streams.</p>`,
      `<p>But anyways the production and groove is stiff as shit. Latto can't save this song, just overall sounds bad. And WHY THE HELL is DJ Khaled here to brag about his watch. And he does absolutely nothing. I can't believe I forgot this remix existed on the original draft of the list. I am embarrassed. Everyone involved in this remix should be embarrassed.</p>`,

      `<p>Wow this entire list hasn't included a country hit. Country has been HUGE this decade; in 2023, it had its commercial peak (but that's a topic for another time). There has been a lot of fluctuation of quality within the genre, and the genre has finally warmed up to me somewhat.</p>`,
      `<p>But jesus christ, the second-least eligible hit of all time is also THE WORST COUNTRY SONG I'VE EVER HEARD.</p>`,
      `<h4>3. She Likes It by Russell Dickerson and Jake Scott</h4>`,
      `<p>No exaggeration, I think this is the worst country hit song of all time. Well, at least before this year. OH GOD I am scared to talk about those songs (not even joking I am terrified about talking about the baggage around... that song, thank god you guys have NO idea what song I am referencing... hopefully).</p>`,
      `<p>This song makes me extremely uncomfortable. There's this guitar that plays one godforsaken melody that peaks at the wrong places, and the two men sing with a different looping melody that skeeves me out. Every time I ATTEMPT to listen to this song I am VISIBLY uncomfortable from the aforementioned elements, along with a goddamn 808 for some reason; it's almost like trap elements in country were never meant to work. This is meant to be a song saying how you love your wife like Chance the Rapper, but all I can say about this song is "GET AWAY FROM THAT WOMAN YOU ARE HARASSING HER." It sounds like they never got the consent from the tone the song is in. It sounds like they are assuming that she likes everything they are doing and not listening, it is just so creepy.</p>`,
      `<p>Oh yeah and that second-least-qualifying hit of all time. This peaked at 63 and somehow made the year end. Another song on the same year end at 64 made it as well. This just doesn't make any sense. I'm done talking about this song, more brain cells contributed to this song are wasted.</p>`,

      `<p>This man needs to take a goddamn BREAK.</p>`,
      `<h4>2. Drake, just all of the Drake songs</h4>`,
      `<p>Alright, here's a short review about literally all the Drake songs, except one.</p>`,
      `<ul>
        <li><strong>Sticky</strong> — This isn't bad because of production but christ Drake is bad on here.</li>
        <li><strong>Falling Back</strong> — OH GOD this was my second-worst song of the year on release, didn't know it could get ANY lower than this.</li>
        <li><strong>Jimmy Cooks</strong> — The best Drake song of the year that spawned the most CRINGE album this year.</li>
        <li><strong>STAYING ALIVE</strong> — Drake is the LEAST bad part of this but he is still bad, Lil Baby had one of the worst two seconds of the year, he was done dirty with the mixing.</li>
        <li><strong>Rich Flex</strong> — Drake and 21 are fucking in the studio as we speak.</li>
        <li><strong>Major Distribution</strong> — Limpest piano.</li>
        <li><strong>On BS</strong> — "you hoes, I'm a feminist" is the Drake line ever, fuck this outro by the way.</li>
        <li><strong>Spin Bout U</strong> — This was OK I guess?</li>
        <li><strong>Pussy &amp; Millions</strong> — OH COME ON there's always one song that I like in every Drake album except for Honestly, Nevermind.</li>
        <li><strong>Privileged Rappers</strong> — THIS IS THE LEAST SELF-AWARE THING SINCE LOOK WHAT YOU MADE ME DO.</li>
        <li><strong>BackOutsideBoyz</strong> — Drake should not sing after this too, let alone make music.</li>
      </ul>`,
      `<p>The one I singled out is easily the worst one: Circo Loco. MY GOD what a dumpster fire. THIS is the worst sampling of the year, as it used One More Time by Daft Punk right after they broke up, and it just steals its chorus, just sung much worse by Drake of course. Then these lyrics:</p>`,
      `<blockquote>"This bitch lie 'bout gettin' shots, but she still a stallion<br>She don't even get the joke, but she still smilin'"</blockquote>`,
      `<p>YOU HAVE GOT TO BE FUCKING KIDDING. After 21 Savage interpolates the Savage flow on Rich Flex, you make a joke that Megan was LYING ABOUT GETTING SHOT IN THE FOOT. While he was getting convicted. Jesus. This is unironically the worst bar in a Drake song I have ever heard, and this is considering the goddamn American slaves line and an example I will cover in the next worst list. Yeah I'm so done with modern Drake, he just comes out with the same shit over and over again and the American people keep rewarding him.</p>`,

      `<h3>Dishonorable Mentions</h3>`,
      `<ul>
        <li><strong>Sweetest Pie</strong> by Dua Lipa and Megan Thee Stallion — Decent on first listen, but this song DOES NOT WORK, extreme disappointment, this should have been the most hyped collab of the year but it debuted at 15 and just stayed in the top 40 doing nothing. The ending is great though I will give it that.</li>
        <li><strong>Late Night Talking</strong> by Harry Styles — First of many shit hot takes incoming, I do NOT like this song, was the WORST hit coming off his album.</li>
        <li><strong>Super Freaky Girl</strong> by Nicki Minaj and <strong>First Class</strong> by Jack Harlow — Ah yes every bad sampling this year.</li>
        <li><strong>WOOMA</strong> by Doja Cat — Chorus is simply ass.</li>
        <li><strong>Bad Decisions</strong> by BTS, Snoop Dogg, and Benny Blanco (wtf is this combination of artists) — Most plastic production of the year, BTS' lyrics is creepy, Snoop does not fit.</li>
        <li><strong>Bejeweled</strong> by Taylor Swift — The ONLY bad song on Midnights.</li>
        <li><strong>Don't Think Jesus</strong> by Morgan Wallen — This song is actually really good except the entire song is about the controversy which makes it ass again, barely escaped the list.</li>
      </ul>`,

      `<p>I also made a top 5 non-hits that I heard this year in no order:</p>`,
      `<ul>
        <li><strong>Bones</strong> by Imagine Dragons — This song is only good as the theme for the Boys, but literally nothing else about it is listenable.</li>
        <li><strong>High</strong> by the Chainsmokers — Andrew Taggart sings like he has two tissues stuffed up his nose.</li>
        <li><strong>thought i was playing</strong> by Gunna and 21 Savage — "These boys a bunch of pussies, they no different than a tran'", this lyric alone justifies the placement.</li>
        <li><strong>True Love</strong> by Kanye West and XXXTentacion, and <strong>Eazy</strong> by Kanye West and The Game — Kanye in 2022. Need I say more.</li>
      </ul>`,

      `<h3>Worst List — Number 1</h3>`,
      `<p>The only reason this is at number 1 is that I made a mistake in my 2021 worst list by not covering it there. Artists are making the worst shit they have ever made because of the creative bankruptcy of the music industry, just rehashing the same shit they have done, or doing a trend that they don't fit. I feel like this song is the embodiment of that assessment, and it features two artists that should not be close to the worst list. However, this collaboration is the worst thing they have ever done, and might have singlehandedly killed their popstar status.</p>`,
      `<h4>1. One Right Now by Post Malone and the Weeknd</h4>`,
      `<p>I like both of these artists. I still heavily enjoy their material. But I swear after this song, they both have no megasmash hits (unless you want to count I Like You, but that's a Doja Cat song in my head). Yes, the Weeknd got blacklisted and Dawn FM flopped, but I am inclined to believe that those songs weren't popular because THIS GODDAMN SONG was plaguing pop radio.</p>`,
      `<p>First of all, this production. They managed to make diarrhea in audio form; the synth hits sound like my bowel moving. I was getting kinda sick of the synthpop we have been getting as of late, and this song made me appreciate those songs because again, AUDIO DIARRHEA.</p>`,
      `<p>These goddamn lyrics to compliment the ugly and deformed instrumental are also ugly and deformed, here are some highlights:</p>`,
      `<blockquote>"Body for body, I'm so petty<br>How many of your friends fit in my Rolls? (Can you fit in my Rolls?)"</blockquote>`,
      `<blockquote>"Don't call me baby when you did me so wrong (you did me so wrong, ooh)"<br>"Bought you a new face, you should call me Dad, baby<br>Hermés, but you dropped the bag, baby"</blockquote>`,
      `<p>And the infamous:</p>`,
      `<blockquote>"That I broke my hand on the same wall<br>That you told me that he fucked you on"</blockquote>`,
      `<p>This might be the worst set of lyrics in a pop song, who let these two get away with these lyrics. Maybe the failure of Twelve Carat Toothache, Dawn FM, and more recently AUSTIN was deserved because they made a song so vile. I absolutely HATE this song. This is the worst song of the year, and the worst hit song of all time, I'm serious. Well, at least before 2023.</p>`,

      `<h3>Best List — 2022</h3>`,
      `<p>Finally, the BEST list. I can finally tell you guys about the songs I highly recommend. But this best list is kinda empty in comparison to the year before, where we had Olivia Rodrigo, Lil Nas X, Happier than Ever, Good Days, and so many quality songs, half of the songs on the YEAR END are excellent. But here? You guys are gonna question my choices.</p>`,

      `<p>So Olivia Rodrigo didn't have a hit in 2022, but another Disney star subverting the typical Disney-pipelined popstar sound had one. And you guys are not gonna believe it.</p>`,
      `<h4>10. Boyfriend by Shawn Mendes</h4>`,
      `<p>Easily the most contentious hit of the year except one of the HMs (FOR SOME REASON). People have been calling this the lesbian version of Treat You Better, and I refuse to believe that this is true. I legitimately think this is a song about someone longing for one of their friends of the same gender and that friend having the shittiest partner. Dove at LEAST lists reasons for why this guy's an ass, Shawn just says the partner in question is toxic without any convincing argument that he isn't the same. The James Bond-esque beat also indicates that this is something pretty thrilling and exciting. The discourse around this song shouldn't exist.</p>`,

      `<p>A no namer got a hit off of TikTok again, and it is pretty incredible.</p>`,
      `<h4>9. Numb Little Bug by Em Beihold</h4>`,
      `<p>Damn this really is Gen Z as a hit, but the sentiments in this song are pretty relatable and needed for a time as tumultuous as this one. I really don't need to go further, there's just a lot of quotables from this song that makes me go "SO TRUE." This song is representative of the exhaustion that the current generation experiences. It's almost like the previous one promised us a better life than theirs but we get a global pandemic, racial tensions being shoved to the forefront, and economic crises one after another. And the song telling us to roll with the punches is honestly pretty cathartic to hear.</p>`,

      `<p>Told you guys, country was growing on me.</p>`,
      `<h4>8. One Mississippi by Kane Brown AND Damn Strait by Scotty McCreery</h4>`,
      `<p>So country had a BANNER year, completely recovering from last year, and these two songs I kinda discovered when making this list. And boy I am FUCKING glad I did. One Mississippi is Kane Brown's best hit and it probably isn't close (you think the collab with MARSHMELLO would be good?). The violins and drums just create this atmosphere of thrill that comes with feelings, whereas songs in the Never Say Never and the You Should Probably Leave lane play into the sadness of it all (two country songs that are really good). The song is just a rush. Oh yeah, SCOTTY FUCKING MCREERY MADE THE YEAR END IN 2022; this is a miracle in and of itself. The former American Idol contestant hasn't been hugely mainstream, and even this was a sleeper hit, and I'm glad it made the YE because damnnnnnn this song. The title itself has a double meaning, ultimately resulting in Scotty not being able to listen to certain songs because it reminds him of her and him just accepting that it'll keep being this way until he gets over her. Even though this specific situation is not relatable, wallowing in misery while acknowledging it's not anyone's fault but his that he is feeling this way is. These songs are two sides of the same coin, and tying these two as the few excellent country songs feels right.</p>`,

      `<p>I have been waiting to use <a href="https://www.youtube.com/watch?v=1acWg-c5Buo" target="_blank" rel="noopener">that clip</a>.</p>`,
      `<h4>7. PUFFIN ON ZOOTIEZ by Future</h4>`,
      `<p>The first hot take of the list, and definitely not the worst. This song is like imagining First Class with every single element of it upgraded, yes I am including the performers. Future had the most CRIMINALLY underrated 2022, with I NEVER LIKED YOU album-bombing the high end of the charts (mostly because the big hit had Drake and Tems but whatever), and I like all the hits that hit the top 10 (May 2022 was one of the craziest months, with it having FIVE ALBUM-BOMBS in a row). Anyways, the song's druggy atmosphere and kinda dead tone play really well, this LITERALLY feels like I am sleeping in a private jet, and I returned to this song a lot over the year, it's just the right amount of chilled out. I still can't believe to this day Future made a chill song that I genuinely still like.</p>`,
      `<p><em>Editor's note: wanted to include the fact that Future's ex-wife's husband is Russell Wilson, who was ASS at the time, but first of all, it's not a sports rant, and second, he's actually playing well again.</em></p>`,

      `<p>Before revealing this to you guys, I want to apologize. This is the single worst take I will ever have. I can't believe I have to vehemently defend the song, and I don't feel good defending it. But here it goes.</p>`,
      `<p>Morgan Wallen made a song with a black man after he said the N word and it goes hard.</p>`,
      `<h4>6. Broadway Girls by Lil Durk "ft." Morgan Wallen</h4>`,
      `<p>Every YouTube critic put this on their top 3 of their WORST LISTS, and the worst part is I completely understand all of the criticisms, I HATED this song on first listen. The vocals for Morgan are completely over the top and Lil Durk sounds washed out (also him saying "you see me with Morgan and you know that I rap" is GENUINELY one of the cringiest things I have ever heard). But this is the song I returned to the most in the year 2022, like there was something fascinating about it, or I just Stockholm-Syndromed myself. There was just something about it that made me return and not skip it. I also think if it wasn't released in the second week of January this would be a Dishonorable Mention, time was very on its side. So why do I like this to the point where I think this is the best country hit of the year? Well...</p>`,
      `<p>The one criticism that I used to get when I hated it was it sounds like ass, but those washed-out guitars just got to me, creating this weird banger of a trap beat. Their vocals are technically bad, but they are so ridiculous and out there that I enjoyed them. And the chorus... just wants to make me scream TWOOOOOOOOOOOOOOOOOOOOOOO THAAAAAAAAAAAAAAAAAAAAAAAANGS. This song is honestly the best example of being better than the sum of its parts, isolate any element in the song and it is very likely to be terrible and horrifying. I can't hate this anymore, and I hate admitting I now unironically love this song. Fuck...</p>`,

      `<p>With THAT out of the way, I want to make an agreeable opinion. What if the same man on the last song made an extremely thoughtful song about enjoying all the possessions that rappers usually brag about before they died.</p>`,
      `<h4>5. What Happened to Virgil by Lil Durk</h4>`,
      `<p>First of all, OH My god is another contender for the best two seconds of the year. The sad piano sets the mood very well. The lyrics just reflect on many that have died and makes everyone appreciate everything that they have. Oh yeah and we get a GOOD GUNNA VERSE. This is honestly like Uproar in the way that it rides one flow and rhyme scheme (but Uproar is wayyyyyy better).</p>`,
      `<p><em>Editor's note: I wrote most of the best list a year ago, and this is probably the most underwritten segment of the entire list but I don't feel like changing it a lot because of the year end lists for this year which I will talk about later. Also there isn't really that much to say about the song, it is literally if Uproar by Lil Wayne had a darker, more thoughtful tone. Also probably wanted a shorter segment after the essay I wrote to defend what is still my worst take of all time.</em></p>`,

      `<p>I hate that Billboard didn't find a way to put this on the 2021 year end, because it fits in with that year much better.</p>`,
      `<h4>4. Meet Me At Our Spot by THE ANXIETY</h4>`,
      `<p>This song though, is pretty special, and is like an indie-like song made by... Willow Smith. There's all these obvious jokes to her parents and the corresponding slap and all, but I won't make them. The best way to describe this song is being tired with all the shit that the world throws at you and finding a special place with just you and your partner, like another Numb Little Bug with more intimacy that plays into the song's strength. And both of them sound great on here, capturing the escape that needed to be felt by the world around them, and the joy they have when they are together away from all the world's problems.</p>`,

      `<p>The Anti-Drake that out-Draked Drake.</p>`,
      `<h4>3. Anti-Hero (or the entirety of Midnights) by Taylor Swift</h4>`,
      `<p>Her getting every spot on the top 10 AND blocking Rich Flex from #1 is pretty funny (and petty if you know that Drake supports Scooter Braun...). This is gonna end up as a top 3 biggest hit of 2023 (editor's note: I'm so sick it fell to #4) but it's purely 2022. Album is very good, Karma is a pretty close 2nd, but it clearly isn't, as Anti-Hero is Taylor FINALLY saying "maybe all of the recent petty attitude I have been portraying to the public is not great" and it sounds amazing. This is a deeply introspective piece, and the public thought that her being the indie pop darling has not helped her mental state whatsoever. She comments about her own songs being kinda narcissistic, bringing herself into stories about other people for no reason, and the bit before the last chorus where she says "Everybody agrees, everybody agrees" is just the pained acceptance that hits so hard. Goddamn what a fucking masterpiece, the fact that 2 songs are in the same universe as this is insane, but I'm sorry Kendrick has to make the list.</p>`,

      `<h4>2. N95 by Kendrick Lamar</h4>`,
      `<p>This is the endlessly quotable banger from Kendrick we get from time to time, and it is done over a chaotic, yet stellar production. Again, more highlights, because the lyrics speak for themselves. The entire first verse literally has "take it off" throughout, but it actually works, considering the song is named N95, and Kendrick is calling out the BS that people flex with to hide their own insecurities, like:</p>`,
      `<blockquote>"Take off the money phone, take off the car loan, take off the flex and the white lies<br>Take off the weird ass jewelry, I'ma take ten steps, then I'm takin' off top five<br>Take off them fabricated streams and them microwave memes, it's a real world outside"</blockquote>`,
      `<p>HE EVEN CALLS OUT SPOTIFY FRAUD FUCK YOU JUSTIN BIEBER.</p>`,
      `<blockquote>"The world in a panic, the women is stranded, the men on a run<br>The prophets abandoned, the law take advantage, the market is crashin', the industry wants<br>N-s and bitches to sleep in a box while they makin' a mockery followin' us"</blockquote>`,
      `<p>This part just sounds amazing with this flow.</p>`,
      `<blockquote>"Let's think about this for a second (let's go)<br>Tell me what you would do for aesthetic (let's go)<br>Would you sell your soul on credit? (Let's go)<br>Would you sell your bro for leverage? (Let's go)"</blockquote>`,
      `<p>Lets go lets go LETS GO.</p>`,
      `<p>This production makes me want to run through a starstricken night looking everywhere like a crazy person. This was my #1 for most of the year, but...</p>`,

      `<h3>Honorable Mentions</h3>`,
      `<ul>
        <li><strong>WAIT FOR U</strong> by Future, Drake, and Tems — The biggest grower of the year easily, Drake needs to sound like THIS from now on.</li>
        <li><strong>Do We Have A Problem?</strong> by Nicki Minaj and Lil Baby — This not hitting #1 and Super Freaky Girl hitting this is a fucking crime, the bass makes me want to slam tables.</li>
        <li><strong>Music for A Sushi Restaurant</strong> by Harry Styles — Another hottish take, funky guitar and horns work well together, but the Apple commercial ruined this for me.</li>
        <li><strong>Something in The Orange</strong> by Zach Bryan — Give it a decade, it'll be the best song then, but right now it's pretty good. (Editor's note: I am regretting not putting this in the top 10 but I'm not too hung up about it, this year's best list will give him his flowers.)</li>
        <li><strong>Party</strong> by Bad Bunny and Rauw Alejandro — Rauw is FUCKING AMAZING on here, wish the rest of the song was this good.</li>
        <li><strong>Matilda</strong> by Harry Styles — Would be in the top 5 if it sounded more interesting.</li>
        <li><strong>United In Grief</strong> by Kendrick Lamar — Sounds like a storm more than Hurricane, would be in the top 10 if N95 weren't leagues better (I don't have a one-per-artist rule on the best lists but usually if said artist made a lot of good songs from the same project/s I'd group them together).</li>
        <li><strong>Ojitos Lindos</strong> by Bad Bunny and Bomba Estereo — THE GRUBHUB SONG PEOPLE GOT A YE HIT.</li>
        <li><strong>Doin' This</strong> by Luke Combs — Pretty good but standard country song, Combs' passion shines through.</li>
        <li><strong>Sand in My Boots</strong> by Morgan Wallen — Also waited a year for this but the emotional gut punch has weakened.</li>
        <li><strong>Surface Pressure</strong> by Jessica Darrow — Same as Sand in My Boots. How the fuck did it make TWO WORST LISTS.</li>
        <li><strong>Glimpse Of Us</strong> by Joji — MAINSTREAM JOJI.</li>
        <li><strong>Smokin Out The Window</strong> by Silk Sonic — A year later it's still just good.</li>
        <li><strong>Bad Habit</strong> by Steve Lacy — This song is a lot and I do not know my opinion on this.</li>
        <li><strong>About Damn Time ("12")</strong> by Lizzo — I wish I had space for this, the flute and disco throwback is sooooooo good. (Editor's note: THANK GOD I didn't put this on the list, that shit is awkward after the allegations.)</li>
        <li><strong>Titi Me Pregunto ("11")</strong> by Bad Bunny — This was painful, but the country songs snuck past it, such a pure banger, switchup is earned.</li>
      </ul>`,

      `<p>I don't have a top 5, but here are the two best songs from this year.</p>`,
      `<h4>Seventeen Going Under by Sam Fender</h4>`,
      `<p>Wow, this might have been the best hit song of this millennium if it got big. It's that good. Its big, sweeping sound combined with lyrics of him introspecting on his earlier life hits you with the realest lines you've ever heard in a pop song, like:</p>`,
      `<blockquote>"And the boy who kicked Tom's head in<br>Still bugs me now<br>That's the thing, it lingers<br>And claws you when you're down<br>I was far too scared to hit him<br>But I would hit him in a heartbeat now<br>That's the thing with anger<br>It begs to stick around"</blockquote>`,
      `<p>The bit where he repeats you hurting your loved ones for nothing is one of the most heartbreaking things I've ever heard.</p>`,
      `<p>Oh yeah and Kendrick dropped a 5 minute prelude to his 2022 album that was heavily inspired by jazz and it is one of the best things ever written.</p>`,
      `<h4>The Heart Part 5 by Kendrick Lamar</h4>`,
      `<p>I don't like saying this, but you NEED to go to the music video and watch it, genuinely a masterpiece.</p>`,
      `<p>Ok, READY FOR THE WEIRDEST #1 YET.</p>`,

      `<h3>Best List — Number 1</h3>`,
      `<p>There was a lot of Bad Bunny this year. He defined that summer with his whole album Un Verano Sin Ti, with about 7-8 hits making the Year End.</p>`,
      `<p>What if I told you the summeriest song ever recorded was made in the summer of 2022. And it was in Spanish.</p>`,
      `<p>And it wasn't made by Bad Bunny at all.</p>`,
      `<h4>1. PROVENZA by KAROL G</h4>`,
      `<p>I put this over Taylor and Kendrick, why? Well, mostly because of the reason above. But, the songs preceding this song didn't make me feel anything significant in my life, like I wasn't personally affected by this. But this song has the ability to calm me down at any time. It is extremely soothing and literally the most perfectly constructed beach song ever. I can close my eyes sitting down to this song and think I'm at a beach with the waves crashing in the distance. There's no other song, no other spectacle like it (well maybe except Good Days putting me in the most soothing forest, but give me til the end of the decade or something to talk about this — I honestly don't know if I'm ever doing a 2010s decade-end list, but I'm considering it for the 20s considering I have listened to 95% of the year end hits in this decade so far). I can just sit and my worries wash away like the shells on the beach in between my toes that I feel while listening to this song. I was just so stunned by how calm and immersed it made me feel that I had to put it here over the conventional picks. I'm also surprised these lyrics are good too, I actively looked up the translation (something I barely do for other language songs because if they sound good, I don't care, but I had to for this one because it sounds transcendent). It details Karol escaping to Provenza with an ex of hers, to get away from their worries. The cracks in their relationship begin to form in the second verse, where she details the tension between them and their use of substances that drove them apart from each other.</p>`,
      `<p>Again an extremely unconventional pick, but my best song nonetheless.</p>`,

      `<p>Alright WOW that took longer than I thought to get done. But now the updates to the 2023 list rules and eligibility. Billboard released their year end lists super early. To my horror, it covered 49 weeks on the chart, since they wanted to sync up the end of the year with their awards show for some reason. So because Billboard is being super goofy with their year end, I am not using it as the main metric for this year. Instead, I found a predicted, 52-week year end list that includes 250 songs. And yes I will be listening to ALL OF THEM and seeing if anything new catches my ears in a good or bad way. Hopefully this will make both lists more interesting. And since there are 250 songs, with fluctuating quality between the worst and best hits (especially this year) each year end list might unironically be a top 25 or 30 even. So I might get these lists out in 1-2 months, or maybe I give up and decide to use the extended eligibility on songs I was gonna talk about in the non-hits section that made it (I already know at least 3 songs per list that fit under this category). Either way, also expect the list to be separated into a worst and best section, with a possible part 1 and 2 to each list. It's gonna be crazy.</p>`,
      `<p>Also, would you guys like to read the Spring and Summer 2023 rankings I made, it does spoil some of the picks I have for both lists, although the placements may or may not be different? Let me know.</p>`,
      `<p>But yeah I know this will be a behemoth of an email, so also let me know what else I can maybe improve on (more visuals, maybe even a few clips I can put for songs, like someone sleeping whenever a boring song comes on).</p>`,
      `<p>Hope y'all enjoyed this long-winding review of 2022's worst and best.</p>`
    ]
  },
  {
    title: "The Worst Hits of 2023... Part 1",
    date: "2024-02-10",
    tags: ["ranking", "2023", "worst"],
    body: [
      `<img src="assets/posts/worst-2023-part-1/img1.jpg" alt="Selfie of the author passed out asleep mid-write-up">`,
      `<p>Finally, I have listened to all the qualifying hits for 2023 and WOW this year was EXTREMELY up and down.</p>`,
      `<p>Here's my summary of just the pop scene in general this year: it is just the same as its movie industry; it is just content that rips off older genres and songs because this country seems creatively bankrupt for no reason, to the point where I almost made songs from the Global 200 and the UK Official Charts eligible (my non-eligible honorable mentions will be littered with those). I really thought LAST YEAR had run out of ideas, but somehow we are scraping below the bottom of the barrel.</p>`,
      `<p>Rap is fucking struggling, to the point where its biggest hit also was part of this 2-year-long sampling trend. Until that ONE album (and no this is actually not Drake related).</p>`,
      `<p>Kpop had its most commercially successful year, but that success was invisible on Billboard, to the point where Like Crazy by Jimin is quite literally the least successful #1 hit of all time, falling to #42 (the biggest dropoff for a #1 debut of all time), then disappeared. There have been exciting girl groups popping up, but the one who actually has a song has now split up due to label issues. Country had its best commercial year in this millennium. A quarter of the songs of the year end are country. But it has had the WORST DISCOURSE since like 2019 where we were arguing about what genre Old Town Road is, and we WISH we were arguing about that today.</p>`,
      `<p>This year was chaotic. I said this was gonna be a top 30 list, which is still somewhat true, but we are starting off at #22.</p>`,

      `<p>Hmm, we're starting with a song that starts nice enough with a sample as its intro. In fact, it's a pretty good intro. Wait why is this on he...</p>`,
      `<h4>22. PAINTING PICTURES by Superstar Pride</h4>`,
      `<p><em>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz...</em></p>`,

      `<h4>21. Eyes Closed by Ed Sheeran</h4>`,
      `<p><em>zzzzzzzzzzz...</em> Oh sorry I'm supposed to actually be writing for this. What number are we on? Oh 21, can you do something for me?</p>`,
      `<p>21. Rich Fl... Wait it's not that time yet. What time is it actuall... OH WTF ED SHEE...</p>`,
      `<p><em>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz...</em></p>`,

      `<p>Alright I believe I've fully woken up.</p>`,
      `<h4>20. Snooze by SZA</h4>`,
      `<p>NO I AM NOT PRESSING THAT BUTTON NONONONO.</p>`,
      `<p>Alright FINE I'll start ACTUALLY writing for the list now. What is it. OH a nice even number, GREAT! 20 places, with nothing preceding this at all.</p>`,
      `<p>Wait I'm getting a daydream about something I wrote already, but that doesn't make sense... "Oh 21, can you do something for me?" Huh?</p>`,
      `<h4>20. Peaches and Eggplants by Young Nudy ft. 21 Savage</h4>`,
      `<p>Nope, can't do anything here. Please never let this man talk about sex. Or rap over a beat that isn't some sort of Halloween theme. Not whatever this bass-heavy, stock-synth, ASS of a beat. And his cousin Young Nudy is doing nothing either. This is such a boring, nothing-burger of a so.... zzzzzz... What? Taylor doing a song with Post Malone? Nah that's actually something out of a dream.</p>`,
      `<img src="assets/posts/worst-2023-part-1/img3.jpg" alt="Screenshot: Side A, Fortnight (feat. Post Malone)">`,
      `<p>WAIT THAT'S REAL.</p>`,

      `<p>Speaking about 19, 2019 seems like an EON ago, where names like Billie Eilish were fresh blood, Taylor released Lover and surely no hit from that misfire of an album would go #1, and Post Malone released Hollywood's Bleeding, which contained new songs like Circles which definitely won't be THAT huge. You know who else was very 2019, YOUR MO..</p>`,
      `<p>You know who stayed in and REFUSED TO LEAVE 2019. DaBaby.</p>`,
      `<h4>19. SHAKE SUMN by DaBaby</h4>`,
      `<p>I used to LOVE his discography, he was a genuinely fresh presence to the charts back then. Extremely charismatic rapper that made Suge and Baby Sitter. He had an extremely tragic backstory, losing his father and brother from 2019-2020. He had a YE #1 hit in the Levitating Remix where he IMPROVED the song.</p>`,
      `<p>Then 2021 Rolling Loud happened. He said homophobic statements and his career just tanked.</p>`,
      `<p>And we arrive here. At the worst Jersey Club hit of the year. A genre that actually made pop music enjoyable this year (and that we will get into on the best list), but DaBaby used it for trend chasing and trying to capture his initial success, without having any of the initial charisma. In fact, this is the most checked out Mr. Kirk has ever seemed on a hit. "Just shake sumn" sounds so lifeless. Thank god we left this guy in '19, at 19.</p>`,

      `<p>Another interesting trend that popped up this year was the Regional Mexican wave of music. It seemingly came out of nowhere too, but it seems like the traditional, country-esque genre that really was tailor-made to the American people, who chose to listen to country the most this year. And of course, like country, within the regional Mexican movement, there were a significant amount of them that took aspects of other genres and mashed them up. Their version of country trap has these extremely farty horns for some reason? And a lot of these hits involved a single dude that had double-digit hits on the Year End. That one dude is named... **flipping through notes** am I reading this right? Featherweight? ... OH, right, Peso Pluma. Most of his hits are pretty same-sounding, but there's at least some variation.</p>`,
      `<p>However, with how it usually is with trends nowadays in pop music, it was used aesthetically by people that have NO FUCKING CLUE what they are doing.</p>`,
      `<h4>18. CHANEL by Peso Pluma and Becky G</h4>`,
      `<p>She just doesn't fit at all with this song, and Peso Pluma seems more checked out on all songs, which is rare for him, with his usual raw, unpolished and aggressive delivery. This also doesn't sound like his version of Regional Mexican, it sounds like another group that does this uncharismatic machismo, strings that are plucked way too far, and nonexistent farty horns. It really felt like no one tried here, unlike the next one.</p>`,

      `<p>Again, no FUCKING CLUE WHAT THEY ARE DOING.</p>`,
      `<h4>17. Bzrp Music Sessions Vol. 55 by Bizarrap and Peso Pluma</h4>`,
      `<p>Alright, more context to this. Bizarrap started doing these freestyle music sessions where he was promoting smaller Spanish artists, which is pretty cool. So cool in fact, that megastars like SHAKIRA did it, and the one before her was THE BIGGEST hit of last year, well if you don't include America. But then he released 55, where he admitted to coasting off his success because he knew that his collab with the biggest Spanish artist at the time would guarantee a number 1 hit.</p>`,
      `<p>He mixed Peso Pluma like he was swift to get BACK INTO bed. The horns are so loud and he's somehow mixed down but on the chorus he is just shrill. Probably the most grating performance of the entire year. Plus, his style does not do well when trying to be professionally mixed. Nothing sticks, it isn't fun at all. It has an anti-hook. This isn't even a Regional Mexican hit, this is an interpolation of it gone wrong.</p>`,

      `<p>Ah yes, the first Morgy Worgy hit on the list. Mans released a 36-song album, of course SOMETHING had to be bad from it.</p>`,
      `<h4>16. Ain't That Some by Morgan Wallen</h4>`,
      `<p>Great, an ACTUAL trap country hit. This man singlehandedly ruined music this year I swear, how did he have a #1 hit stay for 3 straight months, apparently pop music does not have any pulse anymore. Also, can we PLEASE ban the use of spelling in music, this shit is lame EVERY TIME, especially on hits like ME!</p>`,
      `<img src="assets/posts/worst-2023-part-1/img4.jpg" alt="Screenshot of lyrics: Ain't that some C-O-U-N-T-R-Y... There's folks out there ain't T-R-Y-D this">`,
      `<p>AND HE SPELLED THE WORD WRONG.</p>`,
      `<img src="assets/posts/worst-2023-part-1/img5.jpg" alt="Screenshot of lyrics: Ain't that some, ain't that some, ain't that some shit">`,
      `<p>Yup it certainly is.</p>`,
      `<img src="assets/posts/worst-2023-part-1/img6.jpg" alt="Screenshot of lyrics: Yeah">`,
      `<blockquote>"Yeah! Yeah! Shorty got down low, said, 'Come and get me'<br>(Yeah) Yeah<br>I got so caught up, I forgot she told me..."</blockquote>`,
      `<p>This is really convincing me that Morgan is really no antihero of the genre, he is just coasting on his past success. Anyways onto MORE shit.</p>`,

      `<p>And to think that all this country really got started off with these two hits. They both include one of the better country singers in the business, and trucks.</p>`,
      `<h4>15. Heart Like a Truck by Lainey Wilson AND Wait In the Truck by Lainey Wilson and HARDY</h4>`,
      `<p>First of all, the way these hits got popular is HILARIOUS. <a href="https://www.sportskeeda.com/pop-culture/lainey-wilson-goes-viral-dump-truck-tiktok-trend-explained-singer-shares-hilarious-meme" target="_blank" rel="noopener">Her ASS made two songs with TRUCK in the name popular.</a></p>`,
      `<p>Anyways both of these songs started off the year of country pretty badly. Heart Like a Truck's issues are pretty simple, plodding production, list-driven lyrics about how her heart is similar to a truck. This leads to some extremely clunky lines:</p>`,
      `<blockquote>"Runs on dreams and gasoline<br>And that ole highway holds the key"</blockquote>`,
      `<p>The ignition holds the key?</p>`,
      `<blockquote>"Don't always keep it in between the lines<br>If you're ready for a ride pedal down state of mind<br>Boy I tell you what<br>You better buckle up"</blockquote>`,
      `<p>Yeah I might DIE here.</p>`,
      `<p>The worst part is the blowout that has HAUNTED me for a year now. It is probably the worst two seconds of the year bar none. I had to listen to this in the few times I actually did watch TV and on a RAM commercial. That blowout PHYSICALLY pains me, it's so sharp and keening that it pierces my goddamn ears.</p>`,
      `<p>It's at least not a male power fantasy with a choir bridge (for some reason???) that dampens Lainey. Oh yeah and BELIEVE me I will tear into Hardy, but now is not the ti... <strong>knocking</strong> WAIT WHAT THE <strong>loud metal pipe</strong> <strong>portal opens</strong> <strong>mysterious figure throws me through the portal</strong></p>`,
      `<p>Well I guess RIP that version of me I guess, don't know who that figure is and if it foreshadows anything at all...</p>`,

      `<h3>Dishonorable Mentions (yes, all of them)</h3>`,
      `<h4>I Wrote The Book by Morgan Wallen</h4>`,
      `<p>This is just hilarious, it's almost like he was part of a Bible book club, and was so mad about not being the most integral member of it. Chorus also sounds awful.</p>`,
      `<h4>Daylight by David Kushner</h4>`,
      `<p>MOMMMMM can we have Take Me to Church by Hozier. We already have Take Me to Church at home (also why tf did he rip off the Heroes and Villains by Metro Boomin album cover in his music video???)</p>`,
      `<h4>Die For You Remix by the Weeknd and Ariana Grande</h4>`,
      `<p>More cashgrab remixes. Great. You're SO LUCKY I didn't put Kill Bill on here to piss literally everybody off. Anyways I almost put this on the actual list (after the whole sleeping gag ofc) because Ari sounds like SHIT here, it is clearly rushed. Also, why tf would you remix a 2016 song in 2023, that is just bound to have weirdly aged lyrics and production. The original song is NOT EVEN THAT GOOD. Definitely my hottest take on the worst list.</p>`,
      `<h4>Thank God by Kane Brown and Katelyn Brown</h4>`,
      `<p>I was SO close to including this in the gag, this song is sappy, sweet nothing <strong>a really good Calvin Harris drop comes in</strong> No not THAT Sweet Nothing (I'll eventually publish some sort of best of 2010s hits... eventually, I have not listened to all, jesus christ, nearly 900 songs??? Yes don't expect that to come out anytime soon).</p>`,
      `<h4>La Bebe by Peso Pluma</h4>`,
      `<p>Ok maybe I was wrong about Peso Pluma on reggaeton, he's good on QLONA by Karol G. Just don't put him on SHIT reggaeton songs.</p>`,
      `<h4>What It Is by Doechii and Kodak Black</h4>`,
      `<p>Tore into this in the ranking email so didn't really want to repeat all that again. Just NEVER put Kodak on a love song PLEASE.</p>`,
      `<h4>Popular by the Weeknd, Madonna, and Playboi Carti</h4>`,
      `<p>The Weeknd's likability NOSEDIVED this year, all because of ONE goddamn show. Didn't Sam Levinson do Euphoria Season 1 (then proceeded to ruin it with season 2 as I have heard by being the sole writer???). Also this has one of the most useless lyrics: "She mainstream cuz she popular." Like???? You just DEFINED popular the word. Also Carti sounds like he's in another universe here.</p>`,
      `<h4>LALA by Myke Towers</h4>`,
      `<p>The most annoying Spanish song since... Taki Taki? Listen to the first FIVE seconds of this song. That's all the song is, the repeating lalalalaLAALAA over the most boring Spanish singing.</p>`,
      `<h4>Lil Baby???</h4>`,
      `<p>He went from dominating 2020-2021 to not having a sizable hit this year. And now, he has hits like California Breeze, Freestyle, Low Down, Your Turn??? I made that last one up too, but his hits are just the same EVERY TIME now, no beat and wack flows.</p>`,
      `<h4>Love Again by the Kid LAROI</h4>`,
      `<p>Speaking about falloffs, jesus. The "can't make a wife out of a hoe-oh" guy has now completely disappeared from the mainstream and is now pulling shit like this:</p>`,
      `<img src="assets/posts/worst-2023-part-1/img7.jpg" alt="Paris To Tokyo single cover, Fivio Foreign and the Kid Laroi">`,
      `<p>(this samples Rocketeer btw)</p>`,
      `<img src="assets/posts/worst-2023-part-1/img8.jpg" alt="Too Much single collage, Jung Kook, the Kid Laroi, and Central Cee">`,
      `<p>Like this is so DESPERATE.</p>`,
      `<p>Ok now we are getting to the final DM, and it is the WEIRDEST one.</p>`,
      `<h4>Pound Town 2 by Sexyy Red, Nicki Minaj, and Tay Keith</h4>`,
      `<p>How tf is THIS extremely raunchy, but boring, dead-sounding, and lazily produced song a TIKTOK hit. I heard a story online that a ballet teacher was extremely scarred by her 5-year-old students, because they wanted to hear THIS SONG and dance to it instead of their BALLET music. Yeah, the unintended consequences of any TikTok for a child hearing shit like THIS has largely gone unchecked. I am all for listening to the uncensored version of most songs, but there comes a point where there's gotta be a restriction from extremely sexual shit like THIS to CHILDREN.</p>`,
      `<p>Generation Alpha is fucked.</p>`,

      `<p>Anyways that's the first part of the worst list... out of FOUR. Yeah both the lists this year are gonna take a while. Planning to try to get the second part + the Winter 2023 ranking out soon (still don't know what week to use bc of Christmas music, lack of turnover, and covering certain songs that came out recently which I am conflicted on whether to cover or not).</p>`,
      `<p>I want to get the worst list out as soon as possible (maybe except the last part for reasons I will dive into later in time) because my best list might be the most STACKED best list of all time, more songs on the list didn't ruin this take. I might want to cover even more songs on that than here, but 2023 has ended up being an extremely polarizing year, from the worst shit I've ever heard with the worst discourse I've ever heard, to the best country + pop songs OF ALL TIME.</p>`
    ]
  },
  {
    title: "The (Kinda Rushed) Winter 2024 Billboard Top 20 Ranking",
    date: "2024-02-18",
    tags: ["ranking", "2024", "winter"],
    body: [
      `<p>Will be a LOT shorter due to the ambitious list season I have willfully undertaken. Plus I don't have a LOT of thoughts on most of the songs here.</p>`,
      `<p>That being said, pop music is...</p>`,

      `<h3>Terrible Tier</h3>`,
      `<p>Ain't no way what the FUCK is this.</p>`,
      `<h4>20. Wild Ones by Jessie Murph and Jelly Roll</h4>`,
      `<p>Oh GOD. This is like a Morgan Wallen song without that goofy "charm" that the trap songs I liked. Jessie Murph also unironically sounds like a female clone of Morgan Wallen. I don't know why I find this insufferable vs. Morgan Wallen exactly, I will get back to y'all on that. Yeah you're just wack now.</p>`,
      `<h4>19. Lovin On Me by Jack Harlow</h4>`,
      `<p>How do you show even LESS charisma in your clear ripoff of First Class. This song is his worst hit, and it isn't close. He sampled a DIFFERENT song and just let THAT SAMPLE PLAY THROUGH THE WHOLE CHORUS. At least on First Class he tried to play around with the sample.</p>`,

      `<h3>Bad Tier</h3>`,
      `<h4>18. FTCU by Nicki Minaj and Everybody by Nicki Minaj and Lil Uzi Vert</h4>`,
      `<img src="assets/posts/worst-2023-part-1/img1.jpg" alt="Selfie of the author passed out asleep, again">`,

      `<h3>Mid Tier</h3>`,
      `<p>Well this is disappointing.</p>`,
      `<h4>17. Never Lose Me by Flo Milli</h4>`,
      `<p>What little I've heard of Flo Milli is that she works in very bouncy, tight production. Not over this middling, dark, brooding beat with her crooning about sex. I'm really afraid that this will screw her out of more hits.</p>`,
      `<p>Oh god not this guy.</p>`,
      `<h4>16. Beautiful Things by Benson Boone</h4>`,
      `<p>So this is the next big hit. From the guy who tried to be the new age Lewis Capaldi (he LITERALLY has a song inspired by his grandmother's death which is the SAME inspiration as Someone You Loved which is AWFUL), he makes a rock hit which actually isn't that bad. Like he could've not yelped over this chorus but this isn't nearly as embarrassing as I thought. However, this melody is so annoying so I can't put this higher.</p>`,

      `<h3>Decent Tier</h3>`,
      `<h4>15. Pretty Little Poison by Warren Zeiders</h4>`,
      `<p>Generic rock country song about how your partner makes you feel #1.</p>`,
      `<h4>14. World on Fire by Nate Smith</h4>`,
      `<p>Generic rock country song about how your partner makes you feel #2.</p>`,
      `<h4>13. Stick Season by Noah Kahan</h4>`,
      `<p>NO NOAH KAHAN YOU MAY NOT SUCK MY MOM. NOOOOOOOOOOOOOOOOOO.</p>`,
      `<h4>12. Lose Control by Teddy Swims</h4>`,
      `<p>This guy definitely has potential with that whole gravelly soulful voice, and it SHOULD sound good over a soul song. But not really. Stiff-ass backing instrumental and that squealy guitar solo kinda kill it. Good first impression though.</p>`,
      `<h4>11. My Love Mine All Mine by Mitski</h4>`,
      `<p>This is a Something in the Orange by Zach Bryan situation, I don't get this right now, but give me a while.</p>`,
      `<h4>10. redrum by 21 Savage</h4>`,
      `<p>This is just a worse Savage Mode 2 cut. I mean that's pretty good, as 21 always sounds good over horror-movie-inspired stuff.</p>`,

      `<h3>Good Tier</h3>`,
      `<p>Ok fine.</p>`,
      `<h4>9. Feather by Sabrina Carpenter</h4>`,
      `<p>FINE ERIN YOU WIN. I FINALLY LIKE A HIT THAT SABRINA CARPENTER HAD OK.</p>`,
      `<h4>8. Is It Over Now? by Taylor Swift</h4>`,
      `<p>This is apparently the spiritual successor to Style, huh. Well I don't see it. I mean it still sounds very good, and the melody sounds very frustrated, which fits the themes, but this is NO Style.</p>`,
      `<p>The way she ruined it on the remake though... that's for a different time.</p>`,
      `<h4>7. Where The Wild Things Are by Luke Combs</h4>`,
      `<p>Jesus dude. What a tribute to your carefree brother who just died in a motorcycling accident. I couldn't imagine.</p>`,
      `<h4>6. yes, and? by Ariana Grande</h4>`,
      `<p>This is the woman that wrote Thank U, Next by the way. This has GOT to be the most immature hit she has ever charted. AND THIS IS SUPPOSED TO BE A RESPONSE TO HER CONTROVERSY ABOUT SLEEPING WITH THE SPONGEBOB VOICE ACTOR??? Yeah the house production and pretending to be a Walmart Madonna is decent enough, but this relatively average hit single from Ari is making me slightly scared about the album. We can't have both her and the Weeknd both fail in one year.</p>`,

      `<h3>Excellent Tier</h3>`,
      `<p><em>This is the best Peso Pluma hit.</em></p>`,
      `<h4>5. La Diabla by Xavi</h4>`,
      `<p>So I really don't understand how Peso Pluma released so many goddamn songs in this vein and this random person comes out of nowhere to create a song in this style with the tightest guitar playing I've heard. Also this hook is so goddamn sticky it's ridiculous.</p>`,
      `<p>I lied, THIS is the best Peso Pluma hit. After he moves AWAY from his sound.</p>`,
      `<h4>4. Igual Que Un Angel by Kali Uchis and Peso Pluma</h4>`,
      `<p>He usually sounds pretty rough but he takes a smooth approach to this extremely poofy, cloud-like song that Kali Uchis has basically made her brand. I love how it feels like a dream, and also a continuation of the other two Kali Uchis hits.</p>`,
      `<p>She really did it.</p>`,
      `<h4>3. Houdini by Dua Lipa</h4>`,
      `<p>THANK GOD DUA LIPA IS CHANGING HER SOUND. Like her shtick would eventually run out, and it did on Sweetest Pie. I'm so happy that this song is a way darker version of her whole synthpop era. Yes this is a little derivative but I do not care. This is amazing. Makes up for what her boyfriend is outputting...</p>`,
      `<p>Yes I don't know how her and Jack Harlow are dating after he made a song with her name on it.</p>`,
      `<h4>2. Water by Tyla</h4>`,
      `<p>This is NOT afropop like Calm Down, but I am not qualified to discuss the differences between West African afropop and South African afropop. HOWEVER what I do know, is that this song is beautiful, the song itself sounds like it glistens in the light and shines. This is EVEN BETTER than the afropop that may or may not be the biggest hit of last year. And I might not be mentioning that song because of... obvious reasons.</p>`,

      `<p>And a song from 2021 tops the list. Yeah makes sense.</p>`,
      `<h4>1. Surround Sound by JID (ft. 21 Savage &amp; Baby Tate)</h4>`,
      `<p>So of course TikTok revives this song NOW while this should've been a big hit in 2021. I remember when this first CHARTED. God time is a fucking flat circle. Anyways this is the best hit song that JID and 21 have been on (granted the other song JID had was an Imagine Dragons song so...)</p>`,
      `<p>Also this song would've been cut if I didn't combine the Nicki tracks into one.</p>`,

      `<p><strong>Season Score: 70/105, 66.7%</strong> — pretty good overall, and probably would've been higher, but that'll lead us to:</p>`,

      `<h3>Season Recommendations</h3>`,
      `<ul>
        <li><strong>Murder on the Dancefloor</strong> by Sophie Ellis-Bextor — I really should've watched Saltburn huh, because that's the reason that this song from 2001 is near the top of the UK charts.</li>
        <li><strong>LUNA</strong> by Feid and ATL Jakob — One of the most summery reggaeton songs popular right now.</li>
        <li><strong>Bzrp Music Sessions 58</strong> by Bizarrap and Young Miko — Such a vibe and a return to form for the producer, as 55-57 are all just underwhelming.</li>
        <li><strong>On And On</strong> by Tyla, AND <strong>Girl Next Door</strong> by Tyla and Ayra Starr — Yeah no we need to give the Water girl more hits this shit is like CRACK to me.</li>
        <li><strong>Cobra (including the Rock Remix???)</strong> by Megan Thee Stallion — Jesus Christ if I was shot in the foot and everyone thought I was lying, this is DEFINITELY the response I would do. Hiss is good but this is the real payoff.</li>
        <li><strong>Agora Hills</strong>... Wait what — Yeah I'm an idiot. This might be her best hit. Now y'all have to wait a whole year, unlike...</li>
        <li><strong>White Horse</strong> by Chris Stapleton — A song I almost included but I wanted to go into more depth... for obvious reasons.</li>
      </ul>`,
      `<p>And finally...</p>`,
      `<p><strong>Strangers</strong> by Kenya Grace — Also refraining from my thoughts on this, but this is gonna be an end-of-next-year situation. What I will say: this song is perfect. I'm not kidding.</p>`,

      `<p>Alright hope this will hold you guys til Part 2.</p>`
    ]
  },
  {
    title: "2023 List Eligibility Changes",
    date: "2024-05-29",
    tags: ["notes", "2023"],
    body: [
      `<p>Just before I get into rambling about music in the next part, I am going to make an update to eligibility: any hit that wasn't previously on a YE list and was on the YE list for the GLOBAL 200 is now eligible (still not sure if I want to count ones that hit the top 10, since there are 200 songs on the list already and most top 10 hits make it no matter what). The Global 200 is a YE list that started in 2020, and tracks all the hits that were truly big everywhere, and I have been keeping a closer eye on it. Plus, America is part of the rest of the world right (the true reason is that sometimes the Hot 100 gets really stale at the beginning months, so the Global 200 helps a LOT). Here is one goofy example of a non-eligible hit for the Global 200:</p>`,
      `<p>Viva La Vida made the YE at #64 (and funnily enough this is also the first time Viva La Vida made the UK YE at all) but isn't eligible for the list since it made the 2008 and 2009 YE lists. Also it wouldn't be fair, it would easily be #1 as one of THE defining hits of all time, full stop.</p>`,
      `<p>Here are other notes for previous years of the Global 200, which I might revisit at the decade end list:</p>`,
      `<ul>
        <li>Bones by Imagine Dragons would have been my #2 worst hit in 2022, fucking DESPISED this song, ALMOST as much as the sludge that is One Right Now</li>
        <li>Pepas by Farruko would have made the best list in 2022, probably on the lower half</li>
        <li>Where Are You Now by Lost Frequencies ft. Calum Scott would have definitely made the top 5 in 2022</li>
        <li>My Universe by Coldplay would actually hit the YE in 2022 at 25, and not only be the second-most irrelevant #1 hit ever (I'll talk about the first in the best list)</li>
        <li>Do It To It by ACRAZE would have made the worst list, how does the SQUID GAME REMIX improve this???</li>
        <li>Lo siento bb by Bad Bunny and a bunch of other people would've been a good contender</li>
        <li>Love Tonight, the David Guetta remix might've made a shot at #1 for 2022, easily one of the best drops of the decade</li>
        <li>Pink Venom and Shut Down by BLACKPINK would have easily been on the worst list, holy shit these songs are TERRIBLE, and these songs seem to be their label's work, as there is no passion in this.</li>
        <li>Peru by Fireboy DML and Ed Sheeran would've been a honorable mention, who knew a Ed Sheeran Afrobeats song would be pretty good</li>
        <li>Moth To A Flame would have been top 2 in 2021 or 2022, it would've contested All Too Well in 2021 easily.</li>
        <li>2step by Ed Sheeran ft. Lil Baby would've made it, 2022 was a pretty weak year, and this was one of a few songs on that were good</li>
        <li>Last Last by Burna Boy would've made it this year or last, excellent Afrobeats song, it did see some rise on Billboard but of course it never caught on</li>
        <li>Sacrifice by the Weeknd would have qualified in 2022, instead of peaking at #11 and BARELY missing the YE.</li>
      </ul>`,
      `<p>Part 1 is being written right now, this is just the teaser.</p>`
    ]
  },
  {
    title: "The (Slightly Delayed) Spring 2024 Billboard Top 20 Ranking",
    date: "2024-04-28",
    tags: ["ranking", "2024", "spring"],
    body: [
      `<p>So I did not release this a week after the worst list. My bad. A wave of album bombs have hit the chart.</p>`,
      `<p>Music has been WEIRD this year, there still no established "sound" of the mid-2020s, it just seems like events are happening in the music world. And random artists are being pushed more than other because UMG has an underlying war with TikTok pending a ban on US soil?</p>`,

      `<h3>Terrible Tier</h3>`,
      `<p>I made a mistake. Beautiful Things is TERRIBLE. I'm not doing it again.</p>`,
      `<h4>20. Slow It Down by Benson Boone</h4>`,
      `<p>This song has one of the most UNLISTENABLE choruses ever. His SCREAMS are pitchy and the keyboard is so stiff that I LEGITIMATELY get anxious every time I listen to this song. Actual HORSESHIT. Worst hit song of the year contender already, along with the unfortunately popular...</p>`,

      `<h4>19. Carnival by Y$, Rich the Kid, and Playboy Carti</h4>`,
      `<p>One thing to say about each artist in the song:<br><br>Ty ripped off a flow from somewhere and its KILLING me not knowing where its from.<br>Rich The Kid is LITERALLY the most forgettable rapper of all time and he has a #1 hit.<br>Playboy Carti SHOULD NEVER use the deep register after FE!N.<br>Kanye really likened himself to Bill Cosby and R Kelly....</p>`,

      `<h3>Bad Tier</h3>`,
      `<p>Of course Drake had to ruin something this year.</p>`,
      `<h4>18. Act II: Date @ 8 by 4Batz ft. Drake</h4>`,
      `<p>This was a pretty tame, cloudy RnB-esque song from 4Batz, who has a interesting voice. It gave it some bounce. But THEN. He came along with the most forgettable verse in a while.</p>`,
      `<p>"Stand-up guy like Dave Chappelle", REALLY. And you have a song where you claim that you J. Cole are the top 2 of the Big 3?</p>`,
      `<p>That third member definitely won't torch that claim and make one of the most defining moments of 2024 in the process. Definitely. No such thing happened. :)</p>`,
      `<p>From Drake to an act propped up by Drake.</p>`,

      `<h4>17. Get It Sexyy by SexyyRed</h4>`,
      `<p>I really don't have much to say, this is just Knife Talk but like 20 times worse.</p>`,

      `<h3>Mid Tier</h3>`,
      `<h4>16. Whatever She Wants by Bryson Tiller</h4>`,
      `<img src="assets/posts/spring-2024/img1.jpg" alt="Selfie of the author passed out asleep mid-write-up">`,

      `<h4>15. Burn It Down by Parker McCollum</h4>`,
      `<p>HOW MANY SONGS ARE GONNA BE LIKE THIS THIS YEAR. This is just World on Fire but less throaty? I swear I've turned the corner on hating every country but like cmon man.</p>`,

      `<h3>Decent Tier</h3>`,
      `<p>See I don't hate every country song.</p>`,
      `<h4>14. Austin by Dasha</h4>`,
      `<p>Nice strumming guitars beat complemented by lyrics that's telling off a guy that's he would wash back up in Texas. Funny as hell</p>`,
      `<p>So yes, and? has been heavily shrinking on me. The next single is better.</p>`,

      `<h4>13. we can't be friends (wait for your love) by Ariana Grande</h4>`,
      `<p>Pretty solid synthpop song that's kinda just a diet version of Houdini by Dua Lipa. Probably not going back to this one a lot.</p>`,

      `<h4>12. TEXAS HOLD EM by Beyonce</h4>`,
      `<p>Honestly should've been in the last ranking, but didn't due to me not acknowledging one song that showed up...</p>`,
      `<p>Did not expect Beyonce to make a country album, but it's a pleasant surprise. Would be in the Good tier but the whistling is too keening for me to fully get behind it.</p>`,

      `<h3>Good Tier</h3>`,
      `<h4>11. Saturn by SZA</h4>`,
      `<p>The chilled out hit hasn't really fully set in for me yet, but I still really liked the vibe. Will definitely grow on me soon.</p>`,
      `<p>This song does not sound like it was released in the 2020s, it sounds like a 2000s RnB hit</p>`,

      `<h4>10. Made For Me by Muni Long</h4>`,
      `<p>AND THIS IS THE SAME WOMAN that has written behind the scenes for a long time including... New Truck by Florida Georgia Line, which I heard is a pretty fun hit and one of their best. And their writer has dropped some decent RnB hits. That chorus is kinda magical.</p>`,
      `<p>And here is the GloRilla two-fer.</p>`,

      `<h4>9 and 8. Yeah Glo! by GloRilla and Wanna Be by GloRilla and Megan Thee Stallion</h4>`,
      `<p>GloRilla said that she was inspired by crunk, that she wanted a dominant sound. These two hits prove it. Two of the stickiest and commanding hooks of the year.</p>`,
      `<p>Here is the biggest surprise of the year: Hozier is officially not a one hit wonder anymore, and is now, at the time of writing this, at #1.</p>`,

      `<h4>6. Too Sweet by Hozier</h4>`,
      `<p>The bassline is super infectious and is still stuck in my head, which is good in this case. The lyrics are kinda eh which is why it isn't in...</p>`,

      `<h3>The Excellent Tier</h3>`,
      `<p>Surprisingly, this OLIVIA RODRIGO song isn't higher.</p>`,
      `<h4>5. Obsessed by Olivia Rodrigo</h4>`,
      `<p>Yes, I've listened to the deluxe. I'm not sure of my thoughts on it. But I'm grateful that the rock song got pushed again, instead of songs like Vampire, which honestly have been shrinking on me to be her worst song period. It's not baaaad. The luster wore off FAST.</p>`,
      `<p>Ok WHAT THE FUCK is this and where can I get MORE of it.</p>`,

      `<h4>4. i like the way you kiss me by Artemas</h4>`,
      `<p>This ACTUALLY came out of nowhere, even more than Hozier. At least the band actually released singles in the past few years that charted. This though? Like who even is this.</p>`,
      `<p>Anyways, this comes out of the genre known as darkwave, and I am already hoping for more songs in this lane, kind of like the Jersey Club movement of 2023(uh oh spoilers?). This song seems so ephemeral, like it's always fading into the background, but somehow in a good way. Idk, but inject this into my veins NOW.</p>`,
      `<p>Another song responsible because of Stranger Things, but not because of the show itself. The bully of the show actually has a music career, and wow.</p>`,

      `<h4>3. End of Beginning by Djo</h4>`,
      `<p>This already feels like a CLASSIC, like it was made from the 1980s from the likes of Bowie. Also, the lyric "you take the man out of the city not the city out the man" hits right now, and it's delivered with such passion.</p>`,
      `<p>Wow. This is amazing.</p>`,

      `<h4>2. II MOST WANTED by Beyonce ft. Miley Cyrus</h4>`,
      `<p>This is hands-down the best thing I've heard from both of the artists, possibly ever. The fact that both of these artists haven't explored country, either ever or for a very long time. This is also the most chemistry Beyonce has had in a long time, and this including the album with her HUSBAND. Gonna be one of my most played this year. Will talk more about this at the end of the year.</p>`,
      `<p>Would've EASILY been my #1, but I couldn't ignore this...</p>`,

      `<h3>Exceptional+ Tier</h3>`,
      `<p>I might need to have higher standards for this tier, at least for the near future. This is not only the best of the best, but songs that go further beyond. This is honestly one of the only times that this tier fits honestly.</p>`,
      `<p>But before we reveal the obvious pick, let's go to something I missed.</p>`,
      `<p>If you guys have looked carefully, I skipped over a song. There are currently 18 songs in the ranking. And I specifically left off one NUMBER in here. That number is 7, and here's the reason why: 7 Minute Drill by J. Cole.</p>`,
      `<p>This was a response track to someone, and it was probably one of the WEAKEST responses ever; fucking Rap Devil had more credibility as a response to Kamikaze(which as an album aged horribly). And the main reason I'm not officially putting this on the list is because 2 days after the Might Delete Later project dropped with the response track, he RETRACTED, APOLOGIZED, and DELETED the track from all streaming services. Somehow, the song I didn't acknowledge for debuted at number 16 and left the chart and probably broke a record, BUT THIS SONG debuted at #6 and completely left the chart.</p>`,
      `<p>Anyways the song J Cole responded to might be the greatest and most impactful hip hop song this decade.</p>`,

      `<h4>1. Like That by Future and Metro Boomin ft. Kendrick Lamar</h4>`,
      `<p>First Person Shooter was a fucking mistake. Kendrick just turned in his best feature in the pop world. TO BE FAIR, the other verses were on Taylor Swift and Maroon 5 songs. But this verse singlehandedly made Metro Boomin and Future's album the best selling album of the year over Ari. Again I will talk more about this at the end of the year, but holy shit. What a song.</p>`,

      `<p><strong>Season Score: 61/95</strong> — 64.2%.</p>`,

      `<h3>Song Recommendations</h3>`,
      `<ul>
        <li><strong>Overcompensate</strong> by Twenty-One Pilots — Best produced song by them. Can't wait for Clancy.</li>
        <li><strong>Bling-Bang-Bang-Born</strong> by Creepy Nuts — Goofiest song of the year.</li>
        <li><strong>Lil Freak</strong> by bbno$ — Another goofy song sampling the Rick James song, pretty funny. Hope bbno$ finally gets a big hit.</li>
        <li><strong>Young Metro</strong> by Metro Boomin and Future ft. the Weeknd — Vibe as hellllll.</li>
        <li><strong>Illusion</strong> by Dua Lipa — This sounds like a Daft Punk song. Need I say more.</li>
      </ul>`,

      `<p>Updates on the best list: I'm sorry that it is taking so long. It's gonna be massive. My honorable mentions and recommendations themselves might actually go over 100, nearly 150.</p>`,
      `<p>Ima work on part 1 very soon. For now, signing off.</p>`
    ]
  },
  {
    title: "The Worst Hits of 2023... Part 2",
    date: "2024-03-17",
    tags: ["ranking", "2023", "worst"],
    body: [
      `<p>Peso Pluma is not the worst regional Mexican hitmaker this year had to offer. I might not like his music, but Jesus Christ can they ever make a good song?</p>`,
      `<h4>14. TQM by Fuerza Regida</h4>`,
      `<p>First off, I want to acknowledge the "lyrics" of this song, even though usually, the lyrics do not matter to me when assessing the quality of non-english-language songs. But this is lyrically just Gucci Gang, a bunch of flexing and brand names over and over, specifically for Bass Pro shops? Why?</p>`,
      `<img src="assets/posts/worst-2023-part-2/img1.jpg" alt="Screenshot of a Bass Pro Shops advertisement referencing TQM by Fuerza Regida">`,
      `<p>Oh wow, they actually used it as advertisement for the song.</p>`,
      `<p>Now, the main issue I have is that, unlike La Diabla, the guitar playing is so aimless and scattered to the point where it doesn't have a melody. And the main guy's voice does not emote anything interesting or... anything really. This is just really bad.</p>`,

      `<p>This is probably more eligible for next year, but no. This provoked such a VISCERAL reaction out of me that I couldn't leave it off the list this time.</p>`,
      `<p>And people seem to like it???</p>`,
      `<h4>13. Lil Boo Thang by Paul Russell</h4>`,
      `<p>At first, this is just a song that samples an old song, but its lyrics provoked this reaction. This is lyrically the same as Treat You Better. Just some "nice guy" trying to steal away someone else's girlfriend. The fact that it is done in this cheery ass tone makes this even worse, as it's trying to trick everyone else that it has any sort of goodwill. I mean how else was it able to convince TikTok that this was JUST a danceable jam and nothing else other than its runtime being 2 minutes. I hate the TikTokification of music where everything is built around a 7 second clip and has no substance outside of it.</p>`,

      `<p>We need to ban sampling.</p>`,
      `<h4>12. Red Ruby Da Sleaze by Nicki Minaj</h4>`,
      `<p>And of course this choice of sampling makes EVEN LESS SENSE than the previous, probably the worst choice of sampling. The fucking UH OHHHHH UH OHHHH from the one song WE ALL KNOW is supposed to reflect a sense of menace. And Nicki Minaj uses it to diss everyone again, beefing with popular female rappers AGAIN. It's such an old move, she did this with Cardi B ALREADY, and she does it AGAIN with calling out her face surgery???</p>`,
      `<img src="assets/posts/worst-2023-part-2/img2.jpg" alt="Screenshot of Nicki Minaj lyrics dissing a rival rapper's plastic surgery">`,
      `<p>She references calling another female rapper an entitled Karen, when her career is proliferated with just her fans trying to get her hit to number 1 and her complaining about it.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img3.jpg" alt="Screenshot of Nicki Minaj lyrics calling a rival rapper an 'entitled Karen'">`,
      `<p>And she then references KARL MALONE when her current partner is an alleged rapist.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img4.jpg" alt="Screenshot of Nicki Minaj lyrics referencing Karl Malone">`,
      `<p>Can we get this woman off the charts... oh wait Pink Friday 2 became a commercial success... <strong>SIGHS</strong>.</p>`,

      `<p>I am including both of these in one spot because they are pretty minor hits of 2022 more than 2023, but somehow got onto this list. Our first stinker is pretty... conspiracy-theory-core.</p>`,
      `<h4>11. Victoria's Secret by Jax</h4>`,
      `<p>God I thought I would never cover this song. But here I am.</p>`,
      `<p>The premise of this song is calling out standards by fashion magazines and brands. But it is executed SO POORLY, it seems like a revelaion that Victoria's Secret was founded by a man and that was the most evil thing they have heard. It does nothing to actually call out this, such poor framing.</p>`,
      `<p>It also doesn't help that the chorus sounds ass. I guess it's really supposed to be punk rock and standing up against the man but like... it only has that guitar that just leaves absolutely zero punch. This is the most nothing song about something that should be cared about more, but isn't performed in the most engaging way.</p>`,
      `<p>Now 10 is actually just by a despicable person.</p>`,
      `<h4>10. Unstoppable by Sia</h4>`,
      `<p>This is old news, but the reason Sia is so hated now is her extremely weird relationship with Maddie Ziegler, and that whole movie where she just made fun of autistic people.</p>`,
      `<p>Oh right the actual song. Well this has gotta the worst version of Fight Song by Rachel Platten we've ever had. What are these WEAK ASS LYRICS:</p>`,
      `<img src="assets/posts/worst-2023-part-2/img5.jpg" alt="Screenshot of weak Unstoppable lyrics by Sia">`,
      `<p>Doesn't armor show you need protection?</p>`,
      `<img src="assets/posts/worst-2023-part-2/img6.jpg" alt="Screenshot of the Unstoppable chorus lyrics by Sia">`,
      `<p>This is the chorus, so meaningless and powerless.</p>`,
      `<p>That's most of the song, and it also sounds bad, the most basic Sia song, and her worst.</p>`,

      `<p>I once again apologize for my horrendous take on last year's best list. Now what if I told you they another song, with none of the personality and character that made the last song interesting.</p>`,
      `<h4>9. Stand by Me by Lil Durk ft. Morgan Wallen</h4>`,
      `<p>First of all, why the fuck are there millenial whoops throughout the song? I thought we left that with Lose Somebody by Kings of Leon, which this song clearly rips the whoop from. And oh wow, of course Morgan Wallen writes about standing by him after "the world tries to keep him down", totally not because he did or say heinous shit, like saying a racial epithet in a drunken frenzy. Nothing of that sort. Lil Durk's lyrics are so boring too, just talking about how he didn't cheat on his girl by skipping the red district? Who are you, Andy Grammer?</p>`,
      `<p>Also yet again, this song sounds horrible. Not only that, it sounds like NOTHING. This is GENRELESS, not hip hop or country, not even rock or anything close to it. I wonder who produced this...</p>`,
      `<img src="assets/posts/worst-2023-part-2/img7.jpg" alt="Screenshot revealing the producer credits for Stand by Me">`,
      `<p>I mean y'all knew where I was gonna go with this joke. But here's the thing: he used to be GOOD AT HIS JOB. Why do you guys think Katy Perry had a career?</p>`,
      `<img src="assets/posts/worst-2023-part-2/img8.jpg" alt="Screenshot referencing the producer's past work with Katy Perry">`,
      `<p>Oh god...</p>`,

      `<p>Let's go back to a late night in 2023, where I watched SNL for the first time in a long time. And I saw the most incomprehensible performance I've ever seen. And I thought I would never, NEVER think about that song. Funny thing about SNL, all the songs performed have some sort of popularity. And well...</p>`,
      `<h4>8. Waffle House by the Jonas Brothers</h4>`,
      `<p>I remember the Applebee's song of 2022, Fancy Like, one of the most hated hits of 2022. I didn't think it was that bad. But the promotion through TikTok and being in the ads helped it. Now I don't think Waffle House has commercials, but this would ABSOLUTELY be in a commercial. And the way that Waffle House is used as a way to resolve beef between brothers. The keening pianos also HURT me, the key is too sharp for my ears to handle this. And it overpowers whatever the FUCK the Jonas Brothers are saying.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img9.jpg" alt="Screenshot of Waffle House lyrics by the Jonas Brothers">`,
      `<p>I had NO IDEA what the line after the Waffle House one was... and it is made extremely awkward that Joe says it...</p>`,
      `<img src="assets/posts/worst-2023-part-2/img10.jpg" alt="Screenshot of the awkward line sung by Joe Jonas in Waffle House">`,
      `<p>It's always love huh? Jesus...</p>`,

      `<p>Hi Erin, ready to be pissed off again?</p>`,
      `<h4>7. Nonsense by Ariana Gr... I mean Sabrina Carpenter</h4>`,
      `<p>Let's get into the most obvious jab, this really sounds like a low-rate Grande song; I'd take "yes, and" and all of its baggage over this. I don't know how her voice sounds this uncanny and awful the past few hits(YES I STILL HATE SKIN IT SOUNDS HORRENDOUS AND HER TAKING THE "MORAL HIGH GROUND" WAS A STUPID MOVE, WORST SONG OF 2021), but yeah, I guess that's the world we live in.</p>`,
      `<p>And the lyrics are pure... malarkey.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img11.jpg" alt="Screenshot of Nonsense lyrics by Sabrina Carpenter">`,
      `<p>BABBLING in a hit song, the FUCK.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img12.jpg" alt="Screenshot of Nonsense lyrics mentioning babbling">`,
      `<p>I swear I don't hear cartwheels at ALL here.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img13.jpg" alt="Screenshot of Nonsense lyrics mentioning cartwheels">`,
      `<p>Really, she really had to say this.</p>`,
      `<p>THAT IS one of the forgettable Rihanna and DJ Khaled hits ever.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img14.jpg" alt="Screenshot of Nonsense lyrics referencing a Rihanna and DJ Khaled hit">`,
      `<p>Why.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img15.jpg" alt="Screenshot of more Nonsense lyrics by Sabrina Carpenter">`,
      `<p>It should've not made it...</p>`,

      `<p>I thought we as a society got rid of him for good. Like come on. I have been ranting about cancel culture and WE STILL HAVEN'T GOTTEN RID OF HIM. AND we gave him his biggest hit in years.</p>`,
      `<h4>6. Under The Influence by Chris Brown</h4>`,
      `<p>Ughhhhhh. He sounds even worse on this. And it is INTENTIONAL, trying to make him sound like a drunk Muppet. The production sounds like I'm drowning, especially after the chorus hits. I mean is this really the best way to show that you are high on cough syrup of all things?</p>`,
      `<p>And the lyrics...</p>`,
      `<img src="assets/posts/worst-2023-part-2/img16.jpg" alt="Screenshot of Under the Influence lyrics by Chris Brown">`,
      `<p>Vague as shit, but it also sounds like hurricane on dat ASS for no reason.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img17.jpg" alt="Screenshot of Under the Influence lyrics referencing a hurricane">`,
      `<p>FUCK YOU.</p>`,
      `<img src="assets/posts/worst-2023-part-2/img18.jpg" alt="Screenshot of Under the Influence lyrics referencing video evidence">`,
      `<p>Yeah because video evidence would do enough to put you away for GOOD.</p>`,
      `<p>So how did this get popular? Well, what if I told you that it was COMPLETELY grassroots, as in fucking Tiktok promoted this track from 2019, the same album as his Drake collab, and used a lyric as part of it:</p>`,
      `<img src="assets/posts/worst-2023-part-2/img19.jpg" alt="Screenshot of the 2019 lyric used in the TikTok trend that revived Under the Influence">`,
      `<p>The worst part is that this isn't the lyric, people were using "Your Body LANGUAGE speaks to me", which is just wrong.</p>`,
      `<p>Please get him out of the pop atmosphere for GOOD this time.</p>`,

      `<p>Alright that is part 2, part 3 will out soon, hopefully before the Spring ranking...</p>`
    ]
  },
  {
    title: "The Best Hit Songs of 2023... Part 1",
    date: "2024-06-11",
    tags: ["ranking", "2023", "best"],
    body: [
      `<p>FINALLY. After 6 months I finally have gotten a list of hit songs together in order to even write it. I have gone through almost 300 ELIGIBLE songs due to Billboard's screwy tracking year. I am also terrified to write this, as I don't know if I can fully convey how much I do love these songs on the list.</p>`,
      `<p>One way that is definitive of this though, the sheer length. The best list itself will be 5 parts, where part 4 is dedicated to all the non-eligible songs I listened to. Most songs I discovered this year were not even released or popular this year. And we will start at number... 35.</p>`,

      `<p>Yes, I have found THIRTY FIVE songs(with a few painful cuts along the way that I will get into). Without further ado...</p>`,
      `<p>Wait, what's the reverse of 35? The first big musical moment of 2023.</p>`,
      `<h4>35. Bizarrap Music Sessions Vol. 53 by Bizarrap ft. Shakira</h4>`,
      `<p>I haven't formally introduced the biggest thing on the Global charts in 2023... Bizarrap.</p>`,
      `<p>He's a Colombian DJ whose whole gimmick is to create electronic and house beats and lesser-known artists jump on his beat and freestyle over it. However, the Music Sessions became so popular that the most popular Spanish artists collaborated with him, like Nicky Jam, Anuel AA, Rauw Alejandro, and the biggest one of all... no NOT Bad Bunny somehow... Shakira.</p>`,
      `<p>Shakira had two MASSIVE hits globally with this and TQG with Karol G, the artist who made my #1 best hit of 2022. And they are both about the same thing: her ex, Gerald Pique, CHEATED on her. She and Karol G both TORCHED their exes (Karol G's happened to be Anuel AA funnily enough), and Shakira straight up NAME DROPS the ex AND HIS NEW GIRLFRIEND(Clara Chia Marte).</p>`,
      `<img src="assets/posts/best-2023-part-1/img1.jpg" alt="Screenshot of lyrics naming Gerard Piqué">`,
      `<img src="assets/posts/best-2023-part-1/img2.jpg" alt="Screenshot of lyrics naming Clara Chía">`,
      `<p>Shakira plays off this bouncy beat perfectly to complement the scathing lyricism, leading to one of the biggest hits of the year... except in America where it hit 97 on the Year End. Yeah we as a nation need better taste in music.</p>`,

      `<p>Do we even HAVE a DJ or a producer as big and can make quality music like Bizarrap?</p>`,
      `<p>YES.</p>`,
      `<h4>34. Too Many Nights by Metro Boomin, Don Toliver, and Future</h4>`,
      `<p>Heroes and Villains by Metro Boomin was surprisingly a smash hit machine of an album. It had the sample-flip, pop hit Creepin, the sticky banger of Superhero, a song I'll talk about later, and this as the main 4 hits, where the others were fairly successful sleeper. This was such a success that Metro made the soundtrack of the Spiderman movie, which is honestly a HUGE deal because of how goddamn huge the LAST soundtrack was(Sunflower is still one of the best hits of all time and will never age badly). That soundtrack SHOULD'VE been as big as the last one too, Annihilate is still really good.</p>`,
      `<p>This song is kind of the introduction to the Spiderman soundtrack, extremely dark sounding and chilled out, this whole album is full of nighttime vibes. And of course Don Toliver and Future fit perfectly in this atmosphere, although other artists can compete as I've referenced before. Nothing much else to say, except that talking about Metro now considering everything that happened WHICH I WILL GET TO IN THE SUMMER RANKING. Of course everything in the event just blew up further and out of proportion.</p>`,

      `<p>I did not expect Gunna to make any song of quality. Like EVER.</p>`,
      `<h4>33. Fukumean by Gunna</h4>`,
      `<p>And this is his biggest hit because everyone seemed to like this, being extremely strong of streaming for an entire year, making this year's YE list as well. Who could blame them, he just casually made one of the stickiest hooks of all time while introducing the mainstream to a new WORD. And a new ad lib, the nyeahh after every line is just... chef's kiss. Again, this is a vibe. I will try to explain beyond this, but for this song, this set of nothing lyrics? It's so self-evidently a vibe, and needs no explanation. And fucking GUNNA made this. AKA the most mid rapper ever conceived. Who knew.</p>`,

      `<p>So I already referenced the second-least relevant #1 hit ever being My Universe by Coldplay ft. BTS. The reason I said that is because it crashed out of the Hot 100 fast, and had the farthest fall from its #1 debut to #22, something that even the worst hit couldn't even beat, and that #1 wasn't even debut. The stan manipulation of buying songs is the biggest impact on the charts, especially when we have pop song dead periods like 2022-23, where not a lot of big events happen. Even the Shakira song didn't last that long on the Hot 100. So what else could make a historical fall from #1? A member of BTS. Such a shame, this is easily the biggest grower of the year for me.</p>`,
      `<h4>32. Like Crazy by Jimin</h4>`,
      `<p>This song is way better than it has any right to be honestly. And it fell from #1 TO #43. At least Cardigan by Taylor Swift barely missed it, this never had a chance.</p>`,
      `<p>The synth work in this song is pretty good, especially after the first pre-chorus, and Jimin just sounds great, and contributes to the best part of the song: the bridge. That shit sounds magical with the synths and the upward melodies, I can feel my body float.</p>`,
      `<p>This whole song feels like a soft pillow putting me to rest.</p>`,

      `<p>You know who's NOT the most mid rapper ever. He's not even a rapper. Post Malone. He's very above average, and his hits are legendary, like the aforementioned Sunflower. But holy shit, has he gone on a cold streak. It all started with the much forgotten flop, Motley Crew, where he ATTEMPTED to be a rapper and failed with this chorus that sounds like he's squealing like a pig. Then, he had the worst hit of 2021 of One Right Now, where he somehow made a song with the Weeknd and made the sludgiest song ever.</p>`,
      `<p>The cold streak stopped this year.</p>`,
      `<h4>31. Chemical by Post Malone</h4>`,
      `<p>I wasn't behind this song at first, I really wasn't. But something about this driving flow and simple lyrics and structure made me drawn to it. It's almost like Post Malone KNOWS HOW TO MAKE POP HITS. Maybe he should stop collaborating with other pop stars like Morgan Wallen, the Weeknd, and even Taylor Swift now. Just make pop songs about being miserable like Circles. ABUSE THOSE DRUGS POSTY.</p>`,
      `<p>Ok that's a little too far. But the theme of the song is the played-out "relationships are drugs" that Eminem always references in an album cut, but it's done right this time, there aren't any obvious, shoehorned references to it this time. It's a METAPHOR not a SIMILE.</p>`,

      `<p>Now for the first country song on the list. And it's from the best... SECOND-best country artist on the list.</p>`,
      `<h4>30. Love You Anyway by Luke Combs</h4>`,
      `<p>Here's a cheat code to make ANY good pop song. Listen to this: add violins. Just do it. I swear that every pop song that has this that I've listened to is good. YES THIS INCLUDES Said Sum by Moneybagg Yo, how did you make that example. Huh. Anyways.</p>`,
      `<p>The violins already drew me to this because they already made me think the song is in a somber tone. And the lyrics are surprisingly... defeatist? This is supposed to be a LOVE song about how all these things that this woman would do to him and he would love her anyway. But the tone set makes him sound... like a simp? This reason is the only reason this isn't at least 20 spots higher, because it sounds fantastic with the pedal steel underlying the whole rich mix of the song.</p>`,

      `<p>We immediately follow this with the best country artist in the mainstream today. Zach Bryan.</p>`,
      `<h4>29. Hey Driver by Zach Bryan ft. The War and Treaty</h4>`,
      `<p>Country is ruled by these extremely husky and gritty-voiced singers that convey a more natural tone in country, not the schlock that Nashville fed us for a long time. Zach Bryan is the best of these, and he made a song about goddamn HITCHHIKING be great.</p>`,
      `<p>The funny thing is Zach Bryan is the worst part of the song, the War and Treaty, an African American country duo(that also sang the national anthem for the Super Bowl off the popularity of this song), is just fantastic. They made a hitchhiking song sound like it was important and grand with the booming gritty voice of Mike Trotter. Zach Bryan is the cherry on top, being in a hilarious fight with God, and telling the driver this. Great song, not the best Zach Bryan hit of the year.</p>`,

      `<p>How the FUCK have we not gotten an Afro RnB hit until now?</p>`,
      `<h4>28. People by Libianca</h4>`,
      `<p>This is an excellent example of that genre, from Cameroonian-American singer Libianca. HOLY SHIT is this a personal song, and it blew up on the Global chart enough to make it. This is about wondering if the people around her are getting the wrong impression of her because of her hiding her own mental condition for everyone. JESUS. And the detail that hits the hardest is right after saying she drinks a lot of alcohol, is that people think she smokes because of how red her eyes are, but that was just her crying.</p>`,
      `<p>The instrumental is an extremely laid-back drum beat that just knew it was background noise for the gut punch that was these lyrics. With everyone checking up on their own mental health, we need a song like this.</p>`,

      `<p>I can't believe this sentence is real but: a KPOP hit SLOWLY rose up the charts because the mass majority like it. It's so unfortunate that a bunch of label drama just made sure this group is now a one-hit wonder now.</p>`,
      `<h4>27. Cupid by FIFTY FIFTY</h4>`,
      `<p>The label drama being 3/4 members were kicked out due to breach of contract because the label did not disclose financial information and neglected their mental health(it's the KPOP industry, they PUMP out artists like no tomorrow). The agency terminated their contracts and the 3 singers' reputations were ruined.</p>`,
      `<p>They made a really, REALLY good song. It is a song about how we are never gonna find love over this bubbly pop song, pretty basic formula. But it works. It even has a KPOP girl group RAP verse as usual, and it's ACTUALLY good. Plus the key change(which I'm still mad the English version doesn't have) is so good.</p>`,
      `<p>One of my old rankings had this song in the top 5. IM TELLING YALL this list is stacked, and we have one more song in this part.</p>`,

      `<p>I fucking hate UTOPIA by Travis Scott. Somehow this is a hot take. We need someone ELSE to make Travis Scott hits. I did not think that person is SZA.</p>`,
      `<h4>26. Low by SZA</h4>`,
      `<p>The distortion on the usually angelic voice of SZA and dark tone of the beat works really well with the theme of the song, keeping a relationship of the low, possibly due to celebrity status, or just straight up cheating on her partner. The Travis Scott ad libs surprisingly tie the whole thing together, making it sound less stale overall. I would have probably gotten tired of the amazing sound of the song if there was no ad libs honestly. Nonetheless, great sound, a low energy banger through and through.</p>`,

      `<h3>Honorable Mentions Part 1</h3>`,
      `<p>We have a lot to get through.</p>`,

      `<h4>Rich Baby Daddy by Drake ft. Sexyy Red and SZA</h4>`,
      `<p>THE ONLY GOOD DRAKE SONG THAT QUALIFIED. For All The Dogs just had so much shit. Thank god he made a vibey Miami bass song where SZA AGAIN kills it and Sexyy Red made a really good hook.</p>`,
      `<p>BRING THAT ASS OVER. LET THAT COOCHIE BREATHE.</p>`,
      `<p>Gotta be the most iconic opening to a chorus in a pop song.</p>`,

      `<h4>Snooze by SZA</h4>`,
      `<p>Such a vibe. Why the fuck does an acoustic version with Justin Bieber exists.</p>`,

      `<h4>Fast Car by Luke Combs</h4>`,
      `<p>Two covers made it to the YE. This is the SIGNIFICANTLY better one, the warmth of the country-ness of the song just made the cover work. Can we never make EDM covers of this song please?</p>`,

      `<h4>Ella Baila Sola by Eslabon Armado ft. Peso Pluma</h4>`,
      `<p>This has always been THE Regional Mexican hit of the year, the farty horns and the... guitars(I think?) make a really sticky song. This song doesn't have a hook, it IS the hook.</p>`,

      `<h4>TQG by KAROL G ft. Shakira</h4>`,
      `<p>Already talked about this. Shakira having a dominant 2023 after being on a shit BEP-David Guetta collaboration was not on my bingo card.</p>`,

      `<h4>El Merengue by Marshmello ft. Manuel Turizo</h4>`,
      `<p>WAYYYY better than La Bachata. This sounds a lot better than I thought too, Marshmello is a hot and cold artist(might have to talk about the cold in the Summer Ranking)</p>`,

      `<p>And then finally, my second-biggest grower of the year.</p>`,

      `<h4>SEVEN by Jung Kook ft. Latto</h4>`,
      `<p>I HATED this song, easily a worst song contender from first listen. Over time, I did start liking the Latto contribution and the two-step, UK garage beat, which I didn't think was gonna be on a KPOP song, but productions on KPOP songs have been really dynamic. This song is also pretty hilarious.</p>`,

      `<p>Alright FINALLY STARTED on this shit, summer ranking and part 2 out "soon"!</p>`
    ]
  },
  {
    title: "The Summer 2024 Billboard Top 20 Ranking (and notes on the worst list)",
    date: "2024-07-11",
    tags: ["ranking", "2024", "summer"],
    body: [
      `<p>Pop music is back. 2022 and 2023 were dull as shit in terms of pop culture events. This first half of the year SINGLEHANDEDLY makes the last 2 years age like ass. And before you guys all say "then why do you have 35 songs on the best list?", I will say that the worst list is also pretty long and is SINGLEHANDEDLY ruined by the fact that the worst top 2 ever (on the list AND ON THE CHART) had the most successful and second-worst hit of the year and the worst hit in the 21st century.</p>`,
      `<p>Yes, Try That In A Small Town is that bad, even worse than the worst hits of the 2010s, which includes an ALARMING amount of rape and terrible people, especially in the rap scene.</p>`,
      `<p>I was gonna do either a whole essay on this song or not talk about it; I've chosen to not talk about it (I REALLY do not feel equipped to do so), except one thing that I feel like should scare you guys off from even trying to listen to it: the video. The song itself is about vigilante justice, where the "shit may fly in the city" is not flying in small towns. This is already a horrible concept for a song, but the video and context of the artist makes it... uncomfortable. The video for this song, this GODDAMN song, was in front of a courthouse most famous for a lynching. And this song. Is a FUCKING LYNCHING song, where Jason Aldean, someone who has publicly posted himself with Trump merch and has gotten caught with blackface at a Halloween party, wants to extralegally murder anyone with different beliefs than him. The undertones of ugly, racial hatred are extremely obvious.</p>`,
      `<p>This is why I didn't want to do a segment on it AT ALL. This was easily the worst music discourse since the Blurred Lines shitshow which 1. is extremely pushy towards AT BEST and 2. singlehandedly destroyed copyright law when it comes to pop music. This discourse on Try That was so bad and overshadowed the worst list so bad that I definitely forgot the fact I forgot to put a song or certain artist/s on the worst list, and I'll save that to after all the recommendations.</p>`,
      `<p>So finally, let's talk about the genuinely great pop music scene we have, by starting off with... no dogshit.</p>`,
      `<h3>Terrible Tier</h3>`,
      `<p>For the first time, I will not be putting any songs in the terrible tier. The summer of 2024's scene is STACKED.</p>`,
      `<h3>Bad Tier</h3>`,
      `<p>The most obvious collaboration of all time.</p>`,
      `<h4>20. I Had Some Help by Post Malone ft. Morgan Wallen</h4>`,
      `<p>Peak: #1, Current: #1</p>`,
      `<p>I really wish the big hits from Morgan Wallen were... better than ass. It doesn't surprise me that Post Malone did this either, as he is now doing a full country album soon, but is also on a little of a cold streak sans the 2023 hits. The song itself sounds fine, good even. It's just the lyrics as them blaming the bartender "helping them" get drunk by bringing their bottles off the shelf. It just comes off as two guys who don't want to take accountability.</p>`,
      `<p>Why the fuck is ANOTHER bad collaboration between Kane Brown and Marshmello becoming a hit.</p>`,
      `<h4>19. Miles On It by Marshmello and Kane Brown</h4>`,
      `<p>Peak: #21, Current: #24</p>`,
      `<p>This song just feels so formulaic. Yes, pop songs are kind of formulaic through focus group testing and label pushes, but come on. This is supposed to be a... country song? A pop song? All I hear is a stiff-ass, Marshmello-in-2019 ass groove and a grating chorus, where I can't even count the effects they put on Kane Brown's voice. I was REALLY getting around to him, with One Mississippi being one of the best hits in the 2020s, and [REDACTED] being a follow up to the bland Thank God. Ughhhh CAN YOU PLEASE GET CONSISTENT.</p>`,
      `<h4>18. Gata Only by FloyyMenor X Cris Mj</h4>`,
      `<p>Peak: #32, Current #39</p>`,
      `<p>"SAY THE LINE." Fine.</p>`,
      `<img src="assets/posts/summer-2024/img1.jpg" alt="Selfie of the author mid-writeup">`,
      `<h3>Mid Tier</h3>`,
      `<p>I am not gonna lie, this tier is really draining to write about. I think I wanted to shorten the ranking for this tier alone. There's not really much to say other than: "This just sounds like a song that's in the mid tier." It's not really interesting, and it doesn't sound good or bad. At least with the lower two tiers I can write about it. Anyways...</p>`,
      `<h4>17. Stargazing by Miles Smith</h4>`,
      `<p>Did we not really just "kick out" Ed Sheeran for making mediocre folk pop. He made Subtract to make the same move Taylor Swift did when she released folklore and evermore. However, the biggest hit that came from Taylor was willow, one of the most beautiful sounding songs ever recorded. The hit Ed Sheeran had was fucking Eyes Closed. The jokes write themselves with that song, with that song having Max Amrtin on it to make ONE of the songs from the CLEARLY non-pop record a hit. They made Visiting Hours (one of the best songs Sheeran has EVER recorded) if you watered it down so hard it can break the Hoover Dam.</p>`,
      `<p>Anyways Stargazing is just a folk pop song that exists I guess.</p>`,
      `<p>SPEAKING of Taylor...</p>`,
      `<h4>16. Fortnight by Taylor Swift ft. Post Malone</h4>`,
      `<p>TTPD, from what I have heard, is just a wispier, worse-sounding version of Midnights, and the big hit from the album perfectly encapsulates this. Why the FUCK is Post Malone here? Maybe the country angle was warranted...</p>`,
      `<h4>15. Where It Ends by Bailey Zimmerman</h4>`,
      `<p>So Bailey Zimmerman is supposed to this replacement for Morgan Wallen, he blew up through TikTok and has a similarly rough voice.</p>`,
      `<p>So why is his songs not hitting? Because, for as much shit as everyone is giving Wallen (which is justified), he is just a more interesting artist, at least sonically (remember I am the Broadway Girls apologist, where almost everyone else despises that song for being a PR move, being the first one after he said racial epithets).</p>`,
      `<h4>14. One of Wun by Gunna</h4>`,
      `<p>And Gunna is back to producing mid songs with his sleepy-ass voice and beat selection.</p>`,
      `<p>THIS IS NOT WHAT I MEAN BY GIVING HOUDINI A RADIO PUSH.</p>`,
      `<h4>13. Houdini by Eminem</h4>`,
      `<p>I really hope the album isn't as bad. What I can say this is at least better than most of the recent Eminem songs, where he takes himself too seriously. But like... he still has some of the most baffling lines in his songs.</p>`,
      `<img src="assets/posts/summer-2024/img2.jpg" alt="Screenshot of a baffling Eminem lyric from Houdini">`,
      `<img src="assets/posts/summer-2024/img3.jpg" alt="Screenshot of another baffling Eminem lyric from Houdini">`,
      `<img src="assets/posts/summer-2024/img4.jpg" alt="Screenshot of a third baffling Eminem lyric from Houdini">`,
      `<p>Like what the actual fuck are these lines.</p>`,
      `<h3>Decent Tier</h3>`,
      `<h4>12. BAND4BAND by Central Cee ft. Lil Baby</h4>`,
      `<p>Wow, this is really just a good Central Cee brought down by Lil Baby. I swear, even the BEAT doesn't do well for him. THis is only here from how Central Cee plays with the beat.</p>`,
      `<h3>Good Tier</h3>`,
      `<p>This started as just me reductively saying this was just a "Say So" clone. I regret it now.</p>`,
      `<h4>11. Espresso by Sabrina Carpenter</h4>`,
      `<p>Sabrina Carpenter has finally become a consistent hitmaker after 10 years in the business. I'm pleasantly surprised, I honestly thought "Skin" was the last of it. This is just a really swanky summer jam filled with goofy lines that are gonna be in commercials (Nintendo is gonna eat this shit up).</p>`,
      `<h4>10. Birds of A Feather by BIllie Eilish</h4>`,
      `<p>The instrumental just reminds me of the slower ballads of fucking HAMILTON. It does sound pretty good, it's just hilarious that I can imagine Aaron Burr singing over this beat. I'm still surprised that this is getting the second hit treatment over... well I'll hold that for later.</p>`,
      `<p>The hit from the Metro Boomin that is not as important.</p>`,
      `<h4>9. Type Shit by Future, Metro Boomin, Travis Scott, Playboy Carti</h4>`,
      `<p>First of all, I really like this dark, brooding beat, filled with church bells. Future has always worked well over this, but I'm also surprised about the other two people on the song. Travis Scott's part is short, but is also better than most of UTOPIA. And Carti? HE FINALLY USED HIS LOWER REGISTER CORRECTLY. Carnival? Bad. That god awful Camila Cabello song I will acknowledge eventually? HORRID. This? Way better. Still the worst part of the song, which is why it's not in...</p>`,
      `<h3>Excellent Tier</h3>`,
      `<p>Speaking of that first single and song that SHOULD be the second single.</p>`,
      `<h4>8. LUNCH and 7. CHIHIRO by Billie Eilish</h4>`,
      `<p>Starting with LUNCH. There hasn't been anything this gay this high on charts since fucking MONTERO. The instrumental on this is fantastic, who knew that having a really groovy bass a la Too Sweet sounds great? Then it breakdowns into a rougher sound at the very end and it's also really good. This is kind of a return to form in turns of her album success, her last one has two hits and only one made the Year-End being Happier Than Ever.</p>`,
      `<p>CHIHIRO is the best sounding hit I've heard from Billie. Even better than Happier Than Ever. I just really like the synth permeating throughout the song. And the other part of this instrumental sounds like a really cool underwater beat that reminds me of DAKITI by Bad Bunny. Finneas keeps on impressing throughout his sister's entire discography.</p>`,
      `<p>More lesbians on the charts???</p>`,
      `<h4>6. Good Luck Babe! by Chappell Roan</h4>`,
      `<p>I FINALLY get to talk about this girl. I've heard really good things about her songs, some are charting right now in Red Wine Supernova and others. And they are very gay, especially this one. However, it takes a twist where this girl that clearly did love her at one point but is conforming to heteronormativity, oressuring her into just dating guys out of the risk of social suicide. Jesus. Repression of feelings in general is just bad enough, but THIS? Insane first impression. I'm gonna go listen to Red Wine Supernova and prolly put it #1 if it qualifies. (I'm not joking)</p>`,
      `<h4>5. Pink Skies by Zach Bryan</h4>`,
      `<p>The only reason this is just #5 is that it's a small, sparse country song that talks about someone that passed and that their legacy is being remembered fondly. But guys. IT'S A ZACH BRYAN SONG. He's made some of the best songs ever made, and this is probably the lowest I would place him in a ranking. He's just so good.</p>`,
      `<p>Wait... country is pretty successful as of late. What's its biggest hit?</p>`,
      `<h4>4. A Bar Song (Tipsy) by Shaboozey</h4>`,
      `<p>Wow. THis guy came out of almost nowhere. But also, he was on Beyonce's album, which is guaranteed to get attention. Actually, they are the two first Black artists to be #1 and #2 on the country charts (wonder why...).</p>`,
      `<p>The song includes an old sample flip of a crunk song, which would be an idea that's dead on arrival, but it sounds really DAMN good. The earthy tone and the strings that are laced throughout the song really hammers home the idea of togetherness, even if it's in a bar setting. The charts really like these bar songs.</p>`,
      `<p>That would explain the chart straight up got drunk over this next hit, by someone who literally has never charted before.</p>`,
      `<h4>3. MILLION DOLLAR BABY by Tommy Richman</h4>`,
      `<p>Now I'm not gonna talk much about this song at first, but I will talk about one of my scorching hot takes in order to compare to this.</p>`,
      `<p>Training Season by Dua Lipa is a TERRIBLE SONG.</p>`,
      `<p>It uses a sample of Tokyo Nights by Digital Farm Animals, and like most samples used in the mainstream, completely butchers it. They only use the chorus melody in its own, but doesn't have the resolution of Tokyo Nights, a synth breakdown. In fact, this song NEVER FUCKING RESOLVES. It stresses me out every time I listen to it. The bridge tries to convince you it's finally resolves but then it BUILDS UP AGAIN. And the chorus just suddenly halts back into the verse and BUILDS UP AGAIN. It's unnerving.</p>`,
      `<p>Compared to this, where it kinda doesn't resolve in the beat, but it just goes off, Tommy Richman has a pretty colorful voice. This has just the HARDEST bass womps in a pop song I've heard.</p>`,
      `<p>One more note: this guy is in Woodbridge, north of Richmond. So you can say he's a Richman north of Richmond.</p>`,
      `<p>Oh yeah, there's that other really good guy in country, wonder what he's...</p>`,
      `<h4>2. Ain't No Love In Oklahoma by Luke Combs</h4>`,
      `<p>AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p>`,
      `<p>IM STUCK IN A TWISTER AHHHHHHHHHHHHHHHHHHHHHHHHHHHH.</p>`,
      `<h3>Exceptional+ Tier</h3>`,
      `<h4>1. Not Like Us/Euphoria by Kendrick Lamar</h4>`,
      `<p>[currently stuck in a twister, review and spectacle will be saved til next list season]</p>`,
      `<p>Oh, hi this is me from the worst list, the one that wasn't sent through the portal or whatever the fuck happened.</p>`,
      `<p>He'll be back in time for the best list… surely. Even though it's taking him FOREVER TO GET TO PART 5. Whatever. Here's the score and recommendations I guess.</p>`,
      `<p><strong>Season Score: 75/100</strong> — best score ever and most interesting pop scene in years.</p>`,
      `<h3>Recommendations</h3>`,
      `<ul>
        <li><strong>CHIHIRO</strong> by Billie Eilish</li>
        <li><strong>Magnetic</strong> by ILLIT</li>
        <li><strong>Cheerleader</strong> by Porter Robinson</li>
        <li><strong>Places to be</strong> by Fred again.. and Anderson .Paak</li>
        <li><strong>Go Back</strong> by John Summit ft. Sub Focus and Julia Church</li>
        <li><strong>Midwest Indigo</strong> by 21 Pilots</li>
        <li><strong>Red Wine Supernova</strong> by Chappell Roan</li>
        <li><strong>L'AMOUR DE LA VIE</strong> by Billie Eilish</li>
      </ul>`
    ]
  },
  {
    title: "The Best Hit Songs of 2023... Part 2",
    date: "2024-09-21",
    tags: ["ranking", "2023", "best"],
    body: [
      `<p>So I just escaped that Twister... don't know where the FUCK that came from. Anyways, KENDRICK... oh wait this is the best list. And the first part came out nearly 3 months ago... jesus christ what's WRONG with me.</p>`,
      `<p>I promise to finish this before the list season for this year. So let's get into part 2.</p>`,

      `<p>So people definitely still miss BTS. I know their label does, making NewJeans their main cashcow. But, the solo members have ventured off into their own careers, to varying degrees of quality. The most popular out of all the members is definitely Jungkook. I mean he is backed by... Scooter Braun, the same guy that stole Taylor Swift's discography and created an insane ripple effect in pop this year that we will get to much later.</p>`,
      `<p>Jungkook's first two hits... were kinda bad, with 3D being a dishonorable mention that I forgot to mention, and Seven being bad at first, and kinda grew on me. But then he made something that went off WAY harder than it had any right to be.</p>`,
      `<h4>25. Standing Next To You by Jungkook</h4>`,
      `<p>This is definitely the best hit out of all the solo careers, by a landslide. The brass laced throughout the entire song gets me MOVING, it's impossible to listen to this song while not dancing. It gives this early-2000s, Jamiroquai sort of vibe; this slick, tight groove is so fun to listen to. And Jungkook performing on top of this is perfection. And we're only at number 25, I found a lot of good shit this year.</p>`,

      `<p>Lil Nas X has kinda disappeared in the previous few years, which is honestly crazy to say considering the amount of hits pumped out from 2019 and 2021, all of them being very good. However, with his most recent song, J CHRIST, he somehow went back to the pure controversy-bait that his old hits had. He is a great marketer, don't get me wrong. But the song also has to be good on TOP of that. All the controversies were just a launchpad for his success. Just look at his previous hit.</p>`,
      `<h4>24. STAR WALKIN by Lil Nas X</h4>`,
      `<p>Never thought I would see the day that a League of Legends anthem would qualify for this list.</p>`,
      `<img src="assets/posts/best-2023-part-2/img1.jpg" alt="Chart screenshot related to STAR WALKIN by Lil Nas X, the League of Legends Worlds anthem">`,
      `<p>I was surprised that he of all people would make an anthem for THIS game. And what did he decide to do with it? Made a really fun, up-tempo, pop DRILL song.</p>`,
      `<p>Drill spawned from the underground of the Northeast rap scene, and was brought back through the popularization of late artist Pop Smoke. But after, there hasn't been something close to the mainstream that was even as good as Pop Smoke's initial rise(I would say Pop would be that one to do it had it not been for his tragic passing in 2020). In fact, shit like Doja by Central Cee, the biggest British crossover hit we had in years, annihilated its momentum, and it's been reduced to more sampling garbage in the UK. However, there was THIS song and almost, ALMOST brought it back.</p>`,
      `<p>This song is just pure fun, and the pop drill production sounds really, really good. It's also pretty crazy that this doesn't sound out of place in the League of Legends Worlds Anthems(yes I have listened to all of them, none of them are bad, except one). Lil Nas X himself sounds very good over this. Of course, we have an ICONIC lyric:</p>`,
      `<blockquote>"Been that [redacted] since I came out my momma<br>Thanking god daddy never wore a condom"</blockquote>`,
      `<p>Only he can say shit like this.</p>`,
      `<p>I also want to mention that the reception of this song in the League community specifically was negative. People didn't think this song was that good. Or, this was a song made by a black gay man, and the League community is EXTREMELY TOXIC. And they also have no taste in music, judging by the positive reception of the anthem after this one: GODS ft. NewJeans. This song is FUCKING AWFUL. They made some very good songs, but jesus christ, what is the chorus.</p>`,

      `<p>WOW LOOK, a positive contribution from Travis Scott. It only took Metro Boomin and Young Thug to carry him. Never would I think that THugger would carry the Fortnite concert man but... yeah that's what we've come to.</p>`,
      `<h4>23. Trance by Metro Boomin ft. Travis Scott and Young Thug</h4>`,
      `<p>This is mostly here because of the production. The soft bass pulsing is such addicting, and Young Thug and Travis Scott do very well on here, especially Young Thug. The lyrics here... kinda don't matter? There's not even a true chorus, and the structure here is pretty interesting, where there's an intro, Scott's verse, Thug's verse, the title line, and then it fades out. But the beat is really holding everything here, even the hi-hat balances out the wonky bass pattern.</p>`,
      `<p>Metro Boomin's 2023 was excellent, where his Heroes and Villains album was so successful, he did ANOTHER album, being the Across the Spiderverse soundtrack, which was also pretty good.</p>`,

      `<p>From an immaculate vibe, to pretty sad, folky indie song. Yeah this list is very weird.</p>`,
      `<h4>22. ceilings by Lizzy McAlpine</h4>`,
      `<p>This is a strange song, mostly because of how vague it is. This by itself is kind of a red flag, just look at Someone You Loved by Lewis Capaldi, a song about his grandmother dying that took 6 months of rewriting to make it the most basic, standard breakup song ever.</p>`,
      `<p>But the strings in the production just evoked that emotion of wistfulness and somewhat deadness in her voice from the relationship that may or may not have happened. This entire song might have been happened in her own head, but it's still devastating nonetheless because it's so quiet, but then builds up to the end, to the twist. She either never had this relationship, or it ended and she is coping over it. The concept is super well done.</p>`,

      `<p>As an asian, I really don't watch a lot of anime. I honestly don't know why that is considering most people I know watch it. There's one I did always want to watch, Oshi No Ko. It's about a celebrity singer and pressures that comes with it, and a singer like that in Japan is also known as an...</p>`,
      `<h4>21. IDOL by Yoasobi</h4>`,
      `<p>This is the theme song for this anime. And it's fucking amazing. Outside of the US, this was the biggest hit this year, and it's not even particularly close. It exceeded 100 million YouTube views in a month, It debuted at #1 in Japan AND STAYED THERE FOR 5 MONTHS AFTER, it broke worldwide sales and streaming records set by FUCKING BTS. That's how widespread this was. It was extremely critically acclaimed, perfectly portraying the character in the show, shifting from the brooding rap verses to the pop-rock, hard bass style chorus.</p>`,
      `<p>And it deserves all these accolades and then some. There's a LOT in this song. It's pop, it's rock, it's EDM. It rapidly switches from pop to someone rapping over a trap-style hard bass as I've mentioned, it sounds like another Japanese artist, Ado, who does a lot of chaotic, wild shit in her songs but it is all put together really nicely.</p>`,
      `<p>I wish I can put this higher, but I feel like I respect this more than I love it. This is a song in another language that I truly do not understand, but the structure and style of the song are so good it deserves to be high. I could regret this placement(if I knew the lyrics and related to it this would be top 5 easily), but for now, this is a really damn good song.</p>`,

      `<p>Let's refer back to the most recent 2024 Summer Ranking(holy shit am I this far behind):</p>`,
      `<blockquote>"... Kane Brown's voice. I was REALLY getting around to him, with One Mississippi being one of the best hits in the 2020s, and [REDACTED] being a follow up to the bland Thank God."</blockquote>`,
      `<p>Well. here's the redacted song:</p>`,
      `<h4>20. Bury Me In Georgia by Kane Brown</h4>`,
      `<p>Country rock is actually the best type of country, song with crushing guitars like this, Ain't No Love In Oklahoma, and a song in the final part of the best list, this is a surefire way to get on this list. You also would want to have a grittier voice, which Kane Brown taps into, even just a little.</p>`,
      `<p>The concept of the song itself is just him wanting to be buried in his hometown, and he doesn't care about the other details of the actual funeral. But he makes it sound so grand with the chorus that goes HARD AS FUCK.</p>`,
      `<p>There's not really that much to it, just that Kane Brown should stop making newlywed country or fucking country EDM with Marshmello and make more shit like this.</p>`,

      `<p>Um... she's still the worst female singer in the current pop industry?</p>`,
      `<h4>19. 10:35 by Tiesto ft. Tate McRae</h4>`,
      `<p>HOWEVER, Tiesto getting his shit together after his stretch from The Business til this song. The beat is dark yet textured, it sounds like the color jet black. And Tate's usually snarly voice is very much toned down here while fitting in with the beat instead of clashing or overpowering or drowning(chorus of this song notwithstanding) with it, like she usually does, but we have to wait for the 2024 worst list for that.</p>`,
      `<p>This song is supposed to be a transition from day to night, as 10:35 can be a time at day or night(or that's what Tiesto himself claims). This chorus where the rougher, Brazilian-bass style that Tiesto employed with McRae's smoother vocals creates a great juxtaposition and overall vibe of the songs.</p>`,
      `<p>Most of the songs are hard to write about... they're kind of self-evidently great and the background info isn't interesting as it usually would be. Somehow the League of Legends anthem had the most background to talk about...</p>`,

      `<p>Where the actual fuck did this come from? This was released in the SAME WEEK as that worst hit of all time that I mentioned.</p>`,
      `<h4>18. Johnny Dang by That Mexican OT ft. Paul Wall and Drodi</h4>`,
      `<img src="assets/posts/best-2023-part-2/img2.jpg" alt="Johnny Dang single cover art by That Mexican OT ft. Paul Wall and Drodi">`,
      `<p>We'll get to the actual title of the song later, but the artists are people I haven't heard of before and FUCKING PAUL WALL, who had a single number 1 hit nearly two DECADES ago. Thank god TikTok actually got it right this time, with a clip of OT performing the chorus with a cowboy hat being the reason it got so big. That clip perfectly resembles the energy of the song, as OT performs it with some drawl, even though this is more of the chicano rap(integrating more Mexican culture) than a typical country rap(whatever the fuck Morgan Wallen does).</p>`,
      `<p>Listening to this song is SUPER fun though on this beat filled with piano washing over the ticking hi-hats, making it feel luxury, not just talking about it. It even is shown in the title, as Johnny Dang is a Vietnamese jeweler, and OT compares himself and his friends to looking like him. OT really slides on the beat, constantly switching his cadence and adding in his flow switches and trademark rolling Rs. Seriously, he rolls his Rs EVERYWHERE.</p>`,
      `<img src="assets/posts/best-2023-part-2/img3.jpg" alt="Screenshot of a Johnny Dang lyric line containing zero letter R's">`,
      `<p>This sentence has ZERO rs. And he rolls his Rs TWICE. One of the best moments of music this year.</p>`,

      `<p>Alright, hopefully this list can be done soon because... we are on week 48 of the tracking year(ye there's a reason I did this whole list in the first place, where Billboard fucked the tracking unless they want to lengthen a year so it can end at least mid November). Part 3, Part 4, and especially the Fall ranking coming up soon. Hopefully, I can transfer all this to a site very soon.</p>`
    ]
  },
  {
    title: "Worst NON-hits of 2024",
    date: "2025-09-07",
    tags: ["ranking", "2024", "worst", "non-hits"],
    body: [
      `<p>I did harbor WAY more hate to the non-hits, especially since it seemed way more reflective of the year more than the hits. I feel like that sentiment could be more relevant, but wow was popular music mainstream this year more than ever.</p>`,
      `<p>Let's talk about the goofiest inclusion here, a song from a… FOOTBALL PLAYER?</p>`,
      `<h4>10. Who Knew(Her Perspective) by Darren Waller</h4>`,
      `<p>So you guys are just assuming that I put this song because football players can't sing and have to use autotune. Well, that's PART of it. God the autotune is HORRIBLE on this. The second verse ends with just random ahhhhhhs at the end that are VERY irritating. And there are OWL HOOTS ON THIS TOO? God surely this would be the only reference to the murdering of an owl on this list… oh.</p>`,
      `<p>The real reason this is on here, this is a gaslighting anthem.</p>`,
      `<p>HE CHEATED ON KELSEY PLUM. And expects us to believe she's the bad person in this. Ye GET OUT. Just leave the NFL… oh wait you did after you finessed the Giants. Great. Fuck you.</p>`,
      `<p>(Note because I wrote this segment a while ago:</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img1.jpg" alt="Screenshot referenced as a note about the Darren Waller and Kelsey Plum situation">`,
      `<p>BRUH)</p>`,
      `<p>Oh right, the Trollz World Tour died this year. Maybe it should've died after Man of the Woods, he's released ZERO good music since then.</p>`,
      `<h4>9. Selfish by Justin Timberlake</h4>`,
      `<p>This is droning and boring as FUCK. I was so close to putting the sleeping image on here. But I would say these lyrics are a real bad look after the Britney situation. I gotta highlight these lyrics because they are ASS:</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img2.jpg" alt="Screenshot of lyrics from Selfish by Justin Timberlake">`,
      `<p>This is borderline gaslighting. Sorry if I assume the worst from this song because the beat is doing nothing.</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img3.jpg" alt="Screenshot of more lyrics from Selfish by Justin Timberlake">`,
      `<p>This entire verse deserves to be here, but this low-effort Genius annotation speaks more about this than I can say.</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img4.jpg" alt="Screenshot of a low-effort Genius lyric annotation for Selfish">`,
      `<p>The worst lyrics of the song bar none. First of all, it reminds me of the Intentions, the terrible ass Bieber song from the pandemic(or pre, that time period was weird). I can't believe I have to defend Bieber, but AT LEAST his shit was memorable. I wouldn't made this reference if it didn't stick in my mind. But "put you in a frame" is so NONSENSICAL. Another thing they got in common, is thanking their parents for creating them??? WHY IS THIS NOW A THEME THAT MULTIPLE SONGS SHARE. I thought we would yunno, learn from this?</p>`,
      `<p>So I've like a distressing amount of Morgan Wallen songs with any sort of rapping or trap beats on them(2). But even I have fucking limits.</p>`,
      `<h4>8. WHISKEY WHISKEY by Moneybagg Yo ft. Morgan Wallen</h4>`,
      `<p>UGH. This beat sounds like fucking backwash, the chorus is straight up UGLY. Moneybagg actually just sounds like he's there for a paycheck. There is no fucking vocal chemistry, it sounds they recorded this from two sides of the country.</p>`,
      `<p>And again, this is the SAME SHIT FROM WALLEN THAT WE'VE HEARD SINCE 2020. I swear there is no Morgan Wallen song out there that doesn't mention whiskey or women. Like I genuinely think that doesn't exist. Like take a new goddamn approach, something. Or make the beat sound FUN instead of it stumbling over itself.</p>`,
      `<p>But here's the thing. This is not nearly as embarrassing as the KATY PERRY COMEBACK.</p>`,
      `<h4>7. Woman's World by Katy Perry</h4>`,
      `<p>First of all,</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img5.jpg" alt="Screenshot providing context on Woman's World by Katy Perry">`,
      `<p>Yeah she isn't fucking serious anymore. She is trying to come back with the producer that made her popular(but also is a [alleged but still sleazy as shit] sex offender, also didn't have an opinion about that situation because she ALSO HAS ALLEGATIONS AGAINST HERSELF).</p>`,
      `<p>However, the issue is that the song itself, including its lyrics, gives off this synthetic, disingenuous, fake feeling of a 2010s Katy Perry song. The ENTIRE SONG sounds like synthetic slop and each lyric is literally just "SHE IS THIS SHE IS THAT ITS A WOMANS WORLD YOU ARE LUCKY TO BE LIVING IN IT"</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img6.jpg" alt="Reaction image to the lyrics of Woman's World by Katy Perry">`,
      `<p>… Ye ALRIGHT. Nothing else needs to be said.</p>`,
      `<p>But I think more needs to be said about sampling. IT NEEDS TO CALM THE FUCK DOWN. There is a TIME AND PLACE FOR THIS. But if you are clearly just trying to be successful</p>`,
      `<h4>6. Chevrolet by Dustin Lynch AND Lonely Road by MGK ft. Jelly Roll</h4>`,
      `<p>These two COUNTRY songs sample Drift Away and Take Me Home, Country Roads. That's it, that's the segment. There's nothing else here.</p>`,
      `<h4>5. U My Everything by Sexxy Red ft. Drake</h4>`,
      `<p>So for most of these songs, I deadass have not listened to them. Below is the picture of my first reaction to this song and the infamous voice crack in here.</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img7.jpg" alt="Screenshot of the author's first reaction to U My Everything by Sexxy Red ft. Drake, capturing the infamous voice crack">`,
      `<p>(I have the full video I swear)</p>`,
      `<p>Oh and OF COURSE Drake sampled BBL Drizzy. Great way to show you have won the beef man…</p>`,
      `<p>Oh and SPEAKING ON LOSING BEEFS.</p>`,
      `<h4>4. Big Foot by Nicki Minaj AND 3. Wag Wan Delilah by Drake AND 2. The Heart Part 6 by Drake</h4>`,
      `<p>I'm not walking about the Drake beef just yet, but the beef that really set off the year was the beef between Nicki Minaj and Megan Thee Stallion, where Nicki got ABSOLUTELY DESTROYED because this was the WEAK response to "HISS" that Nicki came up with:</p>`,
      `<img src="assets/posts/worst-non-hits-2024/img8.jpg" alt="Screenshot of Nicki Minaj's lyrics responding to HISS">`,
      `<p>HISS took shots at Nicki's husband and brother, who were accused/convicted of various sex crimes by the way. Nicki has two disses of sleeping with her co-stars and her mother being dead. THAT'S IT??? Her brother is A PEDO.</p>`,
      `<p>Oh and Drake made a song where he faked a Jamaican accent(or was being too Canadian, I couldn't tell because the vocals are mixed awfully).</p>`,
      `<p>And his final response of feeding Kendrick Lamar false information is so disingenuous and sounds like an admittance of defeat. "This Epstein angle is the sht I expected" when Kendrick mentioned HARVEY WEINSTEIN.</p>`,
      `<p>But it is not the worst thing I have heard this year. Somehow these songs were not the career killers that #1 was. #1 is a gross miscalculation of a song. It BARELY qualifies as music.</p>`,
      `<p>The worst chorus I have ever heard.</p>`,
      `<h4>1. I LUV IT by Camila Cabello ft. Playboi Carti</h4>`,
      `<p>I have no words. You have to listen to it yourself. This is more "Chinese water torture" than a song. I'm done… except with one exception…</p>`,
      `<h4>0. The song with Ben Shapiro and a grifter rapping on it</h4>`,
      `<p>I'm not acknowledging this shit any more than this. All I will say that this would've had the highest charting song to debut and then fall off the chart immediately, but that dubious record got beat LESS THAN A MONTH LATER by the biggest thing to happen in pop music this millennium.</p>`,
      `<p>"When is part 5 of the 2023 best list coming out?"<br>"When is the 2024 best list coming out?"</p>`,
      `<p>"The fuck is happening with 2025's music?"</p>`,
      `<p>Tomorrow.</p>`
    ]
  },
  {
    title: "The Worst Hit Songs of 2024",
    date: "2025-02-20",
    tags: ["ranking", "2024", "worst"],
    body: [
      `<p>Gonna be very short with this one, this year does not deserve hate. It was very easy to make this list since I only hate enough songs to make the list. But one thing I can say about this first collection of songs…</p>`,
      `<p>Lazy.</p>`,

      `<h4>10) The Sound of Silence (CYRIL Remix of the Disturbed version), Stumblin In by CYRIL, I Don't Wanna Wait by David Guetta ft. Ryan Tedder(the OneRepublic ft is a LIE)</h4>`,
      `<p>They don't deserve my effort. Let's shit on Drake instead.</p>`,

      `<h4>9) Family Matters by Drake</h4>`,
      `<p>Gotta be honest. It was HARD to get "10" songs on here. Easy to order obviously, but like cmon. What a great fucking year for music. I don't think music has mattered this much in five years, which coincidentally had 2 black country superstars. That's not a foreshadowing of anything, that's just an observation.</p>`,
      `<p>And the biggest event that defined the year: Kendrick killing Drake and Fortnite emoting on his grave. Yes I will write an entire fucking essay on this and how Kendrick performing at the Super Bowl that Taylor Swift had to be fucking intentional AND THE REFS ARE IN THE CHIEFS POCKET I HAVE NEVER SEEN A TEAM BS THEIR WAY TO THIS MANY WINS *breathes*</p>`,
      `<p>This song, the song after that… Snoop Dogg and Tupac AI disaster… was good. I actually liked it. Then the song aged like fucking milk in the sun. The flaws were exacerbated and then I realized, OH YEAH, Drake's diss towards the Weeknd IS JUST HOMOPHOBIC. The song also just doesn't matter. It's almost like 40 minutes after this was released, Kendrick released the best song in the beef and scared the absolute shit outta me. Meet the Grahams is 100% the best horrorcore song released this year.</p>`,
      `<p>And this is low because I liked it at first and is definitely the best song from Drake from the beef. Low bar but still. HEY THIS WORST LIST WAS SLIM PICKINGS MAN.</p>`,

      `<p>Boring dreck.</p>`,
      `<h4>8) Scared To Start by Michael Macargi</h4>`,
      `<p>Ok I think I deserve this.</p>`,
      `<p>Insert picture</p>`,
      `<p>Should've put this in a worse tier.</p>`,

      `<h4>7mindrill) Who by Jimin</h4>`,
      `<p>Dogshit vocal processing, the keys are fucking irritating, and Like Crazy deserved to be more of a hit than this, even though this qualified through the Global 200, where Like Crazy was ACTUALLY A HIT. Somehow a rare America L in pop music this year, which feels WEIRD to say. Already said what I needed today in a previous ranking so, moving on.</p>`,

      `<h4>6) I Had Some Help by Post Malone ft. Morgan Wallen</h4>`,
      `<p>The topic of the song is SUPPOSED to be how this girl helped the guy back into alcoholism(which by the way is bullshit). HOWEVER, since it IS a Morgan Wallen song, I get reminded of his drunken incident where he said a particular word. Yes, that word. And he's still popular. This is our fault. Surely this is the only time I have to discuss some popstar saying uncontroversial thi…</p>`,
      `<p>Oh fuck.</p>`,

      `<h4>5) Wild Ones by Jessie Murph ft. Jelly Roll</h4>`,
      `<p>This is gonna sound like a WILD take but maybe white women shouldn't do country rap. Just a thought. Especially ones that sound like a congested chipmunk, definitely the worst voice in po…</p>`,
      `<p>OK WHAT THE FUCK WAS THIS.</p>`,

      `<h4>4) Slow It Down by Benson Boone</h4>`,
      `<p>I have never heard actively get me more anxious than this FUCKING song right here. The keys are pitched up, the entire thing is fucking sticcato, and Benson Boone IS NOT A GOOD SINGER. WHO ALLOWED THIS GUY ON AMERICAN IDOL??? You are so lucky you didn't make the list twice because I have very slightly warmed on Beautiful Things.</p>`,

      `<h4>3) Lovin On Me by Jack Harlow</h4>`,
      `<p>Yeah this shit is still horrible. Where the fuck did all the charisma go from INDUSTRY BABY? And he's spelling again. At this point it's time to make jokes with the same effort as Jack Harlow's "young M-I-S-S-I-O-N-A-R-Y" line.</p>`,
      `<p>He really went from First Ass to Second Ass.</p>`,
      `<p>He really went from First Class to Coach.<br>He's the second rapper to use whips and chains in his songs, first one being Drake.</p>`,

      `<p>Alright let's get to the worst 2 hits of the year, and will be the most controversial part of the list.</p>`,
      `<h4>2) Training Season by Dua Lipa</h4>`,
      `<p>THIS SONG MAKES ME MORE ANXIOUS THAN BENSON BOONE. THIS SONG NEVER FUCKING RESOLVES. STOP GOING UP.</p>`,
      `<p>STOP.</p>`,
      `<p>STOOOOOOOOOOOOOOOOOOOOOOOO…</p>`,

      `<h3>Dishonorable Mentions</h3>`,
      `<h4>Houdini by Eminem</h4>`,
      `<p>His schtick is not working anymore, stop trying to trigger people with out-of-date references, including the Megan Thee diss(which we're doing in 2024 still apparently)</p>`,
      `<h4>Never Lose Me by Flo Milli</h4>`,
      `<p>Forgettable.</p>`,
      `<h4>Lies Lies Lies by Morgan Wallen</h4>`,
      `<p>I don't care enough to put this two spots below I Had Some Help.</p>`,
      `<h4>Whatever She Wants by Bryson Tiller</h4>`,
      `<p>Insert picture</p>`,
      `<h4>Stargazing by Myles Smith</h4>`,
      `<p>Avicii did NOT die for this.</p>`,
      `<h4>High Road by Koe Wetzel ft. Jessie Murph</h4>`,
      `<p>I can't if Koe Wetzel is a good artist or not, but jesus christ Murph doesn't fit at all here.</p>`,
      `<h4>Where It Ends by Bailey Zimmerman</h4>`,
      `<p>It's official, the Morgan Wallen clone has less talent than the real thing. Man….</p>`,
      `<h4>Act II: Date @ 8 by 4Batz ft. Drake</h4>`,
      `<p>This really should be the warning shot to the entire beef, Drake just takes an average song and slows it down and RUINS it.</p>`,
      `<h4>Love Somebody by Morgan Wallen</h4>`,
      `<p>Not the worst usage of this chorus melody, better than Dua Lipa. Sadly not saying much.</p>`,
      `<h4>That's So True by Gracie Abrams</h4>`,
      `<p>OOOOOOOOOOWOOOOOOOOOOOOOOOOOOO. Yeah what the fuck was this and WHY IS THIS IN THE TOP 10.</p>`,

      `<p>Time for a (slightly) WILD #1. With the worst pop vocalist working today.</p>`,
      `<h4>1) exes by Tate McRae</h4>`,
      `<p>Now I'm convinced that 10:35 was just Tiesto masking every weakness she had, because what the fuck happened. First off, these lyrics are just bad. Like, REALLY bad. She's treating all the people that she's dated as nothing. But she's also keeping their number??? FOR WHAT REASON. The chorus also is very disingenuous, they don't care for her but the next ones do, it's just incoherent. "Change my mind up like it's origami" is a NONSENSICAL LINE TOO.</p>`,
      `<img src="assets/posts/worst-2024/img1.jpg" alt="Screenshot of exes by Tate McRae lyrics, including the 'origami' line">`,
      `<p>PISS OFF.</p>`,
      `<p>The melodies are also fucking disgusting, it makes her look ever bitchier than before. It's so jumpy and, yet again, ANXIETY-INDUCING. And why, WHY, WHY IS SHE RAPPING IN THE SECOND VERSE.</p>`,
      `<p>The instrumental is pushed down in the mix, and its literally a two-note guitar strum pitched up and a fucking 808??? Like COME ON. Oh right, the real reason this is number one and the reason this is this high. You can interpret her as joking, she simply has a lot of men in her life that keep on pestering her or some shit. And maybe that would be a reasonable way of thinking. If there wasn't a FUCKING LAUGH TRACK. It makes her so sarcastic, which I think… was the point??? FUCK OFF.</p>`,
      `<p>"It is what it is and was what it was", yeah that was the entire mentality of the production of this NIGHTMARE OF A SONG. This made the Billboard Year End too. Without my rules, this would EASILY be number one.</p>`,
      `<p>Except y'all know that there was something I couldn't fucking ignore. Recent events impacted this too. Just please…</p>`,
      `<p>Please put this man in a mental hospital.</p>`,

      `<h4>0) Carnival by Kanye West and Ty Dolla Sign ft. Rich The Kid and Playboy Carti</h4>`,
      `<p>I really didn't want to put this anyways but like a Kanye tweet I'm gonna say something about it even though I REALLY shouldn't.</p>`,
      `<p>I mean the song sounds… ok, nah it sounds like trash. Kanye compares himself to BILL COSBY AND R KELLY, great. I'm surprised there wasn't a Deshaun Watson comparison personally. Ty is checked out. Rich The Kid is now not a one-hit-wonder anymore(even though New Freezer barely missed the 2017 year end), and he isn't talented enough for me to care about that. And the Carti deep voice… NEVER do that shit again.</p>`,
      `<p>FUCK THIS SONG.</p>`,

      `<p>Now, the best lists. Not sure which top 10 I'm doing first. Maybe I should finish the songs from 2 years ago shouldn't I…</p>`,
      `<p>Nah, before then. I have a list of 10 songs that WEREN'T hits that I REALLY want to tear into.</p>`
    ]
  },
  {
    title: "The Best Hit Songs of 2023... Part 3",
    date: "2024-11-12",
    tags: ["ranking", "2023", "best"],
    body: [
      `<p>So I've still not fully come around on country yet. I still have some reductive mindset of some of them being completely same sounding and just plain boring; some of my top 20 reviews have contained one-liners like "Generic country love song #x". So why THE FUCK is this song so good???</p>`,
      `<p>Well...</p>`,
      `<h4>17. Memory Lane by Old Dominion</h4>`,
      `<img src="assets/posts/best-2023-part-3/img1.jpg" alt="Old Dominion - Memory Lane single artwork">`,
      `<p>It all starts with the opening notes. Those guitars create a warm, inviting atmosphere. It also covers one of my favorite topics in pop music, reflection on those memories of the past. The song paints this relationship with the main singer and a partner, and wants to live there forever.</p>`,
      `<p>However, it's all just a front. You can kinda tell that since, all of this is happening in his mind, and it sounds like he is coping. The first verse and chorus talks about this idealistic, picturesque house and setting where he and his "baby" can never let go, and would live there and IS living there. The chorus lines, "You'd be mine in the shine of a front porch light" and "Still drunk on that feeling when I close my eyes" is pretty telling that it's all in his head, that he isn't in that relationship anymore, and is full of regret. The warmth of the song is also very effective, the memories feel like this blanket enveloping when all it's doing is preventing him from moving on. This is more blunt in the second verse, where he says he wouldn't miss her if he was in this perfect world, but alas.</p>`,
      `<p>This song just also sounds really good, also anchored by a rougher guitar solo that juxtaposes the softer guitar that led into the song, and it also closes the song, so maybe he is moving on from this perfect world. I could be ENTIRELY reading into this too much and maybe it's just a very good country song about a lost relationship. However, it's a very warm version of what it does, and warmth can be found in some of my favorite pop songs, like PROVENZA from 2022. Definitely the most simple song on the entire list, and that does not detract from it.</p>`,

      `<p>Some issues that I have had with my own review style is, I feel like I'm using the same vocabulary again and again. It works on the worst lists because, let's be real, yelling at these homogenous pop songs that are completely disposable do not deserve a lot of my effort. I also have no clue about songs that are more complex in their tone, and I can't really elaborate on that often. Hopefully it's time to change that.</p>`,
      `<p>This song is fucking HYPNOTIC, the entire piece feels like it's under a shimmer of...</p>`,
      `<h4>16. Moonlight by Kali Uchis</h4>`,
      `<img src="assets/posts/best-2023-part-3/img2.jpg" alt="Kali Uchis - Moonlight single artwork">`,
      `<p>Before we get into this song, I feel like I need to say who Kali Uchis even is. She is a Colombian-American R&B artist that has collaborated with the likes of Snoop Dogg, Diplo, Gorillaz, and Tyler, The Creator...</p>`,
      `<p>Uhhhhh guys. Why did, just now, did I see 4 shadows in front of me. This is some schizo shit, I have 0 idea what is going on. And now they are gone.</p>`,
      `<p>ANY FUCKING WAYS, she's been bubbling up for years now, and broke through in 2021 when "Telepatia" got extremely viral on TikTok and eventually landed on the year-end list official. That song with Peso Pluma that I talked showed the angle she took with it and Telepatia, where it sounds like both songs were made inside of fluffy pink clouds, it's an atmosphere like no other.</p>`,
      `<p>This song, that didn't come close to the year-end list, is the exact opposite of those two, but touches upon the same subject, just under a different... light?</p>`,
      `<p>This really is the "nightmare" version to the dreamlike Telepatia, where Uchis wants to figuratively (and literally) be intoxicated by the love shared in her relationship with someone. Moonlight's and Telepatia's pace is slow, but because of different reasons, and I love that it is that way for both songs, as one of them conveys the haziness of dreams, and the other conveys the haziness of potentially hallucenogenic substances. The fadeout at the end of both really ties both songs back too, and I love it.</p>`,
      `<p>However, these songs are too goddamn idealistic about their relationships, let's get into what happens if a relationship that goes extremely badly.</p>`,

      `<p>Rumors are a nasty thing, ain't it.</p>`,
      `<p>NO, not referencing the Lizzo song. JESUS CHRIST how that aged badly because of her own allegations (I should've known when she forced her dancers to take a pic with Chris Brown). Still cannot believe that slipped my mind creating the worst list. Her whole empowerment shtick is now COMPLETELY shit on because of it.</p>`,
      `<p>Where was I? Oh right. Let's take a song about a broken relationship that involves some sort of mysterious bad thing that happened and make it fucking garbage: "Truth About You" by Mitchell Tenpenny. This song would've been #2 if it qualified, but THANK GOD it didn't. It's a disgusting song that only focuses on his ex POTENTIALLY spreading rumors about him and he then THREATENS the girl to tell the truth about her if something bad gets out. He thinks it's some fucking macho thing to do, meanwhile he doesn't even hint at what she did wrong. The song is TRYING to trick me to think that the woman did something wrong, but there's no actual evidence pointing towards that. It only makes Tenpenny that much of a toxic SHITHEAD. It sounds MISERABLE. The only reason it even reached the airwaves is because his family laid the groundwork for Music Row in Nashville. He's a nepo baby.</p>`,
      `<p>Now, surely there's no way this can be turned into good thing ... oh.</p>`,
      `<h4>15. What He Didn't Do by Carly Pearce</h4>`,
      `<img src="assets/posts/best-2023-part-3/img3.jpg" alt="Carly Pearce - What He Didn't Do single artwork">`,
      `<p>This is the first country hit by a woman that I have had on a best list, which is kind of crazy considering on average, women make WAY better country than men. Is it because the average is completely bogged down by the disposable 2010s era of country that mentions and acknowledges hip hop, the deplorable shit Aldean was doing that doesn't include leaving his own wife for a woman much younger than is, and the suppression of women (and people of color in general but again I am not qualified to even talk about it) in country? <strong>deep breath in</strong> Yes. Oh what's that you say: Morgan Wallen. Uhhhhhh...</p>`,
      `<p>Ah yes the song in question and why it's better than a nepo baby's toxic relationship anthem. Well first of all, it sounds good, really good in fact. Tenpenny was YELPING throughout that song over a sludge of an instrumental. Pearce has a BEAUTIFUL voice, accentuated by this light guitar that sounds like a harp from the Greek gods themselves. I haven't even noticed her wonderful voice in the only other hit she had from 2020: I Hope You're Happy Now with Lee Brice, which... I have a mouthful to say about and might talk about it in the future. Listen to that song if you want your heart fucking shattered, and that's because of Brice and the songwriting from Luke Combs.</p>`,
      `<p>This song has pretty much the same premise as the awfulness I've described above, where they both have dodged the rumor, but while Tenpenny threatens his partner by wanting to leak the rumor(if it's even fucking true or not), Pearce acknowledges that there are two sides to every story, and it's not even the main reason they broke up. There's a whole thing about how toxic relationships stay together because of the connection both parties want to build but that's another thing I'm not qualified to talk about either. However, Pearce never wants to even acknowledge the rumor, even though she said it could ruin him, but takes a completely mature route of not focusing what he did in the past, but what he didn't do to keep the relationship together. That's how you paint yourself as the bigger person, by focusing on the main downfalls of the relationship and moving on.</p>`,

      `<p>SZA is so fucking good.</p>`,
      `<h4>14. Ghost In the Machine by SZA ft. Phoebe Bridgers</h4>`,
      `<img src="assets/posts/best-2023-part-3/img4.jpg" alt="SZA - Ghost In the Machine single artwork">`,
      `<p>The concept of this song itself is so creative, a ballad that focuses of the materialistic and superficiality of the music industry and SZA wanting a real connection outside of it. Not only this, she was inspired by the industry bogging her down by just classifying her as an R&B artist because the music industry hasn't realized that black women can do more than just R&B. She feels like a ghost in the machine of the pop music industry.</p>`,
      `<p>Slight aside from SZA, Phoebe Bridgers. She should be wayyyyyyy more successful than she is right now. She's also made one of my favorite songs of all time in I Know The End. I am not spoiling this song. Listen to this shit RIGHT NOW.</p>`,
      `<p>Anyways, Phoebe feels like Kendrick Lamar, COMPLETELY different styles, but their album cycles are similar. Both really don't need the pop industry to realize their musical vision(just that Lamar's stuff has been pushed more) but take a very long time to create albums because they are trying to craft their art thoroughly.</p>`,
      `<p>That's why it was jarring to hear that this was produced THE WEEK BEFORE SOS CAME OUT, for me and for Phoebe apparently. And she fits so fucking well into this song of a soft electronic ballad, where her belting isn't as loud but more pronounced over this.</p>`,
      `<p>This song is very cold, reflective of the coldness of the music industry, the interactions that SZA has had with surrounding artists, and the fact that striving for success drives you further away from the people around you, and that they need an escape...</p>`,
      `<p>Ok I SWEAR these 4 shadows are fucking with me, MOVING ON.</p>`,

      `<p>I fucking hate TikTok and what it has devolved into. It's cool that it can truly make any song popular, but then that concept died in 2022 when the alphabet song astroturfed the shit out of everyone and became the most despised hit of that year.</p>`,
      `<p>Sometimes, what they push can be very magical, and what magic this was...</p>`,
      `<h4>13. Until I Found You by Stephen Sanchez ft. Em Beihold</h4>`,
      `<img src="assets/posts/best-2023-part-3/img5.jpg" alt="Stephen Sanchez and Em Beihold - Until I Found You single artwork">`,
      `<p>A song like this making the official Year-End is fucing incredible. This song sounds like it came out 70 years ago, and it being the backdrop of post-COVID proms is genuinely very good. These two have very good chemistry, and Em Beihold of Numb Little Bug fame fits WAY, WAY too good on this. This song is so sweet.</p>`,
      `<p>The reason it's up this high is very simple. This song at first hit me like a fucking missile in the gut. The appeal of this song. I can't lie, the chorus motif had me tearing up. Playing the instrumental after the second chorus to let the song just sit there is just... AHHHHH.</p>`,
      `<p>Definitely the simplest song of the entire ranking.</p>`,

      `<p>Ugh. I feel uncomfortable talking about this artist after what I know now. This song is beautiful.</p>`,
      `<h4>12. Golden Hour by JVKE</h4>`,
      `<img src="assets/posts/best-2023-part-3/img6.jpg" alt="JVKE - Golden Hour single artwork">`,
      `<p>First, the song. That glittery piano hits and you feel like you're running through a field of sunflowers. The rapping is... whatever honestly. But holy shit, this song is one of the best sounding of the year, and it just gets you lost in the atmosphere. It's also another simple song to enjoy.</p>`,
      `<p>So why am I uncomfortable talking about this entry? The artist himself.</p>`,
      `<p>JVKE is a singer-songwriter that got famous on TikTok. Wait... THATS IT. Ok, I mean there's gotta be something...</p>`,
      `<img src="assets/posts/best-2023-part-3/img7.jpg" alt="Screenshot showing JVKE made a song for the mobile game Marvel Snap">`,
      `<p>He made a song for fucking MARVEL SNAP. Ye aight bro.</p>`,
      `<p>Now the actually uncomfortable part. The AI controversy. There was like AI Drake and the Weeknd song called Heart on My Sleeve by an artist by Ghostwriter977. It was almost popular enough to chart, which would've set a HORRIBLE precedent for the music industry. Some internet sleuth had a shit ton of evidence to strongly suggest that JVKE was behind all of it. And that makes my liking of the song really icky. Not only because there may or may not be some sort of undertone of a white guy robbing the voices of two African-American artists, but there's something lost by having this beautiful, natural song made by a guy that artificially made another song. It ruins the immersion that I'm supposed to have.</p>`,
      `<p>It still doesn't take away the fact that it slowly rose up the chart to be a top 10 hit and I was excited for it. Ugh.</p>`,

      `<p>The moment you all have been waiting for. Glazing Olivia Rodrigo.</p>`,
      `<h4>11. bad idea right? AND get him back! By Olivia Rodrigo</h4>`,
      `<img src="assets/posts/best-2023-part-3/img8.jpg" alt="Olivia Rodrigo - bad idea right? and get him back! single artwork">`,
      `<p>So... I already got my main point about get him back! in a previous ranking, but again, THAT BASS SLIDE GOES CRAZY.</p>`,
      `<p>Bad idea right?, though. Easily her best hit, better than good 4 u, drivers license, anything from SOUR that got it big. She's somehow bringing some rock back into the mainstream, which, THANK GOD. The whole commercial-core shit that spawned from whatever Imagine Dragons created really made rock limp and weak. Now I know that there were a few pop punk songs that were popular recently, AND THEY HAVE ALL BEEN GOOD. PLEASE BRING THIS SOUND BACK.</p>`,
      `<p>The song itself is a kick-ass pondering of whether she wants she hook back up with one of her exes and how it's probably it's not wise to do so, but just does it anyways, going out of her way too. She's trying to convince herself and her friends, but ultimately she knows she lying to everyone and knows it's a bad idea, but there's that lingering feeling that it might turn out okay(most likely no though). I fucking love Dan Nigro, he's so good at doing this shit.</p>`,

      `<p>I've left talking about this song on the shelf for almost two years. Very punctual of me. I also thought this song was a lock for the top 5, and it probably should be, but I expanded the qualifications. Will I do this this year? FUCK no. It's a 52 week chart this time, but I will also be using the Global chart this year, which definitely includes old songs as well as shit that's popular not in the US. I might also use a slightly expanded year-end as the advent of streaming has torched the December charts.</p>`,
      `<p>All that I'm saying is, SELENA GOMEZ ACTIVELY IMPROVED A SONG. Like, by a SIGNIFICANT AMOUNT.</p>`,
      `<h4>10. Calm Down by Rema ft. Selena Gomez</h4>`,
      `<img src="assets/posts/best-2023-part-3/img9.jpg" alt="Rema and Selena Gomez - Calm Down single artwork">`,
      `<p>The biggest Afrobeats song of all time was improved by Selena fucking Gomez. Yes, I'm 100% serious.</p>`,
      `<p>First of all, it is insanely hilarious that the producer tag says "VIBES" then Rema says "another banger", like they aren't two polar opposites. The chorus also this "wo-wo-wo" in it that I don't mind at all. And the song by itself would be fine, good even if it was just Rema just trying to hit on this girl at a party(even though the "I start to feel her bum-bum" line is... concerning at least).</p>`,
      `<p>But then Selena comes in and just adds this warm, calm, and inviting vibe to the song, which fit it like a glove, especially as it matches the energy of the song and the girl that Rema is talking about. THIS is what a remix should be, adding someone to the remix that actually makes sense and ADDS something to the song.</p>`,

      `<p>Part 4 will be a compilation of the rest of the Honorable Mentions, Non-Eligibles, and Albums from 2023 I highly recommend. Hopefully I can get it out by end of December so the worst and best lists will be done by January, but again no promises(because of how long it took me to make this lol).</p>`
    ]
  },
  {
    title: "The Fall 2024 Billboard Top 20 Ranking",
    date: "2024-10-11",
    tags: ["ranking", "2024", "fall"],
    body: [
      `<p>This is the most disconnected I have been with the charts. There has been ZERO chart turnover since the summer, and I waited three months instead of two like the summer ranking. Additionally, for the first time ever, the most popular song I'm ranking has a current position that's NOT in the top 2. It's so bad that it has taken me 5 songs to then get to songs below the top 20, due my own album-bomb rules, and in one case in the top 20, being on my best list from last year.</p>`,
      `<p>All of this results in the worst score I've ever given a ranking, sorry for spoilers. Time to trudge through the shit once good.</p>`,

      `<h3>Terrible Tier</h3>`,
      `<h4>20. Big Dawgs by Hanumankind X Kalmi</h4>`,
      `<p>Peak: #23, Current: #41</p>`,
      `<img src="assets/posts/fall-2024/img1.jpg" alt="Screenshot related to Big Dawgs by Hanumankind X Kalmi">`,
      `<p>What.. the FUCK... is this. The worst part is that there was a formula to making this work, and it already was made ten years ago... with Birthday by Selena Gomez. Just make the entire energy over this dentist-drill-ass beat with some crazy, chaotic, intense energy.</p>`,
      `<p>I do not need these motherfuckers saying "yeah uh yeah" over and over, just to cut the beat into a robbery of the Knife Talk flow, all in the first THIRTY seconds. I cannot get past this point anymore. This is too much.</p>`,

      `<h4>19. Lies Lies Lies by Morgan Wallen</h4>`,
      `<p>Peak: #7, Current #19</p>`,
      `<p>Worst List contender... yeah I'm definitely getting sick of this dude if he cannot make good music, or any song they strays away from themes of alcoholism and women.</p>`,
      `<p>Before I continue, I am gonna preface this song in a weird way... I am now watching professional wrestling consistently. Yes it's fake, but it's very enjoyable, after the uh... Vince McMahon allegations(by the way I cannot wait for that documentary about him, no punches are being pulled). And the new season of their Friday Night show Smackdown has a new theme song.</p>`,
      `<p>Other than it being a very generic rap song, there is one thing that's VERY WRONG with it.</p>`,

      `<h4>18. Neva Play by Megan Thee Stallion and RM from BTS</h4>`,
      `<p>Peak: #36, Current: #36</p>`,
      `<p>So I've already pointed out that pop songs need to RESOLVE on a note to make it sound correct, in my mini-rant of Training Season. Well this has a similar issue. The beat uses a very similar chord structure to Party by Chris Brown ft. Usher, and it sounds unfinished and amateur. The beat DOESN'T EVER RESOLVE. Maybe I could be hearing it wrong and it actually falls on the right note, but holy shit this one note makes me hyperfixate on one thing that it ruins the entire listening experience. And it drags the whole song down. I have to hear this every Friday now. Great...</p>`,

      `<h3>Bad Tier</h3>`,
      `<p>Who transported mid-2010s Sam Hunt into the present day?</p>`,
      `<h4>17. you look like you love me by Ella Langley Ft. Riley Green</h4>`,
      `<p>Peak: #36, Current: #42</p>`,
      `<p>The verses are literally just speak-rapping like Sam Hunt or... Jason Aldean on Dirt Road Anthem. Yeah y'all must not know that before Jason Aldean was making ragebait, he was making terrible country songs.</p>`,
      `<p>Anyways, this is a basic-ass country duet that just annoys the shit outta me. That's a common theme in this tier.</p>`,
      `<p>VERY common.</p>`,
      `<h4>16. Who by Jimin</h4>`,
      `<p>Peak: #12, Current: #30</p>`,
      `<p>Whoever tuned the piano in this song needs to be fired, it's always a jumpscare the first time it turns up in the chorus. It sounds like a child slamming the keys of a Fisher-Price.</p>`,
      `<h4>15. I Am Not Okay by Jelly Roll</h4>`,
      `<p>Peak: #23, Current: #23</p>`,
      `<img src="assets/posts/fall-2024/img2.jpg" alt="Selfie of the author looking exhausted mid-writeup">`,

      `<h3>Mid Tier</h3>`,
      `<p>Andddd the energy that was present in the previous singles are gone.</p>`,
      `<h4>14. TGIF by GloRilla</h4>`,
      `<p>Peak: #28, Current: #34</p>`,
      `<p>I honestly have nothing else to say other than this can soundtrack an ad to make people get into the Army, the beat has some weirdly pitched horns that remind me of it.</p>`,
      `<p>This is the third time I've seen a pop song named after a female singer, and the second time where the female singer in question was "featured".</p>`,
      `<h4>13. KEHLANI by Jordan Adetunji ft. KEHLANI</h4>`,
      `<p>Peak: #24, Current: #24</p>`,
      `<p>The other times were Billie Eilish performing the song named after her on stage and... multiple songs named Doja, one being the biggest UK import in years(TERRIBLE song).</p>`,
      `<p>And like that song, this is drill... which I didn't expect. But again, this is just full of generic ass lyrics and an okay beat. That's it.</p>`,
      `<p>This is at least way better than the last time I heard Jessie Murph?</p>`,
      `<h4>12. High Road by Koe Wetzel ft. Jessie Murph</h4>`,
      `<p>Peak: #22, Current: #43</p>`,
      `<p>There's an okay chorus melody, but what the fuck are the lyrics about this toxic, alcohol-and-drug-filled relationship about both parties taking the "high" road. The vocal chemistry is decent which is why it isn't any lower.</p>`,
      `<p>I don't get this one.</p>`,
      `<h4>11. HOT TO GO! by Chappell Roan</h4>`,
      `<p>Peak: #16, Current: #18</p>`,
      `<p>It sucks, because I really, REALLY like Red Wine Supernova. But this is just lesbian Carry Out, that's it. She's comparing herself to... takeout, I think. The production is only alright too. I cannot defend this, it's another played-out food-sex metaphor. Can we compare other shit together please?</p>`,
      `<p>Um. This song just... exists.</p>`,
      `<h4>10. WILDFLOWER by Billie Eilish</h4>`,
      `<p>Peak: #17, Current: #45</p>`,
      `<p>This is very harsh to Billie Eilish who's made one the best songs of the decade so far in Happier Than Ever, and made a lot of very good and great songs. But this seems very plodding in tempo. Maybe doing this ranking kinda drained my energy in review, because it might be way better than I think. I hope this grows on me.</p>`,

      `<h3>Decent Tier</h3>`,
      `<p>So the album of the summer has definitely gotta be Brat. Lots of critical acclaim despite the lack of chart success. However, the most popular song is just ok.</p>`,
      `<h4>9. 360 by Charli XCX</h4>`,
      `<p>Peak: #41, Current: #46</p>`,
      `<p>I do like the sound of the two songs I have on Brat, this whole hyperpop-synth shtick sounds really good. But the melodies here are just ok and I like the lyrical themes of Apple better. I do still need to listen to the album, though.</p>`,
      `<h4>8. Si Antes Tu Hubiera Conocido by KAROL G</h4>`,
      `<p>Peak: #32, Current: #38</p>`,
      `<p>I really don't have much to say about this, but this is a pretty fun merengue song from KAROL G, a promising sign for her "comeback" after a relatively quiet 2023.</p>`,
      `<p>Country is so huge right now, and Post Malone finally leaned into the pivot and released a whole album</p>`,
      `<h4>7. Pour Me A Drink by Post Malone ft. Blake Shelton</h4>`,
      `<p>Peak: #12, Current: #29</p>`,
      `<p>Too bad this is only okay. I enjoyed two of the songs from this album a lot(and I Had Some Help not at all). Again, I really don't know what to say other than this being the white, happy, outdoors version of A Bar Song.</p>`,
      `<h4>6. Taste by Sabrina Carpenter</h4>`,
      `<p>Peak: #2, Current: #6</p>`,
      `<p>The worse Sabrina song in this ranking. I actually love that this is straight up a rock song, it accentuates the spite she has for this girl that has her old partner/lover.</p>`,
      `<p>The video is um… the fuck is this. So Jenna Ortega and Sabrina are killing each other ober this guy, and neither of them can die. But then the guy can die and they make up. This is some freaky ass shit.</p>`,

      `<h3>Good Tier</h3>`,
      `<p>Can she please get off my screen when Im watching a goddamn football game.</p>`,
      `<h4>5. I Can Do It With A Broken Heart by Taylor Swift</h4>`,
      `<p>Peak: #3, Current: #32</p>`,
      `<p>Yeah I think this is the "too big to fail" point of Taylor, where TTPD was a wispier mix of Midnights, which I hate. Popstars don't ENUNCIATE anymore. This is mainly up here because of the ringing chorus synth and the irony that she's singing in a regular pop chord while being depressed.</p>`,

      `<h3>Excellent Tier</h3>`,
      `<p>The Sabrina hit I like a LOT.</p>`,
      `<h4>4. Please Please Please by Sabrina Carpenter</h4>`,
      `<p>Peak: #1, Current: #8</p>`,
      `<p>The shimmering instrumental, the breathy singing, the BEST USE OF THE F WORD THIS YEAR. Wow. This song is so goddamn good. Why the fuck didn't Jack Antonoff try harder on the Taylor Swift album.</p>`,
      `<p>The video has aged interestingly, I don't know if her and the Saltburn guy are broken up anymore.</p>`,
      `<p>This should've been more popular than Lose Control.</p>`,
      `<h4>3. The Door by Teddy Swims</h4>`,
      `<p>Peak: #27, Current: #27</p>`,
      `<p>I still think Lose Control is good, but this has a way better groove and Teddy sounds wayyyyy better here. His rough tenor in the chorus really plays into the song's themes of a relationship dying, and showing her the door. His brand is pop soul intrigues me. I don't know why he was on ILLENIUM'S album when he could be doing stuff like this.</p>`,
      `<h4>2. Die With A Smile by Bruno Mars ft. Lady Gaga</h4>`,
      `<p>Peak: #3, Current: #4</p>`,
      `<p>WOW, how has this not been a duet before. I'm reserving this for some other email I'll START making in a few months.</p>`,
      `<p>For my number 1, I can only say one thing:</p>`,
      `<p>THEY'RE BACK.</p>`,
      `<h4>1. The Emptiness Machine by Linkin Park</h4>`,
      `<p>Peak: #21, Current: #21</p>`,
      `<p>So this definitely isn't gonna qualify for the best list so I have to do my whole spiel here.</p>`,
      `<p>The new female singer on Linkin Park? So she's a Scientologist. Yes, the TOM CRUISE Scientologist. And her beliefs are... insanely concerning, not believing in mental health while joining a band whose previous lead member COMMITTED SUICIDE and sung about being depressed in their biggest hits. This is a very bad look for Linkin Park. And they still have that name brand to somehow make this year's League of Legends World Anthem. It's FUCKING AWFUL.</p>`,
      `<p>So how in the fuck is this song #1. Well, as I've said before, the lead singer's a Scientologist. This makes this song about some higher force(it can be interpreted as anything) draining your personal identity to a husk, making you empty. These lyrics FUCKING HIT man. Everything right now feels like an emptiness machine with all these real-life problems ripping you away from what makes someone them. This also applies to how cults(like Scientology) assimilate their members into believing what they want, and making you forget your own identity.</p>`,
      `<p>This is legitimately powerful shit. I'm worried that the new Linkin Park will never make something this good. I almost put this in the Exceptional+ tier too. But for now, it is my best song of the Fall 2024 season.</p>`,

      `<p><strong>Season Score: 49/100</strong></p>`,
      `<p>2024 is still good, but the fact there was more chart turnover last time when I rushed it out vs waiting for the whole three months pushed all the songs I knew out, and the songs lower down are ROUGH. I still can't believe that Big Dawgs song exists, wtf.</p>`,

      `<h3>Season Recommendations</h3>`,
      `<ul>
        <li><strong>Halfway To Hell</strong> by Jelly Roll</li>
        <li><strong>Jump</strong> by Tyla, Gunna, and Skillabeng</li>
        <li><strong>Addicted</strong> by Zerb, the Chainsmokers, and Ink</li>
        <li><strong>Rim Tim Tagi Dim</strong> by Baby Lasagna</li>
        <li><strong>Mind Still</strong> by Sonny Fodera ft. Blythe</li>
        <li><strong>How Sweet</strong> by NewJeans</li>
        <li><strong>BANDIT</strong> by Don Toliver</li>
        <li><strong>if u think im pretty</strong> by Artemas</li>
        <li><strong>Mmhmm</strong> by BigXThaPlug</li>
        <li><strong>On My Body</strong> by Tyla and Becky G</li>
        <li><strong>Nasty</strong> by Tinashe</li>
        <li><strong>Guess</strong> by Charli XCX ft. Billie Eilish</li>
        <li><strong>Apple</strong> by Charli XCX</li>
        <li><strong>WE PRAY</strong> by Coldplay ft. Little Simz, Burna Boy, Elyanna, and TINI</li>
        <li><strong>M-E-X-I-C-O</strong> by Post Malone ft. Billy Strings</li>
        <li><strong>Nosedive</strong> by Post Malone ft. Lainey Wilson</li>
        <li><strong>Hell N Back</strong> by Bakar ft. Summer Walker</li>
        <li><strong>Napalm</strong> by Pendulum ft. Joey Valence &amp; Brae</li>
        <li><strong>Timeless</strong> by the Weeknd ft. Playboy Carti</li>
        <li><strong>Dancing in the Flames</strong> by the Weeknd</li>
        <li><strong>SURFING A TSUNAMI</strong> by Future</li>
        <li><strong>PLUTOSKI</strong> by Future</li>
        <li><strong>Heatstroke</strong> by Khalid</li>
        <li><strong>CRAZY</strong> by Le Sserafim ft. PinkPanthress</li>
      </ul>`,

      `<h3>Two Album Recommendations</h3>`,
      `<p><strong>SMILE :D</strong> by Porter Robinson</p>`,
      `<p>EDM album with a bunch of pop rock influences, extremely introspective lyrics with some tearjerkers.</p>`,
      `<p>Songs I would recommend: Knock Yourself Out XD, Cheerleader, Kitsune Maison Freestyle, Mona Lisa(Ft. Frost Children), Everything To Me</p>`,
      `<p><strong>NO HANDS</strong> by Joey Valence &amp; Brae</p>`,
      `<p>Old-school-style, but a bunch of zany one-liners to ground in current day like:</p>`,
      `<blockquote>"Your name's not Olivia, you don't got the GUTS."</blockquote>`,
      `<p>Songs I would recommend: PACKAPUNCH(ft. Danny Brown), THE BADDEST, OK, WHAT U NEED, JOHN CENA</p>`,

      `<p>Parts 3, 4(aka the rest of the HMs + non eligibles for the whole year), and 5 of the Best List soon, I swear. I'm gonna try my damndest to finish all this before at least December.</p>`
    ]
  },
  {
    title: "Two Entire Horrible Rap Albums, Two Country Songs, and The Absolute Worst (Worst Hit Songs of 2023, Part 3)",
    date: "2024-03-28",
    tags: ["ranking", "2023", "worst"],
    body: [
      `<p>Rap has kinda died as I have said. This year has the fewest sales for the genre in years and the over abundance of samples is one of the biggest reasons why. These two albums are the others; they seem like they have taken ZERO effort.</p>`,

      `<p>This honestly might be my most disagreeable opinion on the whole list (at least from whatever the mainstream dictates). And we really wait FIVE WHOLE YEARS FOR THIS.</p>`,
      `<h4>5. The entirety of UTOPIA by Travis Scott</h4>`,
      `<p>This fucking album was supposed to be a complete utter change in sound for Travis. That has what he has been saying for years, and dropped a promotional single in 2020.</p>`,
      `<p>It's called FRANCHISE, it has Young Thug and MIA on it, with a remix from Future. It is the LEAST effort that I have heard from Scott. Somehow, he made YOUNG THUG, who has one of the most dynamic voices in all of rap, sound boring. He sounds better on the Drake song that sampled IM TOO SEXY, at least he had a different flow instead of dun DUN duhduh duh duh like fucking Travis was doing. MIA's bars(it's not even enough to consider this a verse) are actually AI-generated:</p>`,
      `<img src="assets/posts/worst-2023-part-3/img1.jpg" alt="Screenshot of M.I.A.'s AI-generated verse lyrics on FRANCHISE">`,
      `<p>Wait SHECK WES WAS ON THIS. Like the MO BAMBA guy???</p>`,
      `<img src="assets/posts/worst-2023-part-3/img2.jpg" alt="Screenshot of Sheck Wes' songwriting credit on FRANCHISE">`,
      `<p>And this is his only contribution.</p>`,
      `<p>You know what is the worst part? THIS WAS A NUMBER ONE HIT.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img3.jpg" alt="Chart screenshot showing FRANCHISE debuting at number one">`,
      `<p>This was the last single until the... event, and this was supposed to be a deviation of his original sound, which was so spacey, vibey, and at least unique.</p>`,
      `<p>And then the ...event happened. I think the album should've dropped here, but yeah. He put out the most piss-poor apology, and disappeared until the first single dropped.</p>`,
      `<p>Was it boring. K-POP? Really. This pissed me off of the capitalist-ass title of trying to get actual fans of k-pop to look up this song. The song itself was boring, with Bad Bunny being the only person sorta trying, with the Weeknd just coasting by...</p>`,
      `<img src="assets/posts/worst-2023-part-3/img4.jpg" alt="Screenshot referencing the K-POP single's Bad Bunny and the Weeknd credits">`,
      `<p>Well. The Idol has done irreparable damage to our society.</p>`,
      `<p>AND FINALLY the album.</p>`,
      `<p>It's fucking AWFUL, and the main three songs from this album sums up why.</p>`,

      `<h4>MELTDOWN ft. Drake</h4>`,
      `<p>Wow. I guess Drake is stuck making SICKO MODE clones, just waiting for another beat switch to completely revive his reputation. HE'S STILL BORING. He is just COASTING on his reputation. Also why the fuck are the Star Wars lasers being used in this production? Just why.</p>`,

      `<h4>I KNOW ?</h4>`,
      `<p>Yes the question mark is spaced, THAT'S HOW HE SPELLED IT. Honestly I was gonna talk about the song, but the lullaby-ass beat and the dragged-out monotone voice of Travis just makes me want to use a certain image. I'm just gonna use the image and move on the most egregious example of all.</p>`,
      `<p><em>ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ</em></p>`,
      `<img src="assets/posts/worst-2023-part-3/img5.jpg" alt="Sleeping/boredom reaction meme image">`,

      `<h4>FE!N ft. Playboy Carti</h4>`,
      `<p>UGHHHHHHHHHHHHHHHHHHH. This goes HARD... to listen to. Fein ain't even a WORD. This is supposed to be a rage beat???</p>`,
      `<img src="assets/posts/worst-2023-part-3/img6.jpg" alt="Screenshot referencing the FE!N production">`,
      `<p>He straight up stopped trying here.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img7.jpg" alt="Screenshot of a short FE!N lyric snippet">`,
      `<p>NO. NOT RIGHT NOW. WE SAVING THAT FOR THE BEST LIST.</p>`,
      `<p>And the feature, Carti. THIS IS THE WORST FEATURE PERIOD. I thought he was supposed to said more like a baby over time???(refer to Magnolia and Pain 1993) Why the FUCK is he using a deep voice for this, or AT ALL. His appeal was that crazy ass voice. But he sounds like a blubbering dog spewing his spit everywhere. I DO NOT UNDERSTAND A SINGLE THING YOU ARE SAYING.</p>`,
      `<p>Overall this album was fucking BORING with BORING beats and BORING delivery that was FIVE YEARS in waiting.</p>`,
      `<p>MAKE BETTER SHIT MAN, YOU MADE SICKO MODE AND 90210.</p>`,

      `<blockquote>"HE'S STILL BORING. He is just COASTING on his reputation."</blockquote>`,
      `<h4>4. Drake</h4>`,
      `<p>Ye I know I've done this before, but if he is low effort, then why can't I?</p>`,
      `<p>So here is EVERY LYRIC on For All The Dogs that's just... wtf:</p>`,
      `<img src="assets/posts/worst-2023-part-3/img8.jpg" alt="Screenshot of a long, rambling lyric from For All The Dogs">`,
      `<p>Cope seethe mald, ASAP Rocky now has two babies with her. JUST GIVE UP.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img9.jpg" alt="Screenshot of a Drake lyric about Rihanna and A$AP Rocky's kids">`,
      `<p>Cope seethe mald, ASAP Rocky now has two babies...</p>`,
      `<img src="assets/posts/worst-2023-part-3/img10.jpg" alt="Screenshot of another Drake lyric about Rihanna and A$AP Rocky">`,
      `<p>Why the fuck is there a Messi reference here?</p>`,
      `<img src="assets/posts/worst-2023-part-3/img11.jpg" alt="Screenshot of a Drake lyric with a random Lionel Messi reference">`,
      `<p>You lucky as FUCK you said twenty-one.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img12.jpg" alt="Screenshot of a Drake lyric mentioning the number twenty-one">`,
      `<p>UM.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img13.jpg" alt="Screenshot of a long, rambling Drake lyric segment">`,
      `<p>WHY WAS THIS ENTIRE SEGMENT HERE.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img14.jpg" alt="Screenshot of an unnecessary Drake lyric segment">`,
      `<p>WHY WERE THOSE LAST TWO SENTENCES NEXT TO EACH OTHER.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img15.jpg" alt="Screenshot of two unrelated Drake lyric lines placed side by side">`,
      `<p>GIVE. UP.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img16.jpg" alt="Screenshot of a Drake lyric line">`,
      `<img src="assets/posts/worst-2023-part-3/img17.jpg" alt="Screenshot of a Drake lyric line eight lines apart from the previous one">`,
      `<p>These two lines are EIGHT LINES APART.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img18.jpg" alt="Screenshot of a Drake lyric referencing Devin Booker and an X diss">`,
      `<p>You made a Devin Booker reference and and X diss, jesus christ...</p>`,
      `<img src="assets/posts/worst-2023-part-3/img19.jpg" alt="Screenshot of a Drake lyric name-dropping Kendrick Lamar">`,
      `<p>Wow you really put yourself over Kendrick, wonder how that will go... (note for later)</p>`,
      `<img src="assets/posts/worst-2023-part-3/img20.jpg" alt="Screenshot of a Drake lyric introducing J. Cole's verse">`,
      `<p>COLE, THIS SHIT BETTER NOT BE LIKE UTOPIA.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img21.jpg" alt="Screenshot of a J. Cole lyric on the Drake track">`,
      `<p>(Cole)That really sounds like "this ain't the big 3, this is just Big... oh wait that's a song I'll be talking about soon huh.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img22.jpg" alt="Screenshot of another J. Cole lyric on the Drake track">`,
      `<p>(Cole)I'm convinced that the existence of this line made Phase 4 ASS.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img23.jpg" alt="Screenshot of a Drake lyric about growing up in a suburban neighborhood">`,
      `<p>Bro you lived in a SUBURBAN NEIGHBORHOOD.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img24.jpg" alt="Screenshot of a pointless Drake lyric">`,
      `<p>WHO... ASKED?</p>`,
      `<img src="assets/posts/worst-2023-part-3/img25.jpg" alt="Screenshot of a Drake lyric repeating a reference">`,
      `<p>Ughhhhhhh. WHY MUST YOU REFERENCE HIM EVERYWHERE.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img26.jpg" alt="Screenshot of a long, rambling Drake lyric">`,
      `<p>Really?</p>`,
      `<img src="assets/posts/worst-2023-part-3/img27.jpg" alt="Screenshot of a short Drake lyric">`,
      `<p>And the gay rumors are popping up again. Bro just admit you were in love with 21.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img28.jpg" alt="Screenshot of a Drake lyric fueling rumors about him and 21 Savage">`,
      `<p>LMAO THIS ANNOTATION IS KILLING ME.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img29.jpg" alt="Screenshot of a Genius.com annotation on a Drake lyric">`,
      `<p>Bro is struggling to come up with lines.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img30.jpg" alt="Screenshot of a weak, uninspired Drake lyric">`,
      `<p>This PRELUDES one of Drakes WORST. Here are all the stupid lines from Slime You Out:</p>`,
      `<img src="assets/posts/worst-2023-part-3/img31.jpg" alt="Screenshot of a lyric from Slime You Out">`,
      `<img src="assets/posts/worst-2023-part-3/img32.jpg" alt="Screenshot of the worst lyric of the year, from Slime You Out">`,
      `<p>(worst line of the year)</p>`,
      `<img src="assets/posts/worst-2023-part-3/img33.jpg" alt="Screenshot of a Slime You Out lyric referencing the Kids' Choice Awards">`,
      `<p>(This was close WHY THE FUCK ARE YOU REFERENCING THE KIDS CHOICE AWARDS LIKE THIS)</p>`,
      `<img src="assets/posts/worst-2023-part-3/img34.jpg" alt="Screenshot of another Slime You Out lyric">`,
      `<img src="assets/posts/worst-2023-part-3/img35.jpg" alt="Screenshot of a long Slime You Out lyric passage">`,
      `<img src="assets/posts/worst-2023-part-3/img36.jpg" alt="Screenshot of another Slime You Out lyric line">`,
      `<img src="assets/posts/worst-2023-part-3/img37.jpg" alt="Screenshot of the final Slime You Out lyric line">`,
      `<p>GOD this shit was horrible. And we have... FOURTEEN MORE TRACKS. My god. Speed round time.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img38.jpg" alt="Screenshot of a Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img39.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img40.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img41.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img42.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img43.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img44.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img45.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img46.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<p>(DRAKE IS A HUFFLEPUFF YOU CAN'T CONVINCE ME OTHERWISE)</p>`,
      `<img src="assets/posts/worst-2023-part-3/img47.jpg" alt="Screenshot of a Drake lyric fueling the Hufflepuff joke">`,
      `<img src="assets/posts/worst-2023-part-3/img48.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img49.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img50.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img51.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img52.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img53.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img54.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img55.jpg" alt="Screenshot of a long Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img56.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img57.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img58.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img59.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img60.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img61.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img62.jpg" alt="Screenshot of a lyric from a Spanish-language Drake song">`,
      `<p>This whole song is Spanish Drake, so NO.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img63.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<img src="assets/posts/worst-2023-part-3/img64.jpg" alt="Screenshot of another Drake lyric from the speed round">`,
      `<p>Even on a song I like... wait I'm not supposed to reveal this until way later? Uh....</p>`,
      `<img src="assets/posts/worst-2023-part-3/img65.jpg" alt="Screenshot of a lyric from a Drake song he begrudgingly likes">`,
      `<p>With the rumors you were communicating with girls not your age... ehhhh.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img66.jpg" alt="Screenshot of a Drake lyric referencing controversial rumors about him">`,
      `<img src="assets/posts/worst-2023-part-3/img67.jpg" alt="Screenshot of the final Drake lyric from the speed round">`,
      `<p>AND THAT'S IT. I don't know when I'm gonna do this again, but with RECENT EVENTS he might be obligated to.</p>`,

      `<p>Part 1:</p>`,
      `<blockquote>WHAT THE <strong>loud metal pipe</strong> <strong>portal opens</strong> <strong>mysterious figures throws me through the portal</strong></blockquote>`,
      `<p><strong>BANG</strong></p>`,
      `<p>OK WHAT THE FUCK WAS THAT. Uhh where are we... WAIT PART 3. I THOUGHT I HAD TIME TO TEAR INTO HARDY.</p>`,
      `<p>Well I guess I will do this right now.</p>`,
      `<h4>3. TRUCK BED by Hardy</h4>`,
      `<p>Some context, but wait in the truck and TRUCK BED are both part of a double album that's a concept album. And the concept album has the first half where there were just songs that he SAID appealed to the country radio crowd, and that the second half are kind of the "corrupted" versions of those songs, and all of the second half songs are capitalized. TRUCK BED is the corrupted version of wait in the truck, being in the same position as the other in the first disc.</p>`,
      `<p>That concept is way more interesting than it sounds, and HARDY is the most FRAUDULENT act in the country scene, being so pretentious with the album, with THIS SONG CLIMBING ON COUNTRY RADIO AS WE SPEAK.</p>`,
      `<p>And holy GOD is this song horrible. The guitars are so twangy and the WHISTLING IS SO HORRID. The song is about he passed out and woke up on his truck and how his partner kicked him out of his house. The chorus is repeated twice too which definitely won't get annoying. But I come to you for why this song is WAY down here, and reason 1 is this:</p>`,
      `<img src="assets/posts/worst-2023-part-3/img68.jpg" alt="Screenshot of a bitter TRUCK BED lyric by Hardy">`,
      `<p>Not this lyric in particular, but if the song is really this bitter about how this woman is punishing him for his own bullshit, that's bad enough. What's worse is he WENT THROUGH A DIVORCE THIS YEAR. This song makes him feel like an asshole and that he just doesn't care.</p>`,
      `<p>He also doesn't care for my ears BECAUSE HOLY SHIT THAT LAST CHORUS IS REASON NUMBER 2. Of course country and rock work but country and METAL, oh hell no. His strained vocals and this blown out instrumental are just UNLISTENABLE.</p>`,
      `<p>Hardy can't sell anything, he can't sell country, rap, rock, or metal. FRAUDULENT.</p>`,

      `<p>But of course that song had the decency to not be big enough to be that insufferable. But what if a song that also tried to be multiple genres executes on none of them.</p>`,
      `<p>And what if it was the biggest hit of the year?</p>`,
      `<h4>2. Last Night by Morgan Wallen</h4>`,
      `<p>I really don't know how this was #1 FOR THREE STRAIGHT MONTHS. MY GOD. Music really died at this point in the year, where there were really no big releases until like May? This really just showed me that a song hitting #1 really doesn't matter as much anymore(until you know, A RECENT EVENT happened). He also made a 36-song album, a fucking Drake-style MEGA-album, and ALL OF THEM CHARTED, which of course set a record, like Drake.</p>`,
      `<p>He's country Drake, and HE BASICALLY JUST STARTED. I honestly don't know how that's possible. Maybe in this fast-paced pop landscape, where the #1 hits this year actually have been rotating, and we might have 20 #1 hits this year.</p>`,
      `<p>Anyways this song might have single-handedly killed pop music this year. The guitars are so keening, and they play ONE ANNOYING ASS MELODY OVER AND OVER AGAIN. Also Morgan Wallen talks about his drinking and relationships for the millionth time in an uninteresting way. The most obvious comparison is that this is a Maroon 5 song, which I COMPLETELY agree with.</p>`,
      `<p>This is the shit that Adam Levine sings and thinks he so FUCKING cool, so cool he's willing to cheat on his wife but that's here nor there.</p>`,
      `<p>I swear this year wasn't as bad as these hits, my best list will be stacked...</p>`,

      `<h3>The Non-Eligibles</h3>`,
      `<p>The worst of the worst.</p>`,
      `<h4>Toxic Gossip Train by Colleen Ballinger</h4>`,
      `<p>This is the worst YouTube apology ever. Nothing is gonna beat this... I think.</p>`,
      `<h4>The Color Violet by Tory Lanez</h4>`,
      `<p>This is just In Your Eyes by the Weeknd but like 100x more watered down. Thank god this guy is in jail, he ain't doing shit as an artist.</p>`,
      `<h4>We Didn't Start The Fire by Fall Out Boy</h4>`,
      `<p>Um... you didn't list every event in order AND YOU DID NOT MENTION COVID???</p>`,
      `<h4>Endless Fashion by Lil Uzi Vert and Nicki Minaj</h4>`,
      `<p>Nicki you can't even properly gender your own collaborator, the fuck? Still the most toxic artist around.</p>`,
      `<h4>MATHEMATICAL DISRESPECT by Lil Mabu</h4>`,
      `<p>This is a kid making a drill song and has the most DISMAL bars I've ever heard.</p>`,
      `<h4>Let Go by Central Cee</h4>`,
      `<p>Sample drill gotta be the WORST sampling genre, and this song sampling PASSENGER is the worst song in this lane, with these extremely toxic, misogynistic lyrics.</p>`,
      `<h4>Mother by Meghan Trainor</h4>`,
      `<p>Just listen to this. I'm not spoiling any of this. It's too insane to say here.</p>`,
      `<h4>Watch the World Burn by Falling In Reverse</h4>`,
      `<p>This is HILARIOUSLY atrocious rap rock.</p>`,
      `<h4>Style (Taylor's Version) by Taylor... wait</h4>`,
      `<p>I'm just gonna say this once, the guitars on this sound AWFUL, the original were minor key and down tune, and it sounded LITERALLY perfect.</p>`,
      `<h4>Whistle by Jax Jones and Calum Scott</h4>`,
      `<p>This is just hilarious.</p>`,

      `<p>And finally, probably the worst hit of the year...</p>`,
      `<h4>Ecstasy by SUICIDAL-IDOL</h4>`,
      `<p>This hit the bubbling under, and it is the ugliest song about the fetishization about WANTING TO BE... yeah I'm not going further than that. This is song is legitimately disgusting.</p>`,

      `<p>And now the reason I do not have #1 in this part. I was gonna plan to write an essay on #1, it is probably the worst #1 hit of all time. But I also was not gonna dignify that song with any response, but at the same time there's so much to say about it. I will eventually make something about that song one day, but I will FINALLY WORK ON THE BEST LIST. Which might be the most stacked of all time.</p>`,
      `<p>Oh and for people wondering, this is my number 1, in case I straight up don't release it.</p>`,
      `<h4>1. Try That In A Small Town by Jason Aldean</h4>`,
      `<p>Oh yeah that event I was referencing, this will impact the chart next week, which I will be doing a Spring Ranking on, because it seems between the event, Olivia Rodrigo posting a deluxe album, and Hozier getting a top 10 hit, it will be an eventful ranking.</p>`,
      `<p>Here's a preview of what it is.</p>`,
      `<img src="assets/posts/worst-2023-part-3/img69.jpg" alt="Preview screenshot teasing the Kendrick Lamar and Drake rap beef coverage">`,
      `<p>Kendrick might've started the biggest rap war of all time.</p>`
    ]
  },
  {
    title: "The Best Hit Songs of 2023... Part 4",
    date: "2025-01-07",
    tags: ["ranking", "2023", "best"],
    body: [
      `<p>This part is dedicated to all the non-eligible songs and every song I recommended this year, with A LOT more included.</p>`,
      `<h3>HMs</h3>`,
      `<h4>Here With Me by d4vd</h4>`,
      `<p>This song has 10 lines. But its beachy atmosphere and guitars in the chorus make those 10 lines count to make it so sweet and heartfelt.</p>`,
      `<h4>Dance The Night by Dua Lipa</h4>`,
      `<p>Levitating at home, but Levitating at home is still very good pop. Thank god she hinted at a new sound, and the fruits of that I'll talk about soon.</p>`,
      `<h4>Dancin in the Country by Tyler Hubbard</h4>`,
      `<p>Can this guy that is the less problematic half of FGL make solo hits forever. Also hi Terry Crews.</p>`,
      `<h4>What My World Spins Around by Jordan Davis</h4>`,
      `<p>One of the most sweeping choruses ever, and I never expected it out of the Next Thing You Know guy.</p>`,
      `<h4>Bongos by Cardi B and Megan Thee Stallion</h4>`,
      `<p>This is WAP if they didn't hold anything back even if it might still be a lot. We still need that Cardi album by the way.</p>`,
      `<h4>Great Gatsby by Rod Wave</h4>`,
      `<p>Framing his own affection for this woman and basing it off of Great Gatsby while creating a warm atmosphere is why Rod Wave is so good.</p>`,
      `<h4>Good Good by Usher, Summer Walker, and 21 Savage</h4>`,
      `<p>We haven't got a hit song in Usher, and this is a great reintroduction to him, a song where he and his partner(played by Summer Walker) are both still on amicable terms. 21 Savage needs to be on shit that involves no Drake and nepotism. Please bro stop supporting DRAKE FOR THE LOVE OF GOD(yes this comment wouldnt be relevant when I intended to write this...).</p>`,
      `<h4>La Jumpa by Arcangel ft. Bad Bunny</h4>`,
      `<p>A very sleek, dark banger that sees Bad Bunny take a completely different vibe as his summer album.</p>`,
      `<h4>MONACO by Bad Bunny</h4>`,
      `<p>Speaking of different Bad Bunny songs. Man we need more shit that sounds like this.<br>*redrum by 21 Savage starts playing*</p>`,
      `<p>Ye like that.</p>`,
      `<h4>Tennessee Orange by Megan Moroney</h4>`,
      `<p>I'm very surprised that a Romeo and Juliet country song fueled with college football references HASNT BEEN AN IDEA FOR A COUNTRY SONG YET. This really only missed the list because... the song is about Morgan Wallen. Yes, I'm serious.</p>`,
      `<h4>Cowgirls by Morgan Wallen ft. ERNEST</h4>`,
      `<p>OK MAN JESUS CHRIST. Scared me with my worst take of this year(this is gonna be like 30 on the 2024 YE list). Yes, liking TWO Morgan Wallen songs with trap production should a crime punishable by death. I know. I feel bad.</p>`,
      `<h4>Mourning by Post Malone</h4>`,
      `<p>The most normal-sounding Post Malone song, where dives into alcoholism and people that just want to take advantage of his celebrity for clout. Pretty good listen.</p>`,
      `<h4>Man Made A Bar by Morgan Wallen ft. Eric Church</h4>`,
      `<p>The ONE universally loved song off this godforsaken 36 song album. Please Morgan, make better FUCKING MUSIC.</p>`,
      `<h4>Made You Look by Meghan Trainor</h4>`,
      `<p>Yeah I still feel bad about liking this, that prechorus gets me every time. Shut up, this is NOT worse than any of the other shlock she put out in 2014 or 2023.</p>`,
      `<h4>Used To Be Young by Miley Cyrus</h4>`,
      `<p>Didn't make the list due to the bridge, but this is such a devastating look back on the unfair treatment Miley got over the last decade.</p>`,
      `<h4>Sprinter by Dave ft. Central Cee</h4>`,
      `<p>Love the production, lyrics are... a thing.</p>`,
      `<h4>Despecha by ROSALIA</h4>`,
      `<p>The most bitter, cathartic dance hit of the year.</p>`,
      `<h4>Miracle by Calvin Harris ft. Ellie Goulding</h4>`,
      `<p>A beautiful trance song that Ellie begs to be trusted, and that drop, that ENDING.</p>`,
      `<h4>Kick Back by Kenshi Yonezu</h4>`,
      `<p>THIS SHIT GOES HARD, maybe I need to watch Chainsaw Man for his opening alone.</p>`,
      `<h3>Non-Eligibles</h3>`,
      `<h4>HOTEL LOBBY by Quavo and Takeoff</h4>`,
      `<p>RIP man... at least this is a very good sendoff for Takeoff. I swear to god if Takeoff's estate abuse his voice in new singles like Juice WRLD's, oh god. And yes, Juice WRLD IS STILL BEING GRAVEROBBED, HES HAD FIVE FUCKING ALBUMS POSTMORTEM.</p>`,
      `<h4>Lost by Linkin Park</h4>`,
      `<p>Wow I took so long on this best list that there is a new ALBUM for them... ye will talk more in a future post.</p>`,
      `<h4>DOGTOOTH, SORRY NOT SORRY by Tyler, the Creator</h4>`,
      `<p>Speaking of new album I'll reference in a later post... wow these songs made the Estate Sale deluxe SO worth releasing in 2023.</p>`,
      `<h4>Bizarrap Music Sessions Vol. 54 by Bizarrap ft. Arcangel</h4>`,
      `<p>The huge downgrade from 51-53, but not nearly as bad or mid as 55-57.</p>`,
      `<h4>Rumble by Skrillex, Fred Again..., and Flowdan</h4>`,
      `<p>Please put on headphones for this. Shit sounds like an earthquake is happening. In a good way.</p>`,
      `<h4>Wild Flower by RM</h4>`,
      `<p>Soaring chorus, ultimately got a little tired.</p>`,
      `<h4>Heaven by Niall Horan</h4>`,
      `<p>He should have the success Harry Styles has. Between this and Nice To Meet Ya from 2019, why haven't we let him back on the charts?</p>`,
      `<h4>AMERICA HAS A PROBLEM by Beyonce ft. Kendrick Lamar</h4>`,
      `<p>Man it feels VERY weird speaking about this now, when a black country artist has spent 16 weeks at #1 and the other... again y'all need to wait a little longer(hopefully NOT a year)</p>`,
      `<h4>The Hillbillies by Kendrick Lamar ft. Baby Keem</h4>`,
      `<p>This was my hit of the summer, a Jersey Club song sampling BON IVER, and the Range Brothers are so fun on here.</p>`,
      `<h4>Hits Different by Taylor Swift</h4>`,
      `<p>Why THE FUCK wasn't this on the original album, I would've shot it to #1 over PROVENZA.</p>`,
      `<h4>Annihiliate by Metro Boomin, Swae Lee, Lil Wayne, Offset</h4>`,
      `<p>So Swae Lee better just do Spiderverse shit forever. On THAT note, WHY THE FUCK IS SHAMEIK MOORE SO FUCKING WEIRD BRO.</p>`,
      `<h4>Life Goes On by Ed Sheeran and Luke Combs</h4>`,
      `<p>The second-best Ed song of all time, yes I'm serious. Luke Combs rips my heart out here, jesus.</p>`,
      `<h4>Doomsday by Juice WRLD and Cordae</h4>`,
      `<p>No this is NOT another graverobbing attempt by his estate, this is a genuine project of Juice and Cordae freestyling over an Eminem beat. This is what Em saw in Juice the entire time.</p>`,
      `<h4>Nakamura by Lil Uzi Vert</h4>`,
      `<p>So Lil Uzi Vert made a remix of Shinsuke Nakamura's WWE theme song. I've written this so later he got a new one. And Eternal Atake 2 came out. Woof.</p>`,
      `<h4>Tally by midwxst and Denzel Curry</h4>`,
      `<p>So we need more shit like this. Inject this into to my veins NOW.</p>`,
      `<h4>Rush by Ayra Starr</h4>`,
      `<p>Goddamn I love Afrobeats/amapiano stuff that crosses over.</p>`,
      `<h4>Rush by Troye Sivan</h4>`,
      `<p>Oh ye the other Rush song. Other than the worst hit of all time, this and Johnny Dang charting on the same week made up for it by a lot.</p>`,
      `<h4>TOPIA TWINS by Travis Scott, Rob49, 21 Savage</h4>`,
      `<p>THE ONLY SONG on Utopia I care for.</p>`,
      `<h4>JEALOUSY by Cardi B and Offset</h4>`,
      `<p>Damn where'd these two nickels came from, Cardi B and Offset making another song about the media covering them cannot be it.</p>`,
      `<h4>Desire by Calvin Harris and Sam Smith</h4>`,
      `<p>Ohhhhh here's the culprit, where Calvin Harris makes a trance song with a British artist that crossed over about a decade ago. Unholy is still... bad.</p>`,
      `<h4>Sprinter by Dave and Central Cee</h4>`,
      `<p>Cool ass beat, forgettable ass lyrics.</p>`,
      `<h4>River by Miley Cyrus</h4>`,
      `<p>Why the fuck WASN'T THIS THE HIT, I can just hear the Madonna influence bleed from this song.</p>`,
      `<h4>Cobra (original and remix) by Megan Thee Stallion</h4>`,
      `<p>Megan needs more rockish beats to fit her aggressive tone and justifiably angry psyche. Her past few years have been so fucking unfair.</p>`,
      `<h4>TRUSTFALL by P!NK</h4>`,
      `<p>Holy shit, can fred again PLEASE work away from Ed Sheeran more, one of the best instrumentals all year.</p>`,
      `<h4>Remember by Becky Hill ft. David Guetta (exception)</h4>`,
      `<p>So this got a second wave and was actually more popular globally at this time, so I'll put this here.</p>`,
      `<h4>Que Agonia by Yuridia and Angela Aguilar</h4>`,
      `<p>Such a good regional Mexican song, very warm.</p>`,
      `<h4>Attention by Doja Cat</h4>`,
      `<p>SO PAINT THE TOWN RED WENT #1 AND THIS UNDERPERFORMED. No wonder she went insane(this doesn't justify the weird neo-Nazi shit that happened...)</p>`,
      `<h4>The Loneliest Time by Carly Rae Jepsen ft. Rufus Wainwright</h4>`,
      `<p>So we collectively decided to leave Carly Rae Jepsen just to make the best indie pop hits ever instead of making her a superstar. GREAT.</p>`,
      `<h4>Good Love by Hannah Laing ft. RoRo</h4>`,
      `<p>I found a LOT of EDM shit this year, this was one of its highlights that became big over in Europe more than here.</p>`,
      `<h4>Sarah's Place by Zach Bryan ft. Noah Kahan</h4>`,
      `<p>Below average Zach Bryan song.</p>`,
      `<h4>Watch This (ARIZONATEARS Pluggnb Remix) by Lil Uzi Vert</h4>`,
      `<p>Listen to this in total darkness. It's a TRIP.</p>`,
      `<h4>BONGOS by Cardi B ft. Megan Thee Stallion</h4>`,
      `<p>Wow, it's almost I like WAP the first time, just do it again.</p>`,
      `<h4>New Romantics (TV) by Taylor Swift</h4>`,
      `<p>This DOESN'T ruin the original track. Thank god.</p>`,
      `<h4>Los Del Espacio by A FUCKTON of Spanish artists</h4>`,
      `<p>Wow this is a 5 minute song with like 4 different parts and the flow perfectly through each other.</p>`,
      `<h4>Fragil by Grupo Frontera and Yahritza Y Su Esencia</h4>`,
      `<p>Another extremely warm regional Mexican song, why the fuck were the majority of these hits filled with horns that were recorded in a public restroom???</p>`,
      `<h4>Eve, Psyche, and the Bluebeard's Wife by LE SSERAFIM</h4>`,
      `<p>A Jersey Club inspired Kpop song, how... unoriginal.</p>`,
      `<h4>Can't Catch Me Now by Olivia Rodrigo</h4>`,
      `<p>WAY better than the actual hit that was spawned from the last Hunger Games, coming up on... NINE years. Oh god.</p>`,
      `<h4>ETA and OMG by NewJeans</h4>`,
      `<p>The two lesser hits from this group. I wonder where the third and fourth are.</p>`,
      `<h4>Lace It by JUICE Wrld and Eminem and Benny Blanco</h4>`,
      `<p>FINALLY A GOOD FUCKING EMINEM SONG. (I meant to write about this before that misfire of an album)</p>`,
      `<h4>This Is Why by Paramore</h4>`,
      `<p>I guess they heard the Olivia Rodrigo plagiarism shit and decided to make their own album with a kickass title track.</p>`,
      `<h4>Show by Ado</h4>`,
      `<p>The WarioWare of music, chaotic and goofy; I love it.</p>`,
      `<h4>dashstar* by Knock2</h4>`,
      `<p>More hardbass songs on the EDM charts PLEASE.</p>`,
      `<h4>Ghosts Again by Depeche Mode</h4>`,
      `<p>Making death larger than life, ye can more songs do this?</p>`,
      `<h4>Where You Are by John Summit ft. Hayla</h4>`,
      `<p>Why did this show up in a Geometry Dash playlist? I know it's trance but still.</p>`,
      `<h4>Viaje by Farruko</h4>`,
      `<p>This was such a good summer song for me, sounds very tropical and calm.</p>`,
      `<h4>Drugs from Amsterdam by Mau P</h4>`,
      `<p>AGAIN, please more hard bass.</p>`,
      `<h4>Way Back by Skrillex, PinkPanthress and Trippie Redd</h4>`,
      `<p>Craziest combo ever, and it works.</p>`,
      `<h4>BABY HELLO by Rauw Alejandro ft. Bizarrap</h4>`,
      `<p>Better than their music session somehow. Also Rauw saying "HELLO" reminds me of a FNAF jumpscare.</p>`,
      `<h4>Adore u by fred again... and Obongjayar</h4>`,
      `<h4>Delilah (pull me out of this) by fred again...</h4>`,
      `<p>MORE FRED AGAIN PLEASE.</p>`,
      `<h4>Do It All Again by Punctual ft. Jordan Shaw</h4>`,
      `<p>A song that perfectly loops on itself, a rarity.</p>`,
      `<h4>Not Strong Enough by boygenius</h4>`,
      `<p>Goddamn Phoebe Bridgers might be my spirit animal, easily of my most listened to songs of 2023.</p>`,
      `<h4>Tyler, Forever by McKinley Dixon</h4>`,
      `<p>A self-aware bragadocious rap song that's self-aware about rapping about a dead friend, this somehow works.</p>`,
      `<h4>Float by Janelle Monae</h4>`,
      `<p>So any rap song with a horn line is just guaranteed to be good.</p>`,
      `<h4>Butterflies by Skrillex, Four Tet, and Starrah</h4>`,
      `<p>Skrillex is finally dropping albums this decade, and this chaotic track with a fucking XYLOPHONE BRIDGE is so satisfying to hear.</p>`,
      `<h4>Gigachad Theme - Phonk House Version by g30x_em</h4>`,
      `<p>THIS FUCKING MADE THE EDM YE TOP 100.</p>`,
      `<h3>Albums</h3>`,
      `<h4>DATA by Tainy</h4>`,
      `<p>I did not think a reggaeton album would ever be here, but it's a pretty good showcase, mostly carried by my most listened song of 2024: VOLVER. Of course Skrillex was involved in this.</p>`,
      `<h4>ILLENIUM (self-titled)</h4>`,
      `<p>Some lowlights here, but overall this electronic rock album still sounds great even if they are trying to make Good Things Fall Apart for the 100th time.</p>`,
      `<h4>SCARING THE HOES by JPEGMAFIA</h4>`,
      `<p>THE best album of the year, all these songs are great. This album is just off-kilter, chaotic bangers, including a sample from Milkshake. Fucking amazing.</p>`,
      `<h4>Lets start here. by Lil Yachty</h4>`,
      `<p>I did not expect a funk rock album from the guy who featured on fucking Broccoli. The opener, the black seminole., best non-hit of the year. Hands down.</p>`,
      `<p>The last part to this list season will come... after a few others. I am waiting until February til the Winter Ranking because the charts have been so stale for about 5 months that it isn't worth talking about. But yes,</p>`,
      `<img src="assets/posts/best-2023-part-4/img1.jpg" alt="Screenshot of two Spotify playlists by Asterisk: '2024 Best' and '2024 Worst'">`,
      `<p>The process has started. DON'T worry, I am only do one part for each(at least the worst list) with expanded requirements(including all the rules I used but for the Global Year-end.</p>`,
      `<p>Time to close the last two years of music out.</p>`
    ]
  },
  {
    title: "The Best Hit Songs of 2024",
    date: "2025-09-08",
    tags: ["ranking", "2024", "best"],
    body: [
      `<p>This year was the BEST year of pop music of the 2020s, easily. It had the best pop music phenomenon in years, a meteoric rise of new talent, and of course, brat summer. It made the Taylor Swift album release not feel as big as it would've been in previous years(or this one). Let's not waste time.</p>`,

      `<p>This song might be the first true hit of 2024, going to the top 10 in the first week of January. And it still held up throughout.</p>`,
      `<h4>15. Water by Tyla</h4>`,
      `<img src="assets/posts/best-2024/img1.jpg" alt="Water by Tyla single cover art">`,
      `<p>It's so calming and simmers with its shuffling percussion, drums, and Tyla's bright vocals. The lyrics are simple but fit so thematically to the beachy instrumental that its genre, amapiano, reflects. The entire vibe of this song is... well a vibe, but at the same time, inviting and warm. Honestly, this is just a worse version of PROVENZA, and that is HIGH praise.</p>`,
      `<img src="assets/posts/best-2024/img2.jpg" alt="Screenshot of Water lyrics: 'Can you blow my mind? Set off my whole body'">`,
      `<p>Also, when she says the word "setttt" it actually just makes me smile, the rolling of a single letter just makes this song even cuter.</p>`,

      `<p>SPEAKING of cute.</p>`,
      `<h4>14. Magnetic by ILLIT</h4>`,
      `<img src="assets/posts/best-2024/img3.jpg" alt="SUPER REAL ME EP cover art by ILLIT, featuring Magnetic">`,
      `<p>Probably one of the two simplest picks on the list. I listened to it a lot. It was addictive. That's mostly it. The youthful and bubbly vocals just fly on this synthy beat. From the few lyrics I do understand, the magnetism from the song's title is reflective of... I mean what did you expect. Fucking Coulomb's Law? NO, of course it's about a relationship, or a potential one. This is just so goddamn fun to listen.</p>`,

      `<p>So now take the last two entries combined and... well.</p>`,
      `<p>She finally got me. She made it onto the list.</p>`,
      `<h4>13. Feather by Sabrina Carpenter</h4>`,
      `<img src="assets/posts/best-2024/img4.jpg" alt="Live performance photo of Sabrina Carpenter used in place of Feather's cover art">`,
      `<p>(I can't believe this is the vinyl cover for this song)</p>`,
      `<p>And this is her ONLY entry. I think the reason why Please Please Please missed the list is the opening is too much after repeat listens. Oh and this song is just way better. The light and airiness of the instrumental with the lyrics being a fleeting relationship and being better off without it is weirdly positive and catchy. I just really the melodies and the experience of listening to it. This is a GREAT song to listen with headphones.</p>`,

      `<p>Andddd into the darkest-sounding song so far.</p>`,
      `<h4>12. CHIHIRO by Billie Eilish</h4>`,
      `<img src="assets/posts/best-2024/img5.jpg" alt="CHIHIRO by Billie Eilish single cover art">`,
      `<p>Shit, I just realized I might have to use this image lat... OK WHAT THE FUCK. THESE 4 SHADOWS NEED TO CALM THE FUCK DOWN PLEASE. LET ME FINISH THE GODDAMN LIST.</p>`,
      `<p>Anyways, this song might the first pop song in history to be inspired by Spirited Away. the most well-known Studio Ghibli movie. The title itself is the name of its protagonist, and Billie uses all these genius references to Spirited Away that tells me that she really valued this movie in her album, as themes of it bleed into all of the songs, but especially this song, where the darkly magical feel of the track is extremely apparent. She made such a concept of a song, and I feel bad now. I have it 12.</p>`,

      `<p>AND I FEEL EVEN WORSE for putting this at 11. This is probably the fastest rise to superstardom in a while.</p>`,
      `<h4>11. Good Luck Babe! by Chappell Roan</h4>`,
      `<img src="assets/posts/best-2024/img6.jpg" alt="Good Luck Babe! by Chappell Roan single cover art">`,
      `<p>Man I love Dan Nigro, her and OLIVIA RODRIGO'S producer. And she opened the Guts World Tour, and has never looked back. Never have I remembered an album getting traction an entire year later and her debut single, which flopped and got her signed to Atlantic, getting popular FIVE YEARS LATER.</p>`,
      `<img src="assets/posts/best-2024/img7.jpg" alt="'It's a surprise tool that will help us later' Mickey Mouse Clubhouse meme">`,
      `<p>Ok that's a first.</p>`,
      `<p>This song is her only actual release of this year, too. And what a fucking song it is. An ex-partner that's suppressing her own queerness and the narrator cathartically letting her go is potent. And that goddamn BRIDGE man. HOLY. And having a song that made the VMAs relevant??? Chappell Roan is so goddamn talented to make an anthem of forced hetero relationships of a former lover this good. The fact this didn't make the top 10 is my fault.</p>`,

      `<p>Writing this ranking is 2025 when this song is inexplicably STILL in the top 15 is partly why I haven't wrote anything about this year. But the chart holding over this still brings me joy.</p>`,
      `<h4>10. Die With A Smile by Bruno Mars ft. Lady Gaga</h4>`,
      `<img src="assets/posts/best-2024/img8.jpg" alt="Die With A Smile by Lady Gaga and Bruno Mars single cover art">`,
      `<p>Of course this song is good, you have two of the most talented voices of the previous decade coming together to make the best "live like were dying" type of songs. It's somehow bombastic, yet quaint. Emotional, yet wistful. And somehow still holding up to personal overplay. The opening guitar riff has me gripped every damn time. The instrumental and vocals and lyrics aren't challenging or anything, it's pretty much THE simple pop song of this year. But DAMN can that still be good, from the greatest to do it previously as well.</p>`,

      `<p>Jesus Christ I still need to catch up with Stranger Things. Shit is gonna end soon and what, I'm just not doing it. Definitely not indicative of anything.</p>`,
      `<p>C'mon yall know where I am going with this.</p>`,
      `<h4>9. End Of Beginning by Djo</h4>`,
      `<img src="assets/posts/best-2024/img9.jpg" alt="End of Beginning by Djo single cover art">`,
      `<p>The glimmery, nostalgic-sounding song just hit, honestly. Joe Keery, or "Steve from Stranger Things" really wrote a song about being appreciative and wanting the past back, after physically being away from it for a while. Hm, it's almost like it kinda spoke to me, being even a mere few hours away from home at college. Also, it sounds great.</p>`,

      `<p>Time to get a monkey off my back from about a year ago, putting this not in the Excellent Tier immediately is wild in hindsight.</p>`,
      `<h4>8. Agora Hills by Doja Cat</h4>`,
      `<img src="assets/posts/best-2024/img10.jpg" alt="Agora Hills by Doja Cat single cover art">`,
      `<p>Everything in this song snapped into place. Doja Cat has her fair share of... weird crashouts, I guess is the best way to put it...</p>`,
      `<img src="assets/posts/best-2024/img11.jpg" alt="Screenshot of a headline: 'Doja Cat Addresses Controversial Alt-Right Comedian T-Shirt, Says She's Not a Political Person At All'">`,
      `<p>And it seems like her success is kind of getting to her. She tries to sabotage the song by singing in a "supposedly annoying" voice, but I feel like the contrast between her natural voice and the beat and this voice is genuinely very entertaining. The voicemails should NOT work. But no, in a song where they are trying to keep a relationship but don't want to because of their shared exhibitionist tendencies that sounds fucking magical is fucking magical. SHE IS TOO GOOD AT HER FUCKING JOB TO NOT BE SUCCESSFUL AND ITS TO HER OWN DETRIMENT.</p>`,

      `<p>In any other year, this is the biggest triumph that a hip-hop artist has this year. It's not. For obvious reasons. Doesn't change that he finally, FINALLY got the pop crossover that I've wanted for years.</p>`,
      `<h4>7. Sticky AND Noid AND St. Chroma by Tyler, the Creator</h4>`,
      `<img src="assets/posts/best-2024/img12.jpg" alt="Photo of Tyler, the Creator from the Chromakopia era">`,
      `<p>Chromakopia getting the success that IGOR should've gotten and that See You Again inexplicably gotten is so fucking great. Tyler is so good that his recent album is just a collection of bangers and some randos complained the album was too shallow for his standards. Surely that exact pattern doesn't occur, especially later on this list!</p>`,
      `<p>Oh and:</p>`,
      `<img src="assets/posts/best-2024/img13.jpg" alt="Screenshot of a Sticky lyric: Nigga, give a fuck 'bout pronouns, I'm that nigga and that bitch">`,
      `<p>Is a line that ONLY Tyler can say and get away with it. Almost maes you forget about that random, stupid rumor that he and Jaden Smith were dating before he came out with IGOR.</p>`,

      `<p>The other simple choice on the list.</p>`,
      `<h4>6. Luna by Feid and ATL Draco</h4>`,
      `<img src="assets/posts/best-2024/img14.jpg" alt="Luna by Feid and ATL Jacob single cover art">`,
      `<p>ATL Jacob created a great reggaeton beat that just exudes summer nights. It just sounds so warm and calm, and it came from a fucking hip-hop producer. That's kinda it, there isn't really any deep lyrical meaning as my enjoyment is very separate from that, it being in another language and all. That's all I need from this year. The song quality was so high overall and sometimes that's all that's needed. 2024 was just so great, but we're getting into the meat soon.</p>`,

      `<p>[twister subsides] AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH. [splat]</p>`,
      `<p>Ok jesus christ I was in that for HOW LONG. Why the FUCK is it almost the end of the charting year, lazy FUCK. ANYWAYS.</p>`,
      `<p>Country had an excellent landmark year last year. We had the biggest pop stars crossing over in Beyonce and Post Malone. A guy named SHABOOZEY got one of the biggest songs of the decade by sampling a CRUNK song in country(and also won't go the fuck away)... But of course the best coutnry artist had something in store.</p>`,
      `<p>Oh shit... the Zach Bryan abuse allegations. Riiiight. Welp the next best artist that isn't problematic(YET) can take his place.</p>`,
      `<h4>5. Ain't No Love In Oklahoma AND Where the Wild Things Are by Luke Combs</h4>`,
      `<img src="assets/posts/best-2024/img15.jpg" alt="Ain't No Love In Oklahoma (Twisters: The Album) single cover art by Luke Combs">`,
      `<img src="assets/posts/best-2024/img16.jpg" alt="Where the Wild Things Are single cover art by Luke Combs">`,
      `<p>First off, I can't believe something from the soundtrack of Twisters got popular. After the Spiderverse tracks flopped(after producing a top 10 most popular song of the 2010s in Sunflower), I didn't think ANY movie tracks would have motion. I was very wrong.</p>`,
      `<p>Thank god for it. This shit ROCKS man. The smoky and twangy guitar fits so well with Luke Combs' deeper belting. The chorus is bombastic, but not even that loud and flashy like most traditional rock. Country rock being somewhat successful in 2024 is great.</p>`,
      `<p>And the other reason Luke Combs is one of the best artists working right now: his ability to write the most heart-wrenching, devastating shit ever. This ode to his brother moving out to the West, "where the wild things are", and eventually meeting up with him again years later and him saying he will never leave. But that's where everyone would get got, as the reminiscent instrumental cuts out and the first two lines of the chorus hit, the instrumental picks back up... and you get hit with the swerve. His brother, in the song AND in real life, tragically passes away from a motorcycle accident, which completely flips the chorus lines on his head. Every subsequent listen of this song, having the knowledge the death happens, just kinda puts everything in perspective. This is genuinely the first song that has this unique type of replayability.</p>`,
      `<p>The versatility of this man is important to a country scene that's usually stale and not guilty replaying trends(see: the jelly roll of it all for the last 3 years[note: I do NOT hate jelly roll as an artist on principle, just his overexposure is getting a bit ridiculous]). I really look forward to what he does next.</p>`,

      `<p>From two hits that just rock and rocked me into tears into a song that sounds like cotton candy.</p>`,
      `<h4>4. Igual Que Un Angel by Kali Uchis ft. Peso Pluma</h4>`,
      `<img src="assets/posts/best-2024/img17.jpg" alt="Orquídeas album cover art by Kali Uchis, featuring Igual Que Un Angel">`,
      `<p>NOW THIS is the easiest one to explain. Kali Uchis just has this warm and sultry voice over this heavenly instrumental. I feel like I'm floating through clouds.</p>`,
      `<p>And... that's kinda it. Peso Pluma is fine here. The entire appeal of the song is the sound; it's this high because it has stuck with me the entire year, and it's great. Another foreign-language song that just has a great sound.</p>`,

      `<p>I honestly didn't expect this song to be this high. But yeah. Easily the best country hit of the year. Done by two women who may or may not be gay for each other.</p>`,
      `<h4>3. II Most Wanted by Beyonce ft. Miley Cyrus</h4>`,
      `<img src="assets/posts/best-2024/img18.jpg" alt="II Most Wanted single cover art by Beyoncé and Miley Cyrus">`,
      `<p>AT LEAST THAT'S THE WAY IT READS IN THE SONG. Kinda. Maybe I'm forcing it a little. Maybe this is a friends anthem that could read that way.</p>`,
      `<p>Uhhhhh alright.</p>`,
      `<p>This song is a very simple, stripped-back, guitar-driven anthem, with their vocals blended seamlessly. The vocal chemistry of Miley's rougher, rock-ish vocals and Beyonce's more clean vocals work really well off of each other.</p>`,

      `<p>You know who was gonna be here eventually.</p>`,
      `<h4>2. Kendrick Lamar</h4>`,
      `<img src="assets/posts/best-2024/img19.jpg" alt="Portrait photo of Kendrick Lamar">`,
      `<p>Let's take it back to around March of 2024. I'm still in a pretty uneventful spring semester, when the Future and Metro album starting to blow up. And surprisingly, Kendrick pops up for his first feature since Mr. Morale and The Big Steppers and the one-off single with Baby Keem, "The Hillbillies", nearly a year before this. And he fired back HUGE at Drake and J. Cole, claiming there was no "Big 3", only HE was the first. This SHATTERED the hip-hop landscape, as Lamar did this on a song with known Drake collaborators Future and Metro Boomin.</p>`,
      `<p>This then turned into the craziest month in pop history between pop music's biggest rapper and most acclaimed rapper. There were 8 songs from early April to early May between Drake And Kendrick detailing moles in their labels, fake allegations on domestic abuse, and ANOTHER secret child. And while Drake came out with the weak response of "The Heart Part 6", Kendrick DOMINATED the summer with a club anthem with major quotable lines, calling Drake a PEDOPHILE(which should've been a fact since 2018 but I guess).</p>`,
      `<p>Then Kendrick came out with a surprise album, and that's kinda where we are today. That Super Bowl performance where everyone in the stadium, no, in AMERICA, called Drake a pedophile. It was GLORIOUS. Meanwhile Drake has even lesser connections, got a diss BEAT on him, used that beat in a HORRIBLE song, and created one of the worst songs of 2025 by doing the shit Kendrick criticized him for in the first place. Oh and he mention Millie Bobbie Brown BY NAME.</p>`,
      `<p>Every song from Kendrick is great, so I will talk about every qualifying hit right now:</p>`,
      `<ul>
        <li><strong>Not Like Us</strong> — The aforementioned song of the summer, the accompanying video is also one of the greatest easter-egg-filled music videos of all time.</li>
        <li><strong>Like That</strong> — GODDAMN this metro beat is good. Can he do every Spiderverse</li>
        <li><strong>Euphoria</strong> — Somehow everyone's favorite of the three tracks released this week. Meet The Grahams is my favorite by far, that horrorcore-ass song is genuinely terrifying and Kendrick talking to Drake's family as a concept is diabolical behavior.</li>
        <li><strong>Squabble Up</strong> — GNX has so many vocal clips that have to become memes.</li>
        <li><strong>TV Off</strong> — MUSTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARD. Sorry, force of habit.</li>
        <li><strong>Wacced Out Murals</strong> — A very good intro to the album.</li>
        <li><strong>Hey Now</strong> — Underrated song honestly, great flows and more vocal iconic clips and deadbeat delivery by dody.</li>
        <li><strong>Reincarnated</strong> — THE BEST song on the album.</li>
        <li><strong>Man at the Garden</strong> — Probably the worst song on here, but it's fine honestly, just a precursor to reincarnated.</li>
        <li><strong>Luther</strong> — The second best song album, of course the SZA collab that sounds amazing is Kendrick's biggest of all time.</li>
      </ul>`,
      `<p>The entirety of Kendrick's contributions this year is a pop anomaly we may never see in our lifetimes.</p>`,

      `<h3>Honorable Mentions</h3>`,
      `<ul>
        <li><strong>Lose Control</strong> by Teddy Swims</li>
        <li><strong>A Bar Song (Tipsy)</strong> by Shaboozey</li>
        <li><strong>Too Sweet</strong> by Hozier</li>
        <li><strong>Please Please Please</strong> by Sabrina Carpenter</li>
        <li><strong>Saturn</strong> by SZA</li>
        <li><strong>Pink Skies</strong> by Zach Bryan</li>
        <li><strong>Is It Over Now?</strong> by Taylor Swift</li>
        <li><strong>Wanna Be</strong> AND <strong>Yeah Glo!</strong> by GloRilla</li>
        <li><strong>Houdini</strong> by Dua Lipa</li>
        <li><strong>Redrum</strong> by 21 Savage</li>
        <li><strong>Lunch</strong> by Billie Eilish</li>
        <li><strong>Type Shit</strong> by Future, Metro Boomin, Travis Scott, and Playboi Carti</li>
        <li><strong>Made for Me</strong> by Muni Long</li>
        <li><strong>I Like the Way You Kiss Me</strong> by artemas</li>
        <li><strong>Timeless</strong> by Playboy Carti ft. the Weeknd</li>
        <li><strong>Bling-Bang-Bang-Born</strong> by Creepy Nuts</li>
        <li><strong>Unwritten</strong> by Natasha Bedingfield (YES THE ONE FROM THE 2000s)</li>
        <li><strong>Yellow</strong> by Coldplay (would be eligible but made the Global YE in 2021)</li>
        <li><strong>Murder On The Dancefloor</strong> by Sophie Ellis-Bextor (my real #1)</li>
        <li><strong>Pedro</strong> by Jaxomy, Agatino Romero, and Raffaella Carra</li>
        <li><strong>Guess</strong> by Charli XCX ft. Billie Eilish</li>
        <li><strong>The Emptiness Machine</strong> by Linkin Park</li>
        <li>17. <strong>Hiss</strong> by Megan Thee Stallion</li>
        <li>16. <strong>Million Dollar Baby</strong> by Tommy Richman</li>
      </ul>`,

      `<h3>Non-Eligibles</h3>`,
      `<ul>
        <li><strong>Girl Next Door</strong> by Tyla and Ayra Starr</li>
        <li><strong>Overcompensate</strong> AND <strong>Midwest Indigo</strong> by Twenty One Pilots</li>
        <li><strong>Obsessed</strong> by Olivia Rodrigo</li>
        <li><strong>Places to be</strong> by Fred again... ft. Anderson .paak and CHIKA</li>
        <li><strong>Go Back</strong> by John Summit and Sub Focus ft. Julia Church</li>
        <li><strong>Let It Burn</strong> by Shaboozey</li>
        <li><strong>Red Wine Supernova</strong> by Chappell Roan</li>
        <li><strong>Super Graphic Ultra Modern Girl</strong> by Chappell Roan</li>
        <li><strong>L'AMOUR DE MA VIE</strong> by Billie Eilish</li>
        <li><strong>Halfway To Hell</strong> by Jelly Roll</li>
        <li><strong>The Door</strong> by Teddy Swims</li>
        <li><strong>Jump</strong> by Tyla ft. Gunna and Skillibeng</li>
        <li><strong>Addicted</strong> by Zerb ft. the Chainsmokers and Ink</li>
        <li>Runner-up for Eurovision 2024: <strong>Rim Tim Tagi Dim</strong> by Baby Lasagna</li>
        <li><strong>Mind Still</strong> by Sonny Fodera ft. Blythe</li>
        <li><strong>How Sweet</strong> by NewJeans</li>
        <li><strong>BANDIT</strong> by Don Toliver</li>
        <li><strong>If u think i'm pretty</strong> by Artemas</li>
        <li><strong>Mmhmm</strong> by BigXthaPlug</li>
        <li><strong>PUNK TACTICS</strong> by Joey Valence & Brae</li>
        <li><strong>On My Body</strong> by Tyla ft. Becky G</li>
        <li><strong>Nasty</strong> by Tinashe</li>
        <li><strong>Apple</strong> by Charli XCX</li>
        <li><strong>M-E-X-I-C-O</strong> by Post Malone ft. Billy Strings</li>
        <li><strong>Nosedive</strong> by Post Malone ft. Lainey Wilson</li>
        <li><strong>Napalm</strong> by Pendulum ft. Joey Valence & Brae</li>
        <li><strong>SURFING A TSUNAMI</strong> and <strong>PLUTOSKI</strong> by Future</li>
        <li><strong>Heatstroke</strong> by Khalid</li>
        <li><strong>Crazy</strong> by LE SSERAFIM ft. PinkPanthress</li>
        <li><strong>BIG PRESSURE TRILL MIX</strong> (Swerve Strickland's theme from AEW All In 2024)</li>
        <li><strong>Mantra</strong> by JENNIE</li>
        <li><strong>I LUV HER</strong>, <strong>HOW I LOOK</strong>, <strong>DON'T DESERVE</strong> by GloRilla ft. Various Artists</li>
        <li><strong>Ego</strong> by Halsey</li>
        <li><strong>ART</strong> by Tyla</li>
        <li><strong>So Much In Love</strong> by D.O.D.</li>
        <li><strong>Cold Reactor</strong> by Everything, Everything</li>
        <li><strong>Into The Storm</strong> by Marianas Trench</li>
        <li><strong>GOT ME GEEKED</strong> by Denzel Curry</li>
      </ul>`,

      `<h3>Albums</h3>`,
      `<ul>
        <li><strong>NO HANDS</strong> by Joey Valence & Brae</li>
        <li><strong>SMILE! :D</strong> by Porter Robinson</li>
        <li><strong>I LAY DOWN MY LIFE FOR YOU</strong> by JPEGmafia</li>
      </ul>`,

      `<p>And what beat Kendrick, you may all be wondering. Honestly, this was the latest switch I could've made. I just liked a singular song better.</p>`,
      `<p>The best song from Billie Eilish.</p>`,
      `<p>Yup, this is that tool, in a sense.</p>`,
      `<h4>1. BIRDS OF A FEATHER by Billie Eilish</h4>`,
      `<p>Now that these 4 shadows have finally dissipated. I don't have much to say about this. It sounds fucking beautiful and perfect and ethereal. Actually, just listen to this. "It sounds like Hamilton". YEAH AND HAMILTON IS A GOATED MUSICAL. This is the best hit from Billie, and it doesn't even sound like a Billie song at all, even through all of her musical evolution.</p>`,
      `<p>I would've had nothing to say but... a recent use of the song made me so fucking mad.</p>`,
      `<img src="assets/posts/best-2024/img20.jpg" alt="Screenshot from a TV show scene of a couple in bed, set right after a proposal">`,
      `<p>LIKE RIGHT AFTER THE PROPOSAL TOO ARE WE FUCKING DEADASS. I was VISIBLY upset while watching this scene to open episode 3. Deadass almost tainted the song for me.</p>`,
      `<p>But nothing could taint this song. Even an extremely hamfisted marriage that we knew wasn't gonna work. This song is timeless.</p>`,
      `<p>And finally, the reason I've been so detached from the music scene. Time for what the fuck 2025 is.</p>`
    ]
  },
  {
    title: "The Best Hit Songs of 2023... Part 5",
    date: "2025-09-08",
    tags: ["ranking", "2023", "best"],
    body: [
      `<p>This is like 2.5 years in the making, I again am so sorry for being this terribly late. I haven't even opened the document for this(which I will be having a shareable link for the process of creating the worst and best lists, it's a BEHEMOTH) in over 2 months. I still need to do a SEASONAL RANKING for the current year(which has been pretty slow outside of some(?) movement in the charts.</p>`,
      `<p>Again 2023 is not the best year for music, which is mostly dragged down by the worst song to hit number 1 ever(this includes a literal pro-war anthem in the 1960s), and even the cream of the best songs crop includes some old-ass songs. But goddamn, the highs of this year are HIGH, containing probably one the best songs EVER, and this list is pretty much that song and other excellent songs around it that somehow AREN'T the best of all time. Seriously, this list is chock-full of all songs that are the best of the best of artists' pop catalogues, AND IT STILL ISN'T #1. Strap. THE FUCK. In.</p>`,

      `<p>Oh right, this is an official top 10, starting with #9.5. Yes, I know. It's a bit of an oversight but it worked out, this is so good.</p>`,
      `<p>The 2020s don't really have a defining sound, at least not yet. I don't think the horrible sampling from 2022 count(at least I hope it doesn't). It's pretty much whatever gets popular from TikTok and whatever the big labels push.</p>`,
      `<p>That's why this spot is dedicated to the two movements that at least TRIED to be a defining sound.</p>`,
      `<h4>9.5. Jersey Club and Drum and Bass</h4>`,
      `<p>And I cannot begin to start talking about these sounds have improved the charts without talking about the biggest hits from them.</p>`,
      `<h4>Just Wanna Rock by Lil Uzi Vert</h4>`,
      `<img src="assets/posts/best-2023-part-5/img1.jpg" alt="Just Wanna Rock by Lil Uzi Vert single cover art">`,
      `<p>This sounds like Eternal Atake 1's intro(we DO NOT talk about 2, do not take nitrous while making music, as evidenced by 2 and the Vultures project). I just love the revving energy of this, as the infectious bass compliments the glittery synths so well. Uzi does enough to make this banger pretty damn enjoyable too.</p>`,
      `<h4>Boy's A Liar Pt. 2 by PinkPanthress ft. Ice Spice</h4>`,
      `<img src="assets/posts/best-2023-part-5/img2.jpg" alt="Boy's A Liar Pt. 2 (Evan Pierini Remix) cover art by PinkPanthress ft. Ice Spice">`,
      `<p>This isn't an official cover, but it encapsulates what this song sounds like: an 8-bit Barbie game. The chiptune with the Jersey Club-esque bassline gives it such a unique and fresh, what this decade was desperately missing. And Pink's voice sounds really soft and bubbly, which is her usual shtick, but over this it sounds really good(as her voice pretty much compliment most of her own work). Somehow, the effortless cool of... fucking Ice Spice put this over the top. I honestly do not care that much about the lyrics because the sound is just that good and fresh and new. I might hammer this point a lot this segment.</p>`,
      `<p>Speaking of fucking Ice Spice.</p>`,
      `<h4>Princess Diana by Nicki Minaj & Ice Spice</h4>`,
      `<img src="assets/posts/best-2023-part-5/img3.jpg" alt="Princess Diana by Nicki Minaj & Ice Spice single cover art">`,
      `<p>I honestly don't have much to say about this, song is just really good, Nicki Minaj somehow is good for a feature on a hit for the second year in a row. This was an early contender for the top 10, but I don't feel as strongly about this as I used to(as it has been yunno... 2 years).</p>`,
      `<p>But somehow, these songs and sounds are so great on their own, that it even can cross the language barrier.</p>`,
      `<h4>WHERE SHE GOES by Bad Bunny</h4>`,
      `<img src="assets/posts/best-2023-part-5/img4.jpg" alt="WHERE SHE GOES single cover art by Bad Bunny">`,
      `<p>This just sounds great, the gun reload incorporating into the usual Jersey Club beat. And I can actually hide behind the fact that the lyrics don't matter because it's in a different language entirely! Just like the other two foreign language songs in this slot.</p>`,
      `<h4>Super Shy by NewJeans</h4>`,
      `<img src="assets/posts/best-2023-part-5/img5.jpg" alt="Super Shy single cover art by NewJeans">`,
      `<p>The sound that NewJeans is like the glittery adjacent of what PinkPanthress goes for honestly, and we need more shit like this, honestly. It's so bright and cute and we need a bit of that in our pop scene. Just like we need more calm and quiet instrumentals for these types of sounds as well, I like variety! Oh wait what's that. You're telling me the same band did that? Oh, ye!</p>`,
      `<h4>Ditto by NewJeans</h4>`,
      `<img src="assets/posts/best-2023-part-5/img6.jpg" alt="Ditto single cover art by NewJeans">`,
      `<p>This is their best song too, easily would've made the list on its own without me shoehorning an entire style of music that defined a year. I fucking adore this song. The calm and collected vibe of a normally noisy sound is such a good choice to the pillowy soft vocals. And the lyrics, at least the English parts, have such a cute concept, hoping that the person you're crushing on is also sharing these feelings. Holy shit this song is so good. And somehow isn't the best song of this.</p>`,
      `<h4>Strangers by Kenya Grace</h4>`,
      `<img src="assets/posts/best-2023-part-5/img7.jpg" alt="Strangers by Kenya Grace single cover art">`,
      `<p>Has any song been more perfect for night driving? Wow, I am kinda speechless when talking about the song. Its appeal is so simple. Again, another smaller-sounding drum-and-bass song that is about... a complete takedown of hookup culture and how it is destroying the psyche of the artist. And the ethereal energy of the beat making every relationship so finite and ephemeral is such a nice touch. I loved this song for a long ass time and I can finally gush about it fully. Can you tell that it's killing me writing this two years late, ultimately pushing everything else to the side. Thank god(and unfortunately) 2025 is turning out to be A NOTHING OF A YEAR. But that's for another time...</p>`,

      `<p>This list is so stacked one of my favorite country songs of all time is only here. Well, this is also kinda folky, but I think I get to cheat here.</p>`,
      `<p>So, HOW THE FUCK DID POST MALONE IMPROVE THIS SONG.</p>`,
      `<h4>9. Dial Drunk by Noah Kahan ft. Post Malone</h4>`,
      `<img src="assets/posts/best-2023-part-5/img8.jpg" alt="Dial Drunk by Noah Kahan ft. Post Malone single cover art">`,
      `<p>I am so goddamn happy this actually made the year-end list, even if Billboard is getting less and less indicative of what is actually big. Why is a song where its protagonist is unwaveringly pathetic so fucking fun to sing along to? The folk guitar line is so addictive it's crazy. Post Malone is making me realize the One Right Now of it all was a fucking fluke, he plays into the themes of this song of cops pulling you over and asking you why you're drunk and sad and alone and makes it, really fucking fun. And that's really it. The appeal being simple is probably why this is kind of low. I know I might've undersold it as one of my favorite country songs of all time, but yeah the list is pretty small as of right now. Still, cannot deny my love for this rush of happiness of a song.</p>`,

      `<p>The Global Charts have helped me with following the new music, so much to the point where I might be using them as the chart for my top 20 rankings(especially with the increasing staleness of the Hot 100). But it has its own problem. A problem that has kinda spawned some... peculiarities of what we actually listen to. This problem, flaw is the no recurrency rules of the Global 200, where if a song is really popular for a very long time, it will STILL chart, even if it wasn't released that year or the previous, or wasn't ORIGINALLY popular until that year. Which means, if a song that was years old but finally gets popular in a random year, such as 2023, it can make the Global 200 Year End, when it would never touch the Year End. This is the main way I can "cheat" on the Year End Lists. But goddamn I love cheating if this is the result.</p>`,
      `<h4>8. Money Trees by Kendrick Lamar ft. Jay Rock</h4>`,
      `<img src="assets/posts/best-2023-part-5/img9.jpg" alt="good kid, m.A.A.d city album cover art by Kendrick Lamar, featuring Money Trees">`,
      `<p>This is one of Kendrick Lamar's most defining, and most streamed traditional non-hit, songs ever. And it's about bag-chasing and the lifestyle that came with it in Compton. And this song should've been a precursor to current-era, as the "ya bish" at the end of most lines in verses is similar to the other vocal stims that are rife in GNX. "MUSTARD", "hey now say now", need I say more, even if I'm getting a bit ahead of myself. That chorus line of "the one in front of the gun lives forever" grows even more haunting by the year, as more names are added to the hallowed list of race-related hate crimes, including famous celebrities(like the Xs and Takeoffs of the world). The hustle of the narrator and the violence that surrounds seems like just another day, another home invasion. This song surprisingly fits the bleakness of the current streaming era, as current events indicate. Oh, the Jay Rock verse sounds really nice.</p>`,
      `<p>A never-forgotten gem from the GKMC era of Kendrick that resurged in the current decade shines through.</p>`,

      `<p>Andddd another hard swerve into one of the most beautiful and lovely songs ever constructed in a studio. It's a fucking piano ballad. I love it.</p>`,
      `<h4>7. In Your Love by Tyler Childers</h4>`,
      `<img src="assets/posts/best-2023-part-5/img10.jpg" alt="In Your Love by Tyler Childers single cover art">`,
      `<p>The pedal drums, the piano, and even the synthesized keys gives it such a warm and genuine feel and touch. The rougher guitar right before the quieter bridge just accentuates how much the narrator loves whoever they love. Goddamn the lyrics are a little but basic, but the charm and folkiness of the entire song just overpowers it. This is a song of beauty of what one love can do to someone, because they love them that much. I adore this decree of passion so goddamn much.</p>`,

      `<p>We need more country rock.</p>`,
      `<h4>6. White Horse by Chris Stapleton</h4>`,
      `<img src="assets/posts/best-2023-part-5/img11.jpg" alt="White Horse by Chris Stapleton single cover art">`,
      `<p>I need this shit in my veins. The crushing guitars and the grandiose framing of the song itself makes it TITANIC, seeming like the biggest hit song ever. It's so sweeping and huge. And it is about not being ready for a steady relationship when being swept up with someone else, them wanting this savior of a partner but Chris just isn't that. But he seems to really love his partner and is wanting his partner to hold for the better days ahead, as they mature together. But those damn guitars bring me back every time. And the instrumentation keeps building and building to the chorus every time. Fucking killer. Stapleton is one of the best country artists we have now, really hope this is indicative of signs to come.</p>`,

      `<p>How is Billie Eilish's best song so far... at number 5.</p>`,
      `<h4>5. What Was I Made For? by Billie Eilish</h4>`,
      `<img src="assets/posts/best-2023-part-5/img12.jpg" alt="What Was I Made For? by Billie Eilish single cover art">`,
      `<p>Of course her contribution to the Barbie Movie album is making one of the most devastating self-reflections, portraying her as a Barbie doll and spinning it into the premise of, what was she made for? What was her purpose? And man does this shit HIT. The piano, or more accurately, lack thereof just adds to the devastation.</p>`,
      `<p>It also adds to the lack of knowledge that we the listeners know about an artist. They can have everything, the money, the popularity, even a relationship. But we never know if they are truly happy, goes to show how parasocial we are to artists. But yeah, this song is just heavy, and somehow Billie only gets better the years go by.</p>`,

      `<p>Remember what I said about the Global Charts? They strike again.</p>`,
      `<p>There has been one really notable song that has been inexplicably huge on Spotify throughout this decade, and is probably one of the biggest hits of all time on Spotify. And it's from an artist that hasn't really gotten a lot of mainstream success, but is a critic darling among his peers, ESPECIALLY among his peers honestly. This song isn't just ok, it's</p>`,
      `<p><strong>OKOKOKOKOKOKOK</strong></p>`,
      `<h4>4. See You Again by Tyler The Creator ft. Kali Uchis</h4>`,
      `<img src="assets/posts/best-2023-part-5/img13.jpg" alt="Flower Boy album cover art by Tyler, the Creator, featuring See You Again">`,
      `<p>This list has been chock-ful of different emotions, from love to devastation, to now just full-blown delusion about a love. The person that Tyler is in love with isn't even real, but is prepared to be in a relationship with them. The lush, summery atmosphere is also very jarring to hear, at least from Tyler himself. He usually has his lane(before 2018) of very harsh-sounding hip-hop, as seen off of Goblin.</p>`,
      `<p>Another observation is that this song doesn't have any sort of pronouns, which is really important for Tyler, the Creator, as he came out around this time. This, AGAIN, was really jarring, juxtaposed to harsh, edgelord lyrics of his earlier work. His evolution into softer music exploring more emotional themes was evidently really surprising. Also, this type of unrequited love always becomes of these cult classics, even though it re-emerged through TikTok and a constant state of streaming off Spotify, appearing on its top 50 consistently there for THREE YEARS. It finally making the global YE in 2023 is miraculous. And this song almost wasn't his. It was originally... wait that can't be right... ZAYN'S FROM 1D????? Of course he flaked on the studio and that's the reason Tyler kept this generational masterpiece that only up being number 4.</p>`,

      `<p>Cruel Summer only ended up being at #3, I am so sorry.</p>`,
      `<h4>3. Cruel Summer by Taylor Swift</h4>`,
      `<img src="assets/posts/best-2023-part-5/img14.jpg" alt="Lover-era Taylor Swift video thumbnail used for Cruel Summer">`,
      `<p>Yeah, the best Taylor Swift song, even better than All Too Well, Style, and many others, only #3. I can't believe there were 2 songs better than this one, but here we are. This is honestly shocking to even me, I thought this was a lock for #1 ever since it surged due to the Eras Tour and rediscovery due to... what else can it be other than TikTok.</p>`,
      `<p>But why is this the best Taylor Swift I've ever heard. Well come on, every aspect of this pop song is pretty much perfect. And I don't want that label to be passed around everywhere. Here's the short list of every song I consider perfect(pulling from my Spotify Liked, also another recommendation list, and kinda spoils my future Top 20 pop songs of the 2010s):</p>`,
      `<ul>
        <li>world.execute(me); by Mili</li>
        <li>Stan by Eminem</li>
        <li>Green Light by Lorde</li>
        <li>Need You Now by Lady A</li>
        <li>Viva La Vida by Coldplay</li>
        <li>Blinding Lights by the Weeknd</li>
        <li>Adore You by Harry Styles</li>
        <li>Good Days by SZA</li>
        <li>All Too Well (10 minute version) by Taylor Swift</li>
        <li>Adventure Of A Lifetime by Coldplay</li>
        <li>Take Care by Drake and Rihanna</li>
        <li>Hard Times by Paramore</li>
        <li>夜に駆ける by YOASOBI</li>
        <li>Seventeen Going Under by Sam Fender</li>
        <li>Black Skinhead by Kanye West</li>
        <li>PROVENZA by Karol G</li>
        <li>Moth To A Flame by Swedish House Mafia and the Weeknd</li>
        <li>Perfect by One Direction (ok this is one of the only joke entries because the song is literally named Perfect)</li>
        <li>Instant Crush by Daft Punk ft. Julian Casablancas</li>
        <li>Addicted to A Memory by Zedd ft. Bahari</li>
        <li>Look At The Sky by Porter Robinson</li>
        <li>Borderline by Tame Impala</li>
        <li>ocean eyes by Billie Eilish</li>
        <li>VOLVER by Tainy, Skrillex, Four Tet, and Rauw Alejandro</li>
        <li>Not Strong Enough by boygenius</li>
        <li>Goodbye To A World by Porter Robinson</li>
        <li>The Less I Know The Better by Tame Impala</li>
        <li>The Sound by the 1975</li>
        <li>Curtains by Ed Sheeran</li>
        <li>The best hit song of 2024, I cannot spoil it right now</li>
        <li>nihilist blues by Bring Me The Horizon</li>
        <li>Super Graphic Ultra Modern Girl by Chappell Roan</li>
      </ul>`,
      `<p>A bigger list than expected, and Cruel Summer is definitely part of this list as well. Every musical choice in this song is just right. The background robot voices, the chorus literally breaking down into millennial whoops rhyming with the title line, and that FUCKING BRIDGE playing twice, with one having half the instrumental, and the other having the full instrumental, it's one of the most iconic bridges of the modern day. Like... I know I shouldn't say this, but this is fucking Cruel Summer by Taylor Swift. You know this song. It's everything.</p>`,
      `<p>And it got beat out by country songs.</p>`,

      `<p>Yeah.</p>`,
      `<h4>2. I Remember Everything by Zach Bryan ft. Kacey Musgraves</h4>`,
      `<img src="assets/posts/best-2023-part-5/img15.jpg" alt="I Remember Everything (ft. Kacey Musgraves) single cover art by Zach Bryan">`,
      `<p>Seriously.</p>`,
      `<h4>AND Dawns by Zach Bryan ft. Maggie Rogers</h4>`,
      `<img src="assets/posts/best-2023-part-5/img16.jpg" alt="Dawns single cover art by Zach Bryan">`,
      `<p>These are now my favorite country songs of all time.</p>`,
      `<p>I Remember Everything is an anomaly of a song, in what it did and what it represents. First off, there was a stretch in late August- early September where the country scene was going through the worst discourse in their history, encompassing astroturfing, sundown towns, and straight up getting a cover into the top 5(although the cover of Fast Car was in fact really good). Then Zack Bryan drops this masterpiece of a song, album-bombs the charts, which a country artist whose name isn't Morgan Wallen has never done before, and gets a #1 hit with Kacey Musgraves off of it being an excellent song. Kacey Musgraves has been essentially blacklisted from the country scene for her previous two albums being "too pop"(because Music Row has been a toxic misogynistic place for YEARS on end, why do you think women in country get almost no spotlight compared to men).</p>`,
      `<p>And why is it excellent? Well Zach's and Kacey's vocals are some of the most emotive and colorful vocals in the entire scene, reflecting on a dying relationship and despite the lump sums of alcohol they drink, they can't forget the fact that they have failed to keep promises, and repeated the patterns of their parent's dying relationship. The light strings and pedal steel just set in the devastation of the listener, almost eerily similar of the instrumentation's effect in Something In The Orange. And despite all the issues they had, the 88 Ford is a representation of the happy memories they had, but also an old pastime object that was handed down by his father. Jesus CHRIST. A song of this emotional weight IMMEDIATELY hitting #1 is something that really hasn't happened, usually these songs debut in the 50s, then slowly rise up to be generation-defining hits. I was wrong. It stayed for so long that it managed to make the 2024 YE list too.</p>`,
      `<p>It's also NOT my favorite of the two. Dawns is somehow even better and goes even harder and heavier with a different female singer. And it has taken me 3 entire years to get to this one, charting in the 40s, never getting that push it so desperately deserves, but making it because the streaming numbers were just good enough. And my god this should BE the country song of this decade like Need You Now was a decade ago.</p>`,
      `<p>A repeating theme of a dying relationship affected by parents is shown here. The ambulance wail in the beginning leading into the guitar is a great detail to even include, as the man's mother passes by a heart attack, and he is trying to save his relationship with this woman, begging for his dawns back. Zach Bryan's fraught, desperate, and pitchy vocals just gets me. This is somehow his worst and best vocal performance at the same time.</p>`,
      `<p>The second part is where everything flips and tugs at my heart strings. This relationship cannot be saved, even if he wasted his dawns on his relationship in spite of his mother. He did everything to save what was left, but the woman realizes that her dawns were being wasted, even if the relationship started with them having fun, it seems t have taken a turn at some turn. The line of "life is as fleeting as a passing dawn" is used and executed so artfully both times, as one is based on the mother's passing and the other use is a stark realization that her time is better spent away from this relationship. The chorus itself can be a double meaning, where Zack loses her and his lover due to the same heart attack(or a literal and figurative one). This might be the best chorus ever written in any song.</p>`,
      `<p>These songs, in a genre that I normally do not like, have wormed their way into my heart and into my personal all-time lists. AND THIS IS NUMBER 2. What can POSSIBLY be number 1.</p>`,
      `<p>Side note: this list took so long that at the end of 2024, there were some abusive allegations that came out against Zach Bryan, and he himself confirmed he has split with his partner and has gone to therapy. This makes these songs EVEN MORE haunting, and in a sick, twisted way, possibly better. It's honestly like the 2013 controversy of "Do What I Want" by Lady Gaga ft. R. Kelly, where R. Kelly's verse completely twists her words and completely misses the point of the songs, and the euphemism of him being Gaga's relationship with the media getting even stronger when HIS allegations came out. His jarring switches to the songs portrays the media as an even more evil and overpowering figure, and there hasn't been a hit song that has even come close to this dynamic, but this situation and the whole Lizzo controversy has somewhat come close.</p>`,

      `<p>I would say "my favorite pop song of all time", but that is so apparent. This ranked above my favorite country song, the best Taylor song, a cult classic, Billie's best song, and even one of the standouts of Kendrick's discography. It's about another break-up.</p>`,
      `<p>But the context of this artist and the unique sound of this has rocketed this to a generational hit. And chart-wise it did nothing special. It started at #100, rose up all the way to 22, stayed for 22 weeks, and left. It means so much more, to me, and to another country themselves. Let me introduce you guys... to RAYE.</p>`,
      `<h4>1. Escapism by RAYE ft. 070 Shake</h4>`,
      `<img src="assets/posts/best-2023-part-5/img17.jpg" alt="Escapism by RAYE single cover art">`,
      `<p>RAYE is a British singer-songwriter that mixes a lot of different genres in her debut album last year, My 21st Century Blues, where Escapism resides. However, she has been in the industry for nearly a decade. So why the fuck did she just NOW release her debut album, you may ask? Her record label.</p>`,
      `<p>Polydor signed her in 2014 when she featured on a 4-album deal, and kept on featuring on EDM hits and writing behind the scenes. During this time, she continued to feature on EDM hits and also honed her skills writing behind the scenes for other artists. While she was contributing to the music world, her own artistic voice wasn't taking center stage, often limited to dance tracks. By 2021, she had years of unreleased music and made her album contingent on the success of her latest single "Call On Me".</p>`,
      `<img src="assets/posts/best-2023-part-5/img18.jpg" alt="Screenshot of a chart table showing Call On Me peaking at 64 and 70">`,
      `<p>It was in fact, not successful.</p>`,
      `<p>The pressure to perform numbers-wise, her battle with addiction, and a past sexual assault incident with someone within the label led her to speak out in June of 2021, officially making her an independent artist. Her debut album, My 21st Century Blues, then released to a huge critical and commercial success, giving RAYE her first #1 UK single and the biggest hit by an independent artist in 10 years.</p>`,
      `<p>Escapism itself is a song about a breakup and its drug-filled, depressing, and miserable aftermath. The strings and kick drum sounds like a spiral down into whatever fucked up shit she will get into. However, I also interpret as her escaping her contract as well, as that dispute is so inherently tied to this song. She does not have the industry backing her anymore. She's alone, but independent. And she chose to take all the emotion and release it in this one song. An anthem that is extremely raw, honest, dark, yet cathartic all at the same time. This is not a perfect, objectively good song. But goddamn, I felt this song A LOT. Getting out of a toxic situation and finally finding peace in her coping shows her talent, struggle to leave her label, and the catharsis to finally leave her label all at the same time and I FUCKING love it.</p>`,
      `<img src="assets/posts/best-2023-part-5/img19.jpg" alt="Screenshot of the 070 Shake lyric: 'Be at peace with the things you can't change (Last night)'">`,
      `<p>Also this is now my favorite line in a pop song ever as well. The delivery of this line from 070 Shake gave me INSANE chills the first few times, it sounds like your internal thoughts are grounding you in a turbulent moment.</p>`,
      `<p>And that is what makes this song my favorite pop song. Of all time. It was a slow burner at first. But I just kept on going back to it and every bit of info I found about this song made this creep up in my heart.</p>`,

      `<p>Oh god, the 4 shadows from months have finally shown themselves. (note: this is why you don't write separate parts of a ranking with bits EIGHT MONTHS APART)</p>`,
      `<p>Time for the 2024 Best List. God I hope I never have to catch up like this ever again.</p>`
    ]
  }
];
