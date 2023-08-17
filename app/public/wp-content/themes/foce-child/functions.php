<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('animation-style', get_stylesheet_directory_uri(). '/stylesheets/style.css');
    wp_enqueue_style('swiper-style', get_stylesheet_directory_uri().'/swiper-10.1.0/package/swiper-bundle.min.css');
    wp_enqueue_script('swiper-lib', get_stylesheet_directory_uri().'/swiper-10.1.0/package/swiper-bundle.min.js');
    wp_enqueue_script('script', get_stylesheet_directory_uri().'/js/script.js', array(), 1.1, true);
    wp_enqueue_script('swiper', get_stylesheet_directory_uri().'/js/swiper.js', array(), 1.1, true);

}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}