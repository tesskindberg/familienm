<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dro_one_page_converter
 */
?>


</div><!-- #content / site-content row -->

<footer id="colophon" class="site-footer row">
    <div class="col-12">
        <div class="site-info">
              <?php
              /* translators: %s: CMS name, i.e. WordPress. */
              printf(esc_html__('Skoleprojekt af %s', 'dro-one-page-converter'), 'Mia Tess Kindberg og Monique Andersen');
              ?>
            </a>
            <span class="sep"> | </span>

        </div><!-- .site-info -->
    </div> <!-- .col-12 -->
</footer><!-- #colophon / .row -->

</div><!-- .container-fluid or container (full width option )-->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
