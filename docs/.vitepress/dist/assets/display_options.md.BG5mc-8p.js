import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Bx6qu0xe.js";const t="/assets/display_options.Bh8Yl46d.png",p="/assets/display_options_test.DHG6wc49.png",l="/assets/display_options_output.KgFpwZzj.png",F=JSON.parse('{"title":"add_text","description":"","frontmatter":{},"headers":[],"relativePath":"display_options.md","filePath":"display_options.md"}'),h={name:"display_options.md"},e=n(`<h1 id="add-text" tabindex="-1">add_text <a class="header-anchor" href="#add-text" aria-label="Permalink to &quot;add_text&quot;">​</a></h1><p>a method to display a options in screen and choose one to execute the function of the choosen option .</p><h2 id="how-to-use" tabindex="-1">How To Use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How To Use&quot;">​</a></h2><p>from TerminalFramework call display_options() and it takes 2 parameters :</p><p>1- options_list : list of the options you want to show in screen</p><p>2- functions_list : list of functions each option take function by index</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TerminalFramework.display_options(options_list, functions_list)</span></span></code></pre></div><p><strong>input</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> option1_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url_prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Enter the URL: &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Terminal_Framework.get_user_input(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,url_prompt)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;pic.jpeg&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.get(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r.ok:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file_name, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;wb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            f.write(r.content)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> op2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jj&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> op3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Option 1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Option 2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Option 3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">functions_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option1_function, op2, op3]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Terminal_Framework.display_options(options_list, functions_list)</span></span></code></pre></div><p><img src="`+t+'" alt="Example"></p><p><strong>output</strong></p><p>if you select option1 and press Enter Key the function of option1 will run .</p><p>Note : fun1. download a picture from internet .</p><p><img src="'+p+'" alt="Example"></p><p>function1 complete execution....</p><p>The Resulte :</p><p><img src="'+l+'" alt="Example"></p>',17),k=[e];function o(r,E,d,g,c,y){return a(),i("div",null,k)}const u=s(h,[["render",o]]);export{F as __pageData,u as default};