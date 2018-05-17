--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: content_block; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public.content_block (
    id integer NOT NULL,
    page_id integer,
    location_id integer,
    content text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    "order" integer
);


ALTER TABLE public.content_block OWNER TO fg_db_user;

--
-- Name: core_store; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.core_store (
    id integer NOT NULL,
    key text,
    value text,
    environment text,
    type text,
    tag text,
    parent integer
);


ALTER TABLE public.core_store OWNER TO postgres;

--
-- Name: core_store_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.core_store_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.core_store_id_seq OWNER TO postgres;

--
-- Name: core_store_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.core_store_id_seq OWNED BY public.core_store.id;


--
-- Name: location; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public.location (
    id integer NOT NULL,
    name text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    "order" integer,
    url text
);


ALTER TABLE public.location OWNER TO fg_db_user;

--
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public.location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_id_seq OWNER TO fg_db_user;

--
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public.location_id_seq OWNED BY public.location.id;


--
-- Name: page; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public.page (
    id integer NOT NULL,
    name text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    url text
);


ALTER TABLE public.page OWNER TO fg_db_user;

--
-- Name: page_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public.page_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.page_id_seq OWNER TO fg_db_user;

--
-- Name: text_block_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public.text_block_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.text_block_id_seq OWNER TO fg_db_user;

--
-- Name: text_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public.text_block_id_seq OWNED BY public.content_block.id;


--
-- Name: upload_file; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public.upload_file (
    id integer NOT NULL,
    name text,
    hash text,
    ext text,
    mime text,
    size text,
    url text,
    provider text,
    updated_at timestamp with time zone,
    created_at timestamp with time zone
);


ALTER TABLE public.upload_file OWNER TO fg_db_user;

--
-- Name: upload_file_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public.upload_file_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_file_id_seq OWNER TO fg_db_user;

--
-- Name: upload_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public.upload_file_id_seq OWNED BY public.upload_file.id;


--
-- Name: upload_file_morph; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public.upload_file_morph (
    id integer NOT NULL,
    upload_file_id integer,
    related_id integer,
    related_type text,
    field text
);


ALTER TABLE public.upload_file_morph OWNER TO fg_db_user;

--
-- Name: upload_file_morph_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public.upload_file_morph_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.upload_file_morph_id_seq OWNER TO fg_db_user;

--
-- Name: upload_file_morph_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public.upload_file_morph_id_seq OWNED BY public.upload_file_morph.id;


--
-- Name: users-permissions_permission; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public."users-permissions_permission" (
    id integer NOT NULL,
    role integer,
    type text,
    controller text,
    action text,
    enabled boolean,
    policy text
);


ALTER TABLE public."users-permissions_permission" OWNER TO fg_db_user;

--
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public."users-permissions_permission_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_permission_id_seq" OWNER TO fg_db_user;

--
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public."users-permissions_permission_id_seq" OWNED BY public."users-permissions_permission".id;


--
-- Name: users-permissions_role; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public."users-permissions_role" (
    id integer NOT NULL,
    name text,
    description text,
    type text
);


ALTER TABLE public."users-permissions_role" OWNER TO fg_db_user;

--
-- Name: users-permissions_role_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public."users-permissions_role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_role_id_seq" OWNER TO fg_db_user;

--
-- Name: users-permissions_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public."users-permissions_role_id_seq" OWNED BY public."users-permissions_role".id;


--
-- Name: users-permissions_user; Type: TABLE; Schema: public; Owner: fg_db_user
--

CREATE TABLE public."users-permissions_user" (
    id integer NOT NULL,
    username text,
    email text,
    provider text,
    role integer,
    "resetPasswordToken" text,
    password text,
    updated_at timestamp with time zone,
    created_at timestamp with time zone
);


ALTER TABLE public."users-permissions_user" OWNER TO fg_db_user;

--
-- Name: users-permissions_user_id_seq; Type: SEQUENCE; Schema: public; Owner: fg_db_user
--

CREATE SEQUENCE public."users-permissions_user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users-permissions_user_id_seq" OWNER TO fg_db_user;

--
-- Name: users-permissions_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fg_db_user
--

ALTER SEQUENCE public."users-permissions_user_id_seq" OWNED BY public."users-permissions_user".id;


--
-- Name: content_block id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.content_block ALTER COLUMN id SET DEFAULT nextval('public.text_block_id_seq'::regclass);


