const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'NCC Parish - Home',
    description: 'Welcome to NCC Parish, a welcoming Catholic community.'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - NCC Parish',
    description: 'Learn about NCC Parish, our history, clergy, and mission.'
  });
});

router.get('/groups', (req, res) => {
  res.render('groups', {
    title: 'Parish Groups - NCC Parish',
    description: 'Join one of our many parish groups and ministries.'
  });
});

router.get('/mass-intentions', (req, res) => {
  res.render('mass-intentions', {
    title: 'Mass Intentions - NCC Parish',
    description: 'Request a Mass intention for a loved one, living or deceased.'
  });
});

router.get('/ministries', (req, res) => {
  res.render('ministries', {
    title: 'Ministries - NCC Parish',
    description: 'Explore and volunteer for our active parish ministries.'
  });
});

router.get('/news-events', (req, res) => {
  res.render('news-events', {
    title: 'News & Events - NCC Parish',
    description: 'Stay up to date with news and upcoming events at NCC Parish.'
  });
});

router.get('/news', (req, res) => {
  res.render('news', {
    title: 'Parish News - NCC Parish',
    description: 'Latest news, bulletins, and announcements from NCC Parish.'
  });
});

router.get('/events', (req, res) => {
  res.render('events', {
    title: 'Events - NCC Parish',
    description: 'Upcoming events and activities at NCC Parish.'
  });
});

router.get('/membership', (req, res) => {
  res.render('membership', {
    title: 'Join Our Parish - NCC Parish',
    description: 'Register as a member of NCC Parish and become part of our community.'
  });
});

router.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: 'Photo Gallery - NCC Parish',
    description: 'Browse photos from parish events, liturgy, and community life.'
  });
});

router.get('/more', (req, res) => {
  res.render('more', {
    title: 'Contact & More - NCC Parish',
    description: 'Contact NCC Parish, find us on the map, and explore Catholic resources.'
  });
});

router.get('/admin', (req, res) => {
  res.render('admin', {
    title: 'Admin Dashboard - NCC Parish',
    description: 'NCC Parish administration dashboard.'
  });
});

module.exports = router;
