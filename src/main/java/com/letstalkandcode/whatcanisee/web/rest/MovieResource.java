package com.letstalkandcode.whatcanisee.web.rest;

/**
 * Created by bernardinorosa on 05/07/19.
 */

import com.letstalkandcode.whatcanisee.config.ApplicationProperties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import javax.inject.Inject;

@RestController
@RequestMapping("/api/movies")

public class MovieResource {

    RestTemplate restTemplate = new RestTemplate();

    private String uri="";

    private final ApplicationProperties.MovieAPI movieAPI;
    public MovieResource(ApplicationProperties applicationProperties){
        movieAPI = applicationProperties.getMovieAPI();
        uri = "https://"+movieAPI.getBasepath()+"/movie";
        System.out.println("HERE----:"+uri);
    }



    private static class MovieResourceException extends RuntimeException {
    }

    /**
     * {@code GET  /nowPlaying/{page}} : get the current user.
     *
     * @return movies.
     * @throws MovieResourceException {@code 500 (Internal Server Error)} if the data couldn't be returned.
     */
    @GetMapping("/now-playing/{page}")
    public String getMoviesNowPlaying(@PathVariable("page") String page) {

       String result = restTemplate.getForObject(uri+"/now_playing?api_key="+movieAPI.getKey()+"&page="+page, String.class);

      return result;
    }

}
