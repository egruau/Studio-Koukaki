<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header class="header">
        <div class="header__banner">
            <div class="header__banner__title">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
            </div>
            <div class="header__banner__burger">
                <div class="header__banner__burger__open" onclick="openMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="19" viewBox="0 0 40 19" fill="none">
                    <line x1="0.5" y1="0.5" x2="39.5" y2="0.5" stroke="black" stroke-linecap="round"/>
                    <line x1="0.5" y1="9.5" x2="39.5" y2="9.5" stroke="black" stroke-linecap="round"/>
                    <line x1="0.5" y1="18.5" x2="39.5" y2="18.5" stroke="black" stroke-linecap="round"/>
                </svg>
                </div>
                <div class="header__banner__burger__closed" onclick="closeMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <line x1="1" y1="28.2929" x2="28.5772" y2="0.715729" stroke="black" stroke-linecap="round"/>
                    <line x1="1.70711" y1="1" x2="29.2843" y2="28.5772" stroke="black" stroke-linecap="round"/>
                </svg>
                </div>
            </div>
        </div>
        <nav class="header__nav">      
            <ul class="header__nav__menu">
                <li class="header__nav__menu__link"><img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/header_logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants"></li>
                <li class="header__nav__menu__link header__nav__menu__link-story"><a href="#story"><span>Histoire</span></a></li>
                <li class="header__nav__menu__link header__nav__menu__link-characters"><a href="#characters"><span>Personnages</span></a></li>
                <li class="header__nav__menu__link header__nav__menu__link-place"><a href="#place"><span>Lieu</span></a></li>
                <li class="header__nav__menu__link header__nav__menu__link-studio"><a href="#studio"><span>Studio</span> <span class="span__second">Koukaki</span></a></li>
            </ul>
        </nav>
	</header><!-- #masthead -->
