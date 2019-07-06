package com.letstalkandcode.whatcanisee.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to What Can I See.
 * <p>
 * Properties are configured in the {@code application.yml} file.
 * See {@link io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    private final MovieAPI movieAPI = new MovieAPI();

    public MovieAPI getMovieAPI() {
        return movieAPI;
    }

    public static class MovieAPI {

        private String key;
        private String basepath;

        public String getKey() {
            return key;
        }

        public void setKey(String key) {
            this.key = key;
        }

        public String getBasepath() {
            return basepath;
        }

        public void setBasepath(String basepath) {
            this.basepath = basepath;
        }
    }

}