--
-- Name: core_store id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_store ALTER COLUMN id SET DEFAULT nextval('public.core_store_id_seq'::regclass);


--
-- Name: location id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.location ALTER COLUMN id SET DEFAULT nextval('public.location_id_seq'::regclass);


--
-- Name: upload_file id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.upload_file ALTER COLUMN id SET DEFAULT nextval('public.upload_file_id_seq'::regclass);


--
-- Name: upload_file_morph id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.upload_file_morph ALTER COLUMN id SET DEFAULT nextval('public.upload_file_morph_id_seq'::regclass);


--
-- Name: users-permissions_permission id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_permission" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_permission_id_seq"'::regclass);


--
-- Name: users-permissions_role id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_role" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_role_id_seq"'::regclass);


--
-- Name: users-permissions_user id; Type: DEFAULT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_user" ALTER COLUMN id SET DEFAULT nextval('public."users-permissions_user_id_seq"'::regclass);


--
-- Data for Name: content_block; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public.content_block (id, page_id, location_id, content, created_at, updated_at, "order") FROM stdin;
\.


--
-- Data for Name: core_store; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.core_store (id, key, value, environment, type, tag, parent) FROM stdin;
1	core_application	{"name":"Default Application","description":"This API is going to be awesome!"}		object		\N
3	plugin_upload_provider	{"provider":"local","name":"Local server","enabled":true,"sizeLimit":1000000}	development	object		\N
2	plugin_users-permissions_grant	{"email":{"enabled":true,"icon":"envelope"},"facebook":{"enabled":false,"icon":"facebook-official","key":"","secret":"","callback":"/auth/facebook/callback","scope":["email"]},"google":{"enabled":false,"icon":"google","key":"","secret":"","callback":"/auth/google/callback","scope":["email"]},"github":{"enabled":false,"icon":"github","key":"","secret":"","redirect_uri":"/auth/github/callback","scope":["user","user:email"]},"twitter":{"enabled":false,"icon":"twitter","key":"","secret":"","callback":"/auth/twitter/callback"}}		object		\N
4	plugin_users-permissions_email	{"reset_password":{"display":"Email.template.reset_password","icon":"refresh","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"­Reset password","message":"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>"}}}		object		\N
5	plugin_users-permissions_advanced	{"unique_email":true,"allow_register":true,"default_role":"authenticated"}		object		\N
\.


--
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public.location (id, name, created_at, updated_at, "order", url) FROM stdin;
3	Colechester	2018-05-02 21:19:51.82+03	2018-05-02 21:19:51.834+03	1	\N
4	Guildford	2018-05-02 21:20:08.264+03	2018-05-02 21:20:08.278+03	3	\N
5	Nottingham	2018-05-02 21:21:51.911+03	2018-05-02 21:21:51.924+03	4	\N
6	Loughborough	2018-05-02 21:22:57.946+03	2018-05-02 21:22:57.959+03	5	\N
2	Sheffield	2018-05-02 21:16:41.267+03	2018-05-02 21:16:41.286+03	2	\N
\.


--
-- Data for Name: page; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public.page (id, name, created_at, updated_at, url) FROM stdin;
\.


--
-- Data for Name: upload_file; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public.upload_file (id, name, hash, ext, mime, size, url, provider, updated_at, created_at) FROM stdin;
\.


--
-- Data for Name: upload_file_morph; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public.upload_file_morph (id, upload_file_id, related_id, related_type, field) FROM stdin;
\.


--
-- Data for Name: users-permissions_permission; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public."users-permissions_permission" (id, role, type, controller, action, enabled, policy) FROM stdin;
1	1	analytics	analytics	index	t	
4	1	content-manager	contentmanager	find	t	
2	1	content-manager	contentmanager	layout	t	
3	1	content-manager	contentmanager	models	t	
5	1	content-manager	contentmanager	count	t	
6	1	content-manager	contentmanager	findone	t	
7	1	content-manager	contentmanager	create	t	
8	1	content-manager	contentmanager	update	t	
9	1	content-manager	contentmanager	delete	t	
10	1	content-type-builder	contenttypebuilder	getmodels	t	
11	1	content-type-builder	contenttypebuilder	getmodel	t	
12	1	content-type-builder	contenttypebuilder	getconnections	t	
13	1	content-type-builder	contenttypebuilder	createmodel	t	
14	1	content-type-builder	contenttypebuilder	updatemodel	t	
15	1	content-type-builder	contenttypebuilder	deletemodel	t	
16	1	content-type-builder	contenttypebuilder	autoreload	t	
17	1	content-type-builder	contenttypebuilder	checktableexists	t	
18	1	settings-manager	settingsmanager	menu	t	
19	1	settings-manager	settingsmanager	environments	t	
20	1	settings-manager	settingsmanager	languages	t	
21	1	settings-manager	settingsmanager	databases	t	
22	1	settings-manager	settingsmanager	database	t	
23	1	settings-manager	settingsmanager	databasemodel	t	
24	1	settings-manager	settingsmanager	get	t	
25	1	settings-manager	settingsmanager	update	t	
26	1	settings-manager	settingsmanager	createlanguage	t	
27	1	settings-manager	settingsmanager	deletelanguage	t	
28	1	settings-manager	settingsmanager	createdatabase	t	
29	1	settings-manager	settingsmanager	updatedatabase	t	
30	1	settings-manager	settingsmanager	deletedatabase	t	
31	1	settings-manager	settingsmanager	autoreload	t	
32	1	upload	upload	upload	t	
33	1	upload	upload	getenvironments	t	
34	1	upload	upload	getsettings	t	
35	1	upload	upload	updatesettings	t	
36	1	upload	upload	find	t	
37	1	upload	upload	findone	t	
38	1	upload	upload	count	t	
39	1	upload	upload	destroy	t	
40	1	upload	upload	search	t	
41	1	users-permissions	auth	callback	t	
42	1	users-permissions	auth	changepassword	t	
43	1	users-permissions	auth	connect	t	
44	1	users-permissions	auth	forgotpassword	t	
45	1	users-permissions	auth	register	t	
46	1	users-permissions	user	find	t	
47	1	users-permissions	user	me	t	
48	1	users-permissions	user	findone	t	
49	1	users-permissions	user	create	t	
50	1	users-permissions	user	update	t	
51	1	users-permissions	user	destroy	t	
52	1	users-permissions	userspermissions	createrole	t	
53	1	users-permissions	userspermissions	deleteprovider	t	
54	1	users-permissions	userspermissions	deleterole	t	
55	1	users-permissions	userspermissions	getpermissions	t	
56	1	users-permissions	userspermissions	getpolicies	t	
57	1	users-permissions	userspermissions	getrole	t	
58	1	users-permissions	userspermissions	getroles	t	
59	1	users-permissions	userspermissions	getroutes	t	
60	1	users-permissions	userspermissions	index	t	
61	1	users-permissions	userspermissions	init	t	
62	1	users-permissions	userspermissions	searchusers	t	
63	1	users-permissions	userspermissions	updaterole	t	
64	1	users-permissions	userspermissions	getemailtemplate	t	
65	1	users-permissions	userspermissions	updateemailtemplate	t	
66	1	users-permissions	userspermissions	getadvancedsettings	t	
67	1	users-permissions	userspermissions	updateadvancedsettings	t	
68	1	users-permissions	userspermissions	getproviders	t	
69	1	users-permissions	userspermissions	updateproviders	t	
255	2	application	page	find	f	
260	2	application	page	createrelation	f	
81	3	content-type-builder	contenttypebuilder	getconnections	f	
83	3	content-type-builder	contenttypebuilder	updatemodel	f	
95	3	settings-manager	settingsmanager	createlanguage	f	
93	3	settings-manager	settingsmanager	get	f	
101	3	upload	upload	upload	f	
97	3	settings-manager	settingsmanager	createdatabase	f	
87	3	settings-manager	settingsmanager	menu	f	
82	3	content-type-builder	contenttypebuilder	createmodel	f	
84	3	content-type-builder	contenttypebuilder	deletemodel	f	
85	3	content-type-builder	contenttypebuilder	autoreload	t	
86	3	content-type-builder	contenttypebuilder	checktableexists	f	
79	3	content-type-builder	contenttypebuilder	getmodels	f	
88	3	settings-manager	settingsmanager	environments	f	
96	3	settings-manager	settingsmanager	deletelanguage	f	
94	3	settings-manager	settingsmanager	update	f	
92	3	settings-manager	settingsmanager	databasemodel	f	
90	3	settings-manager	settingsmanager	databases	f	
89	3	settings-manager	settingsmanager	languages	f	
91	3	settings-manager	settingsmanager	database	f	
140	2	content-manager	contentmanager	layout	f	
150	2	content-type-builder	contenttypebuilder	getconnections	f	
160	2	settings-manager	settingsmanager	database	f	
170	2	upload	upload	upload	f	
180	2	users-permissions	auth	changepassword	f	
190	2	users-permissions	userspermissions	createrole	f	
200	2	users-permissions	userspermissions	searchusers	f	
256	2	application	page	findone	f	
259	2	application	page	destroy	f	
269	3	application	page	updaterelation	f	
109	3	upload	upload	search	f	
110	3	users-permissions	auth	callback	t	
120	3	users-permissions	user	destroy	f	
130	3	users-permissions	userspermissions	init	t	
142	2	content-manager	contentmanager	find	f	
152	2	content-type-builder	contenttypebuilder	updatemodel	f	
162	2	settings-manager	settingsmanager	get	f	
172	2	upload	upload	getsettings	f	
182	2	users-permissions	auth	forgotpassword	f	
192	2	users-permissions	userspermissions	deleterole	f	
202	2	users-permissions	userspermissions	getemailtemplate	f	
254	1	application	page	destroyrelation	t	
262	2	application	page	destroyrelation	f	
100	3	settings-manager	settingsmanager	autoreload	t	
112	3	users-permissions	auth	connect	t	
122	3	users-permissions	userspermissions	deleteprovider	f	
132	3	users-permissions	userspermissions	updaterole	f	
143	2	content-manager	contentmanager	count	f	
153	2	content-type-builder	contenttypebuilder	deletemodel	f	
163	2	settings-manager	settingsmanager	update	f	
173	2	upload	upload	updatesettings	f	
183	2	users-permissions	auth	register	f	
193	2	users-permissions	userspermissions	getpermissions	f	
203	2	users-permissions	userspermissions	updateemailtemplate	f	
247	1	application	page	find	t	
267	3	application	page	destroy	f	
270	3	application	page	destroyrelation	f	
106	3	upload	upload	findone	f	
113	3	users-permissions	auth	forgotpassword	t	
133	3	users-permissions	userspermissions	getemailtemplate	f	
123	3	users-permissions	userspermissions	deleterole	f	
144	2	content-manager	contentmanager	findone	f	
154	2	content-type-builder	contenttypebuilder	autoreload	t	
164	2	settings-manager	settingsmanager	createlanguage	f	
174	2	upload	upload	find	f	
184	2	users-permissions	user	find	f	
194	2	users-permissions	userspermissions	getpolicies	f	
204	2	users-permissions	userspermissions	getadvancedsettings	f	
253	1	application	page	updaterelation	t	
265	3	application	page	create	f	
105	3	upload	upload	find	f	
114	3	users-permissions	auth	register	t	
134	3	users-permissions	userspermissions	updateemailtemplate	f	
124	3	users-permissions	userspermissions	getpermissions	f	
145	2	content-manager	contentmanager	create	f	
155	2	content-type-builder	contenttypebuilder	checktableexists	f	
166	2	settings-manager	settingsmanager	createdatabase	f	
176	2	upload	upload	count	f	
186	2	users-permissions	user	findone	f	
196	2	users-permissions	userspermissions	getroles	f	
206	2	users-permissions	userspermissions	getproviders	f	
252	1	application	page	destroy	t	
258	2	application	page	update	f	
268	3	application	page	createrelation	f	
104	3	upload	upload	updatesettings	f	
115	3	users-permissions	user	find	f	
125	3	users-permissions	userspermissions	getpolicies	f	
135	3	users-permissions	userspermissions	getadvancedsettings	f	
146	2	content-manager	contentmanager	update	f	
156	2	settings-manager	settingsmanager	menu	f	
167	2	settings-manager	settingsmanager	updatedatabase	f	
177	2	upload	upload	destroy	f	
187	2	users-permissions	user	create	f	
197	2	users-permissions	userspermissions	getroutes	f	
207	2	users-permissions	userspermissions	updateproviders	f	
251	1	application	page	createrelation	t	
261	2	application	page	updaterelation	f	
103	3	upload	upload	getsettings	f	
116	3	users-permissions	user	me	t	
126	3	users-permissions	userspermissions	getrole	f	
136	3	users-permissions	userspermissions	updateadvancedsettings	f	
147	2	content-manager	contentmanager	delete	f	
157	2	settings-manager	settingsmanager	environments	f	
168	2	settings-manager	settingsmanager	deletedatabase	f	
178	2	upload	upload	search	f	
188	2	users-permissions	user	update	f	
198	2	users-permissions	userspermissions	index	f	
250	1	application	page	update	t	
257	2	application	page	create	f	
263	3	application	page	find	f	
108	3	upload	upload	destroy	f	
117	3	users-permissions	user	findone	f	
127	3	users-permissions	userspermissions	getroles	f	
137	3	users-permissions	userspermissions	getproviders	f	
148	2	content-type-builder	contenttypebuilder	getmodels	f	
158	2	settings-manager	settingsmanager	languages	f	
165	2	settings-manager	settingsmanager	deletelanguage	f	
175	2	upload	upload	findone	f	
185	2	users-permissions	user	me	t	
195	2	users-permissions	userspermissions	getrole	f	
205	2	users-permissions	userspermissions	updateadvancedsettings	f	
249	1	application	page	create	t	
266	3	application	page	update	f	
102	3	upload	upload	getenvironments	f	
118	3	users-permissions	user	create	f	
128	3	users-permissions	userspermissions	getroutes	f	
138	3	users-permissions	userspermissions	updateproviders	f	
139	2	analytics	analytics	index	f	
149	2	content-type-builder	contenttypebuilder	getmodel	f	
159	2	settings-manager	settingsmanager	databases	f	
169	2	settings-manager	settingsmanager	autoreload	t	
179	2	users-permissions	auth	callback	f	
189	2	users-permissions	user	destroy	f	
199	2	users-permissions	userspermissions	init	t	
248	1	application	page	findone	t	
264	3	application	page	findone	f	
107	3	upload	upload	count	f	
119	3	users-permissions	user	update	f	
129	3	users-permissions	userspermissions	index	f	
214	1	application	location	updaterelation	t	
219	1	application	locations	update	t	
239	2	application	location	createrelation	f	
241	2	application	location	destroyrelation	f	
271	1	application	contentblock	find	t	
281	2	application	contentblock	create	f	
229	3	application	locations	find	f	
290	3	application	contentblock	update	f	
215	1	application	location	destroyrelation	t	
243	2	application	locations	findone	f	
272	1	application	contentblock	findone	t	
283	2	application	contentblock	destroy	f	
293	3	application	contentblock	updaterelation	f	
232	3	application	locations	update	f	
221	3	application	location	find	t	
208	1	application	location	find	t	
218	1	application	locations	create	t	
237	2	application	location	update	f	
273	1	application	contentblock	create	t	
282	2	application	contentblock	update	f	
226	3	application	location	createrelation	f	
292	3	application	contentblock	createrelation	f	
213	1	application	location	createrelation	t	
236	2	application	location	create	f	
274	1	application	contentblock	update	t	
284	2	application	contentblock	createrelation	f	
225	3	application	location	destroy	f	
294	3	application	contentblock	destroyrelation	f	
212	1	application	location	destroy	t	
220	1	application	locations	destroy	t	
240	2	application	location	updaterelation	f	
275	1	application	contentblock	destroy	t	
285	2	application	contentblock	updaterelation	f	
230	3	application	locations	findone	f	
211	1	application	location	update	t	
242	2	application	locations	find	f	
276	1	application	contentblock	updaterelation	t	
286	2	application	contentblock	destroyrelation	f	
231	3	application	locations	create	f	
228	3	application	location	destroyrelation	f	
210	1	application	location	create	t	
244	2	application	locations	create	f	
277	1	application	contentblock	createrelation	t	
287	3	application	contentblock	find	f	
233	3	application	locations	destroy	f	
222	3	application	location	findone	t	
209	1	application	location	findone	t	
234	2	application	location	find	f	
245	2	application	locations	update	f	
278	1	application	contentblock	destroyrelation	t	
288	3	application	contentblock	findone	f	
223	3	application	location	create	f	
216	1	application	locations	find	t	
235	2	application	location	findone	f	
246	2	application	locations	destroy	f	
279	2	application	contentblock	find	f	
289	3	application	contentblock	create	f	
224	3	application	location	update	f	
217	1	application	locations	findone	t	
238	2	application	location	destroy	f	
280	2	application	contentblock	findone	f	
291	3	application	contentblock	destroy	f	
227	3	application	location	updaterelation	f	
72	3	content-manager	contentmanager	models	f	
71	3	content-manager	contentmanager	layout	f	
70	3	analytics	analytics	index	f	
74	3	content-manager	contentmanager	count	f	
73	3	content-manager	contentmanager	find	f	
75	3	content-manager	contentmanager	findone	f	
76	3	content-manager	contentmanager	create	f	
77	3	content-manager	contentmanager	update	f	
80	3	content-type-builder	contenttypebuilder	getmodel	f	
98	3	settings-manager	settingsmanager	updatedatabase	f	
78	3	content-manager	contentmanager	delete	f	
141	2	content-manager	contentmanager	models	f	
151	2	content-type-builder	contenttypebuilder	createmodel	f	
161	2	settings-manager	settingsmanager	databasemodel	f	
171	2	upload	upload	getenvironments	f	
181	2	users-permissions	auth	connect	t	
191	2	users-permissions	userspermissions	deleteprovider	f	
201	2	users-permissions	userspermissions	updaterole	f	
99	3	settings-manager	settingsmanager	deletedatabase	f	
111	3	users-permissions	auth	changepassword	t	
131	3	users-permissions	userspermissions	searchusers	f	
121	3	users-permissions	userspermissions	createrole	f	
\.


--
-- Data for Name: users-permissions_role; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public."users-permissions_role" (id, name, description, type) FROM stdin;
1	Administrator	These users have all access in the project.	root
2	Authenticated	Default role given to authenticated user.	authenticated
3	Public	Default role given to unauthenticated user.	public
\.


--
-- Data for Name: users-permissions_user; Type: TABLE DATA; Schema: public; Owner: fg_db_user
--

COPY public."users-permissions_user" (id, username, email, provider, role, "resetPasswordToken", password, updated_at, created_at) FROM stdin;
1	admin	andrej.kolosay@gmail.com	local	1	\N	$2a$10$gQXTpzjZHxm6Z81JQE3MAuc8bmlVG/8HzvzwVfuWK1H0cSyrn3mFG	\N	\N
\.


--
-- Name: core_store_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.core_store_id_seq', 5, true);


--
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public.location_id_seq', 6, true);


--
-- Name: page_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public.page_id_seq', 1, false);


--
-- Name: text_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public.text_block_id_seq', 1, false);


--
-- Name: upload_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public.upload_file_id_seq', 1, false);


--
-- Name: upload_file_morph_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public.upload_file_morph_id_seq', 1, false);


--
-- Name: users-permissions_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public."users-permissions_permission_id_seq"', 294, true);


--
-- Name: users-permissions_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public."users-permissions_role_id_seq"', 3, true);


--
-- Name: users-permissions_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fg_db_user
--

SELECT pg_catalog.setval('public."users-permissions_user_id_seq"', 1, true);


--
-- Name: core_store core_store_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_store
    ADD CONSTRAINT core_store_pkey PRIMARY KEY (id);


--
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (id);


--
-- Name: page page_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.page
    ADD CONSTRAINT page_pkey PRIMARY KEY (id);


--
-- Name: upload_file_morph upload_file_morph_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.upload_file_morph
    ADD CONSTRAINT upload_file_morph_pkey PRIMARY KEY (id);


--
-- Name: upload_file upload_file_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public.upload_file
    ADD CONSTRAINT upload_file_pkey PRIMARY KEY (id);


--
-- Name: users-permissions_permission users-permissions_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_permission"
    ADD CONSTRAINT "users-permissions_permission_pkey" PRIMARY KEY (id);


--
-- Name: users-permissions_role users-permissions_role_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_role"
    ADD CONSTRAINT "users-permissions_role_pkey" PRIMARY KEY (id);


--
-- Name: users-permissions_user users-permissions_user_pkey; Type: CONSTRAINT; Schema: public; Owner: fg_db_user
--

ALTER TABLE ONLY public."users-permissions_user"
    ADD CONSTRAINT "users-permissions_user_pkey" PRIMARY KEY (id);


--
-- Name: core_store core_store_parent_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.core_store
    ADD CONSTRAINT core_store_parent_fkey FOREIGN KEY (parent) REFERENCES public.core_store(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO fg_db_user;


--
-- Name: TABLE core_store; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.core_store TO fg_db_user;


--
-- Name: SEQUENCE core_store_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,USAGE ON SEQUENCE public.core_store_id_seq TO fg_db_user;


--
-- PostgreSQL database dump complete
--

