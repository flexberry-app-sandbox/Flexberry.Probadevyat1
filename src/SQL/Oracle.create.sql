



CREATE TABLE "РегистрГостя"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Гость" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"Карта" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВходГостя"
(

	"primaryKey" RAW(16) NOT NULL,

	"РегистрГостя" RAW(16) NOT NULL,

	"РегистрацВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РегистрацВхода"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Комната"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКомнаты" NUMBER(10) NULL,

	"Этаж" NUMBER(10) NULL,

	"КоличествоМест" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Карта"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодКарты" NUMBER(10) NULL,

	"ТипКарты" NVARCHAR2(13) NULL,

	"Комната" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гость"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"ДанныеПаспорта" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВходСотрудника"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудник" RAW(16) NOT NULL,

	"РегистрацВхода" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолжности" NUMBER(10) NULL,

	"Должность" NVARCHAR2(255) NULL,

	"Карта" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "РегистрГостя"
	ADD CONSTRAINT "РегистрГостя__5386" FOREIGN KEY ("Гость") REFERENCES "Гость" ("primaryKey");

CREATE INDEX "РегистрГостя__4536" on "РегистрГостя" ("Гость");

ALTER TABLE "РегистрГостя"
	ADD CONSTRAINT "РегистрГостя__3804" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "РегистрГостя__9322" on "РегистрГостя" ("Сотрудник");

ALTER TABLE "РегистрГостя"
	ADD CONSTRAINT "РегистрГостя_F_499" FOREIGN KEY ("Карта") REFERENCES "Карта" ("primaryKey");

CREATE INDEX "РегистрГостя__9968" on "РегистрГостя" ("Карта");

ALTER TABLE "ВходГостя"
	ADD CONSTRAINT "ВходГостя_FРе_3274" FOREIGN KEY ("РегистрГостя") REFERENCES "РегистрГостя" ("primaryKey");

CREATE INDEX "ВходГостя_IРе_9109" on "ВходГостя" ("РегистрГостя");

ALTER TABLE "ВходГостя"
	ADD CONSTRAINT "ВходГостя_FРе_4667" FOREIGN KEY ("РегистрацВхода") REFERENCES "РегистрацВхода" ("primaryKey");

CREATE INDEX "ВходГостя_IРе_1692" on "ВходГостя" ("РегистрацВхода");

ALTER TABLE "РегистрацВхода"
	ADD CONSTRAINT "РегистрацВхо_2184" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "РегистрацВхо_5796" on "РегистрацВхода" ("Комната");

ALTER TABLE "Сотрудник"
	ADD CONSTRAINT "Сотрудник_FДо_3036" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудник_IДо_2503" on "Сотрудник" ("Должности");

ALTER TABLE "Карта"
	ADD CONSTRAINT "Карта_FКомната_0" FOREIGN KEY ("Комната") REFERENCES "Комната" ("primaryKey");

CREATE INDEX "Карта_IКомната" on "Карта" ("Комната");

ALTER TABLE "ВходСотрудника"
	ADD CONSTRAINT "ВходСотрудни_6819" FOREIGN KEY ("Сотрудник") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "ВходСотрудни_9159" on "ВходСотрудника" ("Сотрудник");

ALTER TABLE "ВходСотрудника"
	ADD CONSTRAINT "ВходСотрудни_3242" FOREIGN KEY ("РегистрацВхода") REFERENCES "РегистрацВхода" ("primaryKey");

CREATE INDEX "ВходСотрудни_6200" on "ВходСотрудника" ("РегистрацВхода");

ALTER TABLE "Должности"
	ADD CONSTRAINT "Должности_FКа_8081" FOREIGN KEY ("Карта") REFERENCES "Карта" ("primaryKey");

CREATE INDEX "Должности_IКарта" on "Должности" ("Карта");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


