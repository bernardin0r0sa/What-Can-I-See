package com.letstalkandcode.whatcanisee.web.rest;

import com.letstalkandcode.whatcanisee.config.ApplicationProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * TvResource controller
 */
@RestController
@RequestMapping("/api/tv")
public class TvResource {

    private final Logger log = LoggerFactory.getLogger(TvResource.class);

    RestTemplate restTemplate = new RestTemplate();

    private String uri="";

    private final ApplicationProperties.MovieAPI movieAPI;
    public TvResource(ApplicationProperties applicationProperties){
        movieAPI = applicationProperties.getMovieAPI();
        uri = "https://"+movieAPI.getBasepath()+"/tv";
    }

    /**
    * GET onTV
    */
    @GetMapping("/on-tv/{page}")
    public String onTV(@PathVariable("page") String page) {

        String result = restTemplate.getForObject(uri+"/on_the_air?api_key="+movieAPI.getKey()+"&page="+page, String.class);

        return result;
    }

}
