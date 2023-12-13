




CREATE TABLE РегистрГостя (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Гость UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 Карта UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВходГостя (
 primaryKey UUID NOT NULL,
 РегистрГостя UUID NOT NULL,
 РегистрацВхода UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РегистрацВхода (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Комната UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Комната (
 primaryKey UUID NOT NULL,
 НомерКомнаты INT NULL,
 Этаж INT NULL,
 КоличествоМест INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Телефон INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Карта (
 primaryKey UUID NOT NULL,
 КодКарты INT NULL,
 ТипКарты VARCHAR(13) NULL,
 Комната UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Гость (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 ДанныеПаспорта INT NULL,
 Телефон INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВходСотрудника (
 primaryKey UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 РегистрацВхода UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Должность VARCHAR(255) NULL,
 Карта UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE РегистрГостя ADD CONSTRAINT FK23cd89615b0eea279e4b2b92d4a214e9897e7cca FOREIGN KEY (Гость) REFERENCES Гость; 
CREATE INDEX Index23cd89615b0eea279e4b2b92d4a214e9897e7cca on РегистрГостя (Гость); 

 ALTER TABLE РегистрГостя ADD CONSTRAINT FKc8f52c455b83d6e18346654ec71630f5458aa040 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexc8f52c455b83d6e18346654ec71630f5458aa040 on РегистрГостя (Сотрудник); 

 ALTER TABLE РегистрГостя ADD CONSTRAINT FKa159d2c2590ce17dd2836a3a2674a97fcdcaa11e FOREIGN KEY (Карта) REFERENCES Карта; 
CREATE INDEX Indexa159d2c2590ce17dd2836a3a2674a97fcdcaa11e on РегистрГостя (Карта); 

 ALTER TABLE ВходГостя ADD CONSTRAINT FKed960f29966d5e50c2bdf44c7aeac1bb7b9526d1 FOREIGN KEY (РегистрГостя) REFERENCES РегистрГостя; 
CREATE INDEX Indexed960f29966d5e50c2bdf44c7aeac1bb7b9526d1 on ВходГостя (РегистрГостя); 

 ALTER TABLE ВходГостя ADD CONSTRAINT FK16da1a91aa860b8afd2c2a5fafaa33b09bf426ad FOREIGN KEY (РегистрацВхода) REFERENCES РегистрацВхода; 
CREATE INDEX Index16da1a91aa860b8afd2c2a5fafaa33b09bf426ad on ВходГостя (РегистрацВхода); 

 ALTER TABLE РегистрацВхода ADD CONSTRAINT FK649a09f754098e4ad3ecf070a4b10b7616d8adf1 FOREIGN KEY (Комната) REFERENCES Комната; 
CREATE INDEX Index649a09f754098e4ad3ecf070a4b10b7616d8adf1 on РегистрацВхода (Комната); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE Карта ADD CONSTRAINT FK36f987f095ac2807d8ba227c50347eb082d8f3af FOREIGN KEY (Комната) REFERENCES Комната; 
CREATE INDEX Index36f987f095ac2807d8ba227c50347eb082d8f3af on Карта (Комната); 

 ALTER TABLE ВходСотрудника ADD CONSTRAINT FKcf1866aa2c3e4adc1baa9cd90bfd719cc3837dd2 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexcf1866aa2c3e4adc1baa9cd90bfd719cc3837dd2 on ВходСотрудника (Сотрудник); 

 ALTER TABLE ВходСотрудника ADD CONSTRAINT FKf7979237dd8fb9fe5085d51a84b2c62316452802 FOREIGN KEY (РегистрацВхода) REFERENCES РегистрацВхода; 
CREATE INDEX Indexf7979237dd8fb9fe5085d51a84b2c62316452802 on ВходСотрудника (РегистрацВхода); 

 ALTER TABLE Должности ADD CONSTRAINT FK5c64c094c50e0e437a42139b3b4908965858f5e0 FOREIGN KEY (Карта) REFERENCES Карта; 
CREATE INDEX Index5c64c094c50e0e437a42139b3b4908965858f5e0 on Должности (Карта); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

