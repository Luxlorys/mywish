--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.2 (Ubuntu 16.2-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: gromozeqa
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    title character varying(50) NOT NULL
);


ALTER TABLE public.categories OWNER TO gromozeqa;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: gromozeqa
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO gromozeqa;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gromozeqa
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: friendship; Type: TABLE; Schema: public; Owner: gromozeqa
--

CREATE TABLE public.friendship (
    id integer NOT NULL,
    user1_id integer,
    user2_id integer,
    status character varying(20),
    CONSTRAINT friendship_status_check CHECK (((status)::text = ANY ((ARRAY['pending'::character varying, 'declined'::character varying, 'friends'::character varying])::text[])))
);


ALTER TABLE public.friendship OWNER TO gromozeqa;

--
-- Name: friendship_id_seq; Type: SEQUENCE; Schema: public; Owner: gromozeqa
--

CREATE SEQUENCE public.friendship_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.friendship_id_seq OWNER TO gromozeqa;

--
-- Name: friendship_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gromozeqa
--

ALTER SEQUENCE public.friendship_id_seq OWNED BY public.friendship.id;


--
-- Name: gifts; Type: TABLE; Schema: public; Owner: gromozeqa
--

CREATE TABLE public.gifts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    category_id integer,
    title character varying(255) NOT NULL,
    status character varying(30),
    CONSTRAINT gifts_status_check CHECK (((status)::text = ANY ((ARRAY['available'::character varying, 'reserved'::character varying])::text[])))
);


ALTER TABLE public.gifts OWNER TO gromozeqa;

--
-- Name: gifts_id_seq; Type: SEQUENCE; Schema: public; Owner: gromozeqa
--

CREATE SEQUENCE public.gifts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gifts_id_seq OWNER TO gromozeqa;

--
-- Name: gifts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gromozeqa
--

ALTER SEQUENCE public.gifts_id_seq OWNED BY public.gifts.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: gromozeqa
--

CREATE TABLE public.images (
    id integer NOT NULL,
    filename character varying(255) NOT NULL,
    filepath character varying(255) NOT NULL,
    mimetype character varying(100) NOT NULL
);


ALTER TABLE public.images OWNER TO gromozeqa;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: gromozeqa
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO gromozeqa;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gromozeqa
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: gromozeqa
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    image_id integer,
    email character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO gromozeqa;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gromozeqa
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO gromozeqa;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gromozeqa
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: friendship id; Type: DEFAULT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.friendship ALTER COLUMN id SET DEFAULT nextval('public.friendship_id_seq'::regclass);


--
-- Name: gifts id; Type: DEFAULT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.gifts ALTER COLUMN id SET DEFAULT nextval('public.gifts_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: categories categories_title_key; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_title_key UNIQUE (title);


--
-- Name: friendship friendship_pkey; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.friendship
    ADD CONSTRAINT friendship_pkey PRIMARY KEY (id);


--
-- Name: gifts gifts_pkey; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.gifts
    ADD CONSTRAINT gifts_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: friendship unique_users; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.friendship
    ADD CONSTRAINT unique_users UNIQUE (user1_id, user2_id);


--
-- Name: users unqiue_constraint_email; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unqiue_constraint_email UNIQUE (email);


--
-- Name: users users_login_key; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_key UNIQUE (username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: gifts fk_category; Type: FK CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.gifts
    ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: gifts fk_user; Type: FK CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.gifts
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: friendship fk_user1; Type: FK CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.friendship
    ADD CONSTRAINT fk_user1 FOREIGN KEY (user1_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: friendship fk_user2; Type: FK CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.friendship
    ADD CONSTRAINT fk_user2 FOREIGN KEY (user2_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: users fk_user_image_id; Type: FK CONSTRAINT; Schema: public; Owner: gromozeqa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_user_image_id FOREIGN KEY (image_id) REFERENCES public.images(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

