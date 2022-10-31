

function Header() {
    return (
                <header className="navbar navbar-default container" id="navbar" role="banner">
        <div className="navbar-header">
            <div className="region region-navigation">
                <a className="logo navbar-btn pull-left" href="/" title="Home" rel="home">
                    <img src="https://learnenglish.britishcouncil.org/sites/podcasts/themes/bc_ui/logo.svg"
                        alt="Home" />
                </a>
                <a className="name navbar-brand" href="/" title="Home" rel="home">LearnEnglish</a>
                <section id="block-mobile-search-form"
                    className="block block-le-common block-mobile-search-form clearfix">



                    <a href="/" className="btn icon-search">Search</a>
                    <form className="search-block-form" data-drupal-selector="search-block-form" action="/search/node"
                        method="get" id="search-block-form" accept-charset="UTF-8">
                        <div
                            className="form-item js-form-item form-type-search js-form-type-search form-item-keys js-form-item-keys form-no-label form-group">
                            <label for="edit-keys" className="control-label sr-only">Search</label>


                            <div className="input-group"><input title="Enter the terms you wish to search for."
                                    data-drupal-selector="edit-keys" className="form-search form-control"
                                    placeholder="Search" type="search" id="edit-keys" name="keys" value="" size="15"
                                    maxLength="128" data-toggle="tooltip" /><span className="input-group-btn"><button
                                        type="submit" value="Search"
                                        className="button js-form-submit form-submit btn-primary btn icon-only"
                                        name=""><span className="sr-only">Search</span><span
                                            className="icon glyphicon glyphicon-search"
                                            aria-hidden="true"></span></button></span></div>



                        </div>
                        <div className="form-actions form-group js-form-wrapper form-wrapper"
                            data-drupal-selector="edit-actions" id="edit-actions"></div>

                    </form>


                </section>


            </div>

            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                <div className="mobile-menu-title">Menu</div>
                <div className="mobile-menu-icon">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
            </button>
        </div>

        <div id="navbar-collapse" className="navbar-collapse collapse">
            <div className="region region-navigation-collapsible">
                <section id="block-block-group-top-block"
                    className="block block-blockgroup block-block-grouptop-block clearfix">



                    <section className="es-search-form block block-le-es block-es-form clearfix"
                        data-drupal-selector="es-search-form" id="block-elastic-search-form-block">



                        <form action="/search/site" method="post" id="es-search-form" accept-charset="UTF-8">
                            <div
                                className="form-item js-form-item form-type-search js-form-type-search form-item-keyword js-form-item-keyword form-no-label form-group">
                                <label for="edit-keyword" className="control-label sr-only">Search</label>


                                <input title="Enter the terms you wish to search for."
                                    data-drupal-selector="edit-keyword" className="form-search form-control"
                                    placeholder="Search" type="search" id="edit-keyword" name="keyword" value=""
                                    size="15" maxLength="128" data-toggle="tooltip" />



                            </div>
                            <input autocomplete="off"
                                data-drupal-selector="form-tkiidk02-z713lyooiiu5zxk-s6i1zakmzbecyjmkkm"
                                type="hidden" name="form_build_id"
                                value="form-TKIIdK02-z713lyoOIIu5ZxK_s6i1ZAkMzbeCyJmKkM" /><input
                                data-drupal-selector="edit-es-search-form" type="hidden" name="form_id"
                                value="es_search_form" />
                            <div data-drupal-selector="edit-actions"
                                className="form-actions form-group js-form-wrapper form-wrapper" id="edit-actions">
                                <button data-drupal-selector="edit-submit"
                                    className="button js-form-submit form-submit btn-primary btn icon-before"
                                    type="submit" id="edit-submit" value="Search" name=""><span
                                        className="icon glyphicon glyphicon-search" aria-hidden="true"></span>
                                    Search</button></div>

                        </form>

                    </section>

                    <nav role="navigation" aria-labelledby="block-bc-ui-account-menu-menu"
                        id="block-bc-ui-account-menu">
                        <h2 className="sr-only" id="block-bc-ui-account-menu-menu">User account menu</h2>


                        <ul className="menu menu--account nav navbar-nav navbar-right">
                            <li className="first">
                                <a href="/user/login" data-drupal-link-system-path="user/login">Log in</a>
                            </li>
                            <li className="last">
                                <a href="/user/register" data-drupal-link-system-path="user/register">Register</a>
                            </li>
                        </ul>


                    </nav>

                </section>

                <nav role="navigation" aria-labelledby="block-system-menu-block-main-menu"
                    id="block-system-menu-block-main">
                    <h2 className="sr-only" id="block-system-menu-block-main-menu">Main navigation</h2>


                    <ul className="menu menu--main nav navbar-nav">
                        <li className="first">
                            <a href="/" data-drupal-link-system-path="&lt;front&gt;" className="is-active">Home</a>
                        </li>
                        <li className="expanded dropdown">
                            <a href="/online-courses" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2910">Online Courses <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/online-courses/english-online"
                                        data-drupal-link-system-path="taxonomy/term/2884">Live online classNamees</a>
                                </li>
                                <li>
                                    <a href="/online-courses/self-access"
                                        data-drupal-link-system-path="taxonomy/term/2842">Self-study online
                                        courses</a>
                                </li>
                                <li>
                                    <a href="/online-courses/personal-online-tutoring"
                                        data-drupal-link-system-path="taxonomy/term/2870">Personal online
                                        tutoring</a>
                                </li>
                                <li className="last">
                                    <a href="/online-courses/ielts-online-courses"
                                        data-drupal-link-system-path="taxonomy/term/2864">IELTS online courses</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/skills" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2740">Skills <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/skills/listening">Listening</a>
                                </li>
                                <li>
                                    <a href="/skills/reading">Reading</a>
                                </li>
                                <li>
                                    <a href="/skills/writing"
                                        data-drupal-link-system-path="taxonomy/term/2386">Writing</a>
                                </li>
                                <li className="last">
                                    <a href="/skills/speaking"
                                        data-drupal-link-system-path="taxonomy/term/2802">Speaking</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/grammar" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2383">Grammar <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/grammar/a1-a2-grammar"
                                        data-drupal-link-system-path="taxonomy/term/2769">A1-A2 grammar</a>
                                </li>
                                <li>
                                    <a href="/grammar/b1-b2-grammar"
                                        data-drupal-link-system-path="taxonomy/term/2770">B1-B2 grammar</a>
                                </li>
                                <li className="last">
                                    <a href="/grammar/english-grammar-reference"
                                        data-drupal-link-system-path="taxonomy/term/2403">English grammar
                                        reference</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/vocabulary" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2766">Vocabulary <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/vocabulary/a1-a2-vocabulary"
                                        data-drupal-link-system-path="taxonomy/term/2767">A1-A2 vocabulary</a>
                                </li>
                                <li>
                                    <a href="/vocabulary/b1-b2-vocabulary"
                                        data-drupal-link-system-path="taxonomy/term/2768">B1-B2 vocabulary</a>
                                </li>
                                <li className="last">
                                    <a href="/vocabulary/vocabulary-games"
                                        data-drupal-link-system-path="taxonomy/term/2395">Vocabulary games</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/business-english" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2385">Business English <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/corporate-solutions"
                                        data-drupal-link-system-path="taxonomy/term/2928">Corporate training and
                                        assessments</a>
                                </li>
                                <li>
                                    <a href="/business-english/business-magazine"
                                        data-drupal-link-system-path="taxonomy/term/2391">Business magazine</a>
                                </li>
                                <li>
                                    <a href="/business-english/podcasts-for-professionals"
                                        data-drupal-link-system-path="taxonomy/term/2390">Podcasts for
                                        professionals</a>
                                </li>
                                <li>
                                    <a href="/business-english/english-for-emails"
                                        data-drupal-link-system-path="taxonomy/term/2554">English for emails</a>
                                </li>
                                <li className="last">
                                    <a href="/business-english/youre-hired"
                                        data-drupal-link-system-path="taxonomy/term/2389">You&#039;re Hired</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/general-english" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2384">General English <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/general-english/video-zone"
                                        data-drupal-link-system-path="taxonomy/term/2742">Video zone</a>
                                </li>
                                <li>
                                    <a href="/general-english/audio-zone"
                                        data-drupal-link-system-path="taxonomy/term/2400">Audio zone</a>
                                </li>
                                <li>
                                    <a href="/general-english/magazine-zone"
                                        data-drupal-link-system-path="taxonomy/term/2398">Magazine zone</a>
                                </li>
                                <li>
                                    <a href="/general-english/story-zone"
                                        data-drupal-link-system-path="taxonomy/term/2399">Story zone</a>
                                </li>
                                <li>
                                    <a href="/general-english/audio-series"
                                        data-drupal-link-system-path="taxonomy/term/2913">Audio series</a>
                                </li>
                                <li>
                                    <a href="/general-english/video-series"
                                        data-drupal-link-system-path="taxonomy/term/2914">Video series</a>
                                </li>
                                <li className="last">
                                    <a href="/apps" data-drupal-link-system-path="taxonomy/term/2388">Apps</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown">
                            <a href="/english-levels" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2931">English levels <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/english-levels/online-english-level-test"
                                        data-drupal-link-system-path="taxonomy/term/2932">Online English level
                                        test</a>
                                </li>
                                <li>
                                    <a href="/english-levels/how-to-improve-your-english-level"
                                        data-drupal-link-system-path="taxonomy/term/2939">How to improve your
                                        English level</a>
                                </li>
                                <li>
                                    <a href="/english-levels/a1-elementary"
                                        data-drupal-link-system-path="taxonomy/term/2934">A1 English level
                                        (elementary)</a>
                                </li>
                                <li>
                                    <a href="/english-levels/a2-pre-intermediate"
                                        data-drupal-link-system-path="taxonomy/term/2935">A2 English level
                                        (pre-intermediate)</a>
                                </li>
                                <li>
                                    <a href="/english-levels/b1-intermediate"
                                        data-drupal-link-system-path="taxonomy/term/2936">B1 English level
                                        (intermediate)</a>
                                </li>
                                <li>
                                    <a href="/english-levels/b2-upper-intermediate"
                                        data-drupal-link-system-path="taxonomy/term/2937">B2 English level (upper
                                        intermediate)</a>
                                </li>
                                <li>
                                    <a href="/english-levels/c1-advanced"
                                        data-drupal-link-system-path="taxonomy/term/2938">C1 English level
                                        (advanced)</a>
                                </li>
                                <li className="last">
                                    <a href="/english-levels/c2-proficiency"
                                        data-drupal-link-system-path="taxonomy/term/2933">C2 English level
                                        (proficiency)</a>
                                </li>
                            </ul>

                        </li>
                        <li className="expanded dropdown last">
                            <a href="/community" className="dropdown-toggle" data-toggle="dropdown"
                                data-drupal-link-system-path="taxonomy/term/2929">Community <span
                                    className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li className="first">
                                    <a href="/community/community-events"
                                        data-drupal-link-system-path="taxonomy/term/2891">Community events</a>
                                </li>
                                <li className="last">
                                    <a href="/community/learnenglish-webinars"
                                        data-drupal-link-system-path="taxonomy/term/2930">LearnEnglish webinars</a>
                                </li>
                            </ul>

                        </li>
                    </ul>


                </nav>
                <nav role="navigation" aria-labelledby="block-mobile-user-menu-menu" id="block-mobile-user-menu">
                    <h2 className="sr-only" id="block-mobile-user-menu-menu">Mobile - User account menu</h2>


                    <ul className="menu menu--account nav navbar-nav navbar-right">
                        <li className="first">
                            <a href="/user/login" data-drupal-link-system-path="user/login">Log in</a>
                        </li>
                        <li className="last">
                            <a href="/user/register" data-drupal-link-system-path="user/register">Register</a>
                        </li>
                    </ul>


                </nav>

            </div>

        </div>
        </header>
    );
}

export default Header;