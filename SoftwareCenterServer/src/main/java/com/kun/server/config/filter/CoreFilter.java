package com.kun.server.config.filter;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CoreFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse responce, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse)responce;
        setResponceHeaders(res);
        chain.doFilter(request, responce);
    }

    public void setResponceHeaders(HttpServletResponse response){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, HEAD");
        response.setHeader("Access-Control-Allow-Headers", "access-control-allow-origin, content-type");
        response.setHeader("Access-Control-Max-Age", "3600");
    }
}
