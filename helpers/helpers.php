<?php

function home_url(): string
{
    return (empty($_SERVER['HTTPS']) ? 'http' : 'https') . '://' . $_SERVER['HTTP_HOST'] . '/';
}

function assets(string $path): string
{
    return home_url() . $path;
}