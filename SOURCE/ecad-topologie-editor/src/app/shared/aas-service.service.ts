import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as demoModel from '../../assets/Submodel_Documentation.json';
import { ListItemData } from './list-item-data';

@Injectable({
  providedIn: 'root'
})
export class AasServiceService {

  constructor(http: HttpClient) { }

  getAasModel(): any {
    return demoModel
  }

  getItems(filter: string) : any[]{
    const items = this.items.filter(
      (item) => [item.name].some(string => string.toLowerCase().includes(filter.toLowerCase().trim())) 
    ) 
    //filtert Items deren description oder name den String der Suchleiste beinhalten, nicht case sensitiv
    return items.length? items : [] 
  }

  // temporary test data
  items: ListItemData[] = [
    {
        id: 1,
        name: 'Xelity 6TX managed switch 6 port 1000Mbit IP20',
        rawJson: {
            "category": "CONSTANT",
            "idShort": "Nameplate",
            "displayName": [
              {
                "language": "en",
                "text": "Digital Nameplate"
              },
              {
                "language": "de",
                "text": "Digitales Namensschild"
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Contains the nameplate information attached to the product."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "administration": {
              "version": "1",
              "revision": "0",
              "templateId": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
            },
            "id": "https://aas.murrelektronik.com/58822/sm/1/0/nameplate",
            "kind": "Instance",
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
                }
              ]
            },
            "qualifiers": [],
            "submodelElements": [
              {
                "category": "CONSTANT",
                "idShort": "URIOfTheProduct",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABN590#001 URI of product instance."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAY811#001"
                    }
                  ]
                },
                "qualifiers": [],
                "valueType": "xs:string",
                "value": "https://aas.murrelektronik.com/58822",
                "modelType": "Property"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerName",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA565#007 manufacturer Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO677#002"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Murrelektronik"
                  },
                  {
                    "language": "de",
                    "text": "Murrelektronik"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductDesignation",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA567#007 name of product Note: Short designation of the product is meant. Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAW338#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Xelity 6TX managed switch 6 port 1000Mbit IP20"
                  },
                  {
                    "language": "de",
                    "text": "Xelity 6TX Managed Switch 6 Port 1000Mbit IP20"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ContactInformation",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "The SMC “ContactInformation” contains information on how to contact the manufacturer or an authorised service provider, e.g. when a maintenance service is required. Note: physical address is a mandatory Property according to EU Machine Directive 2006/42/EC"
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "NationalCode",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61360_4#ADA005#001 country code. country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO134#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "DE"
                      },
                      {
                        "language": "de",
                        "text": "DE"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "CityTown",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA129#001 city/town. Mandatory Property according to EU Machine Directive 2006/42/EC."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO132#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Oppenweiler"
                      },
                      {
                        "language": "de",
                        "text": "Oppenweiler"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Company",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAW001#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Department",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO127#003"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Sales"
                      },
                      {
                        "language": "de",
                        "text": "Sales"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "IPCommunication{00}",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "AddressOfAdditionalLink",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAQ326#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "valueType": "xs:string",
                        "value": "shop@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "AvailableTime",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 to 17:00"
                          },
                          {
                            "language": "de",
                            "text": "Monday – Friday 07:30 to 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfCommunication",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ ContactInformations/ContactInformation/IPCommunication/TypeOfCommunication"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Phone",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Phone"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "TelephoneNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO136#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-4490"
                          },
                          {
                            "language": "de",
                            "text": "+49 7191 47-4490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfTelephone",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": " enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS755#001 (office mobile), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home), 0173-1#07-AAS759#001 (private mobile)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO137#003"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Fax",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ834#005"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "FaxNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO195#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-494490"
                          },
                          {
                            "language": "de",
                            "text": "+49 7191 47-494490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfFaxNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS758#001 (home)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO196#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Email",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ836#005"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "EmailAddress",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO198#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "valueType": "xs:string",
                        "value": "info@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfEmailAddress",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO199#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Street",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA286#001 street. Mandatory Property according to EU Machine Directive 2006/42/EC"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO128#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "Falkenstraße 3"
                      },
                      {
                        "language": "de",
                        "text": "Falkenstraße 3"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Zipcode",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA281#001 ZIP/Postal code. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO129#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "71570"
                      },
                      {
                        "language": "de",
                        "text": "71570"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "POBox",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO130#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "P.O. Box 1165"
                      },
                      {
                        "language": "de",
                        "text": "P.O. Box 1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "ZipCodeOfPOBox",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO131#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "1165"
                      },
                      {
                        "language": "de",
                        "text": "1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "StateCounty",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO133#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "Baden-Württemberg"
                      },
                      {
                        "language": "de",
                        "text": "Baden-Württemberg"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductRoot",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU732#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Network Technology"
                  },
                  {
                    "language": "de",
                    "text": "Netzwerktechnik"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductFamily",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: conditionally mandatory Property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU731#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Network component"
                  },
                  {
                    "language": "de",
                    "text": "Netzwerkkomponente"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductType",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA300#006 code of product Note: conditionally mandatory Property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO057#002"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Managed switch"
                  },
                  {
                    "language": "de",
                    "text": "Managed Switch"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "OrderCodeOfManufacturer",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA950#006 order code of product Note: Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO227#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "58822"
                  },
                  {
                    "language": "de",
                    "text": "58822"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ProductArticleNumberOfManufacturer",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA581#006 article number Note: Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO676#003"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "58822"
                  },
                  {
                    "language": "de",
                    "text": "58822"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "YearOfConstruction",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAP906#001"
                    }
                  ]
                },
                "qualifiers": [],
                "valueType": "xs:string",
                "value": "2024",
                "modelType": "Property"
              },
              {
                "category": "CONSTANT",
                "idShort": "CompanyLogo",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/CompanyLogo"
                    }
                  ]
                },
                "qualifiers": [],
                "value": "/aasx/suppl/Murrelektronik_Logo.png",
                "contentType": "image/png",
                "modelType": "File"
              },
              {
                "category": "CONSTANT",
                "idShort": "Markings",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: CE marking is declared as mandatory according to EU Machine Directive 2006/42/EC."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AGZ673#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "Marking",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingName",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "CE Marking",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "DesignationOfCertificateOrApproval",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "https://shop.murrelektronik.com/7000-40021-6340500/CE",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingFile",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": "/aasx/suppl/ce-mark.png",
                        "contentType": "image/png",
                        "modelType": "File"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Marking",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingName",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "UKCA Marking",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "DesignationOfCertificateOrApproval",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "https://shop.murrelektronik.com/7000-40021-6340500/",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingFile",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": "/aasx/suppl/UKCA.png",
                        "contentType": "image/png",
                        "modelType": "File"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Marking",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingName",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "UL Marking",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "DesignationOfCertificateOrApproval",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "https://shop.murrelektronik.com/7000-40021-6340500/UL",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "MarkingFile",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": "/aasx/suppl/UL.PNG",
                        "contentType": "image/png",
                        "modelType": "File"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              }
            ],
            "modelType": "Submodel"
          }
    },
    {
        id: 2,
        name: 'TREE 4TX IP67 4xM12',
        rawJson: {
            "idShort": "Nameplate",
            "description": [
              {
                "language": "en",
                "text": "Contains the nameplate information attached to the product"
              }
            ],
            "id": "https://aas.murrelektronik.com/58160/sm/1/0/de02143657/nameplate",
            "kind": "Instance",
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "ConceptDescription",
                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
                }
              ]
            },
            "submodelElements": [
              {
                "idShort": "URIOfTheProduct",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABN590#001 URI of product instance "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAY811#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "ManufacturerName",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA565#007 manufacturer Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO677#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "de",
                    "text": "Murrelektronik GmbH"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductDesignation",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA567#007 name of product Note: Short designation of the product is meant. Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAW338#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": "TREE 4TX IP67 4xM12"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ContactInformation",
                "description": [
                  {
                    "language": "en",
                    "text": "The SMC “ContactInformation” contains information on how to contact the manufacturer or an authorised service provider, e.g. when a maintenance service is required. Note: physical address is a mandatory property according to EU Machine Directive 2006/42/EC"
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "RoleOfContactPerson",
                    "description": [
                      {
                        "language": "en",
                        "text": "enumeration: 0173-1#07-AAS927#001 (administrativ contact), 0173-1#07-AAS928#001 (commercial contact), 0173-1#07-AAS929#001 (other contact), 0173-1#07-AAS930#001 (hazardous goods contact), 0173-1#07-AAS931#001 (technical contact). Note: the above mentioned ECLASS enumeration should be declared as “open” for further addition. ECLASS enumeration IRDI is preferable. If no IRDI available, custom input as String may also be accepted."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO204#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "NationalCode",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61360_4#ADA005#001 country code. country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes. Mandatory property according to EU Machine Directive 2006/42/EC. Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO134#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "DE"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Language",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: language codes defined accord. to ISO 639-1. Note: as per ECLASS definition, Expression and representation of thoughts, information, feelings, ideas through characters."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Language"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "en",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "TimeZone",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: notation accord. to ISO 8601 Note: for time in UTC the zone designator “Z” is to be used"
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/TimeZone"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "CityTown",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA129#001 city/town. Mandatory property according to EU Machine Directive 2006/42/EC."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO132#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Oppenweiler"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Company",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAW001#001"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Murrelektronik GmbH"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Department",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO127#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Sales"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Phone",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Phone"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "TelephoneNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO136#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-4490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfTelephone",
                        "description": [
                          {
                            "language": "en",
                            "text": " enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS755#001 (office mobile), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home), 0173-1#07-AAS759#001 (private mobile)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO137#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "AvailableTime",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 bis 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Fax",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ834#005"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "FaxNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO195#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-494490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfFaxNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS758#001 (home)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO196#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Email",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ836#005"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "EmailAddress",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO198#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": " info@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "PublicKey",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO200#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfEmailAddress",
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO199#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "TypeOfPublicKey",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO201#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "IPCommunication{00}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "AddressOfAdditionalLink",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAQ326#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "https://shop.murrelektronik.com/58160",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "TypeOfCommunication",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ ContactInformations/ContactInformation/IPCommunication/TypeOfCommunication"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "AvailableTime",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 bis 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Street",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA286#001 street. Mandatory property according to EU Machine Directive 2006/42/EC"
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO128#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "de",
                        "text": "Falkenstraße 3"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Zipcode",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA281#001 ZIP/Postal code. Mandatory property according to EU Machine Directive 2006/42/EC. Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO129#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "de",
                        "text": "71570 "
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "POBox",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO130#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "P.O. Box 1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "ZipCodeOfPOBox",
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO131#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": ""
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "StateCounty",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO133#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Baden-Württemberg"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "NameOfContact",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO205#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "FirstName",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO206#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "MiddleNames",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO207#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Title",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO208#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "AcademicTitle",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO209#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "FurtherDetailsOfContact",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO210#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "AddressOfAdditionalLink",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ326#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "idShort": "ManufacturerProductRoot",
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU732#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductFamily",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: conditionally mandatory property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU731#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductType",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA300#006 code of product Note: conditionally mandatory property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO057#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "OrderCodeOfManufacturer",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA950#006 order code of product Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO227#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ProductArticleNumberOfManufacturer",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA581#006 article number Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO676#003"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": "58160"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "SerialNumber",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA951#007 serial number "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM556#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "YearOfConstruction",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAP906#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "DateOfManufacture",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABB757#007 date of manufacture Note: format by lexical representation: CCYY-MM-DD "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAR972#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:date",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "HardwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA926#006 hardware version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAN270#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "FirmwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA302#004 firmware version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM985#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "SoftwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA601#006 software version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM737#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "CountryOfOrigin",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61360_4#ADA034#001 country of origin Note: Country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO259#004"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "DE",
                "modelType": "Property"
              },
              {
                "idShort": "CompanyLogo",
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/CompanyLogo"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": "/MurrLogo.png",
                "contentType": "",
                "modelType": "File"
              },
              {
                "idShort": "Markings",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: CE marking is declared as mandatory according to EU Machine Directive 2006/42/EC."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AGZ673#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "Marking",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "MarkingName",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "CE Marking",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "DesignationOfCertificateOrApproval",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "IssueDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/IssueDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExpiryDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also ([IRDI] 0173-1#02-AAO997#001 Validity date Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExpiryDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "MarkingFile",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": "/aasx/Nameplate/marking_ce.png",
                        "contentType": "",
                        "modelType": "File"
                      },
                      {
                        "idShort": "MarkingAdditionalText",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-AAM954#002 details of other certificate "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingAdditionalText"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToMany"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExplosionSafeties",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "idShort": "ExplosionSafety",
                            "semanticId": {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety"
                                }
                              ]
                            },
                            "qualifiers": [
                              {
                                "type": "Multiplicity",
                                "valueType": "xs:string",
                                "value": "OneToMany"
                              }
                            ],
                            "embeddedDataSpecifications": [],
                            "value": [
                              {
                                "idShort": "DesignationOfCertificateOrApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABH783#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "KEMA99IECEX1105/128",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "TypeOfApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA231#008 type of hazardous area approval Note: name of the approval system, e.g. ATEX, IECEX, NEC, EAC, CCC, CEC Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM812#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "ATEX"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "ApprovalAgencyTestingAgency",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA634#004 approval agency/testing agency Note: name of the agency, which has issued the certificate, e.g. PTB, KEMA, CSA, SIRA Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM632#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "PTB"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "TypeOfProtection",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAQ325#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "db",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "RatedInsulationVoltage",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Um(eff) Note: Insulation voltage, if specified in the certificate "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAN532#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "250",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "InstructionsControlDrawing",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Reference to the instruction manual or control drawing "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABO102#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": {
                                  "type": "ModelReference",
                                  "keys": []
                                },
                                "modelType": "ReferenceElement"
                              },
                              {
                                "idShort": "SpecificConditionsForUse",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: X if any, otherwise no entry"
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/SpecificConditionsForUse"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "X",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "IncompleteDevice",
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/IncompleteDevice"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "U",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "AmbientConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/AmbientConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial definiton: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "2G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC standards. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Gb"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "Class I, Division 2",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MinimumAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA621#007 minimum ambient temperature Note: editorial defnition: lower limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated minimum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAZ952#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA623#007 maximum ambient temperature Note: editorial definition: upper limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated maximum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-BAA039#010"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature of the device (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "100",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ProcessConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ProcessConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial defnition: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "1G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial defnition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC or other standards, e.g. Ga (IEC), Class I/Division 1 (US), Zone (EAC) Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IS",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "ia",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "LowerLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated minimum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN309#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "UpperLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated maximum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN307#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "85",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ExternalElectricalCircuit",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If several external circuits can be connected to the device, this block shall provide a cardinality with the number of circuits Note: If for one external IS circuit several sets of safety parameters are provided (e.g. for several material groups), each set is specified in a separate block as a separate circuit. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToMany"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DesignationOfElectricalTerminal",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: For each circuit the designation of the terminals shall be specified. If several circuits are provided with the same parameters, their terminal pairs are listed and separated by a semicolon. If several circuits belong to one channel this shall be described in the instructions. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0112/2///61987#ABB147#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "+/-",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex)) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: EPL according to IEC standards Note: value should be chosen from an enumeration list with values “Ga, Gb, Gc, Da, Db, Dc, Ma, Mb”  Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Characteristics",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: linear/ non-linear "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Characteristics"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "linear",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Fisco",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Fisco"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TwoWISE",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/TwoWISE"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForPassiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC586#001 Safety related properties for passive behaviour Note: IS-parameters for passive circuits, if relevant (e.g. 2 wire field devices, valves) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ380#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxInputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA981#001 maximum input power (Pi) Note: Limit value for input power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ372#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "1250",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA982#001 maximum input voltage (Ui) Note: Limit value for input voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM638#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "30",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA983#001 maximum input current (Ii) Note: Limit value for input current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM642#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "100",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA984#001 maximum internal capacitance (Ci) Note: Maximum internal capacitance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM640#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA985#001 maximum internal inductance (Li) Note: Maximum internal inductance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM639#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForActiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC585#001 Safety related properties for active behaviour Note: IS-parameters for active circuits, if relevant (e.g. power supply, IS-barriers) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ381#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxOutputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA987#001 maximum output power (Po) Note: Limit value for output power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ371#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "960",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA989#001 maximum output voltage (Uo) Note: Limit value for open circuits output voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM635#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "15.7",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA988#001maximum output current (Io) Note: Limit value for closed circuit output current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM641#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "245",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA990#001 maximum external capacitance (Co) Note: Maximum external capacitance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM637#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2878",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA991#001 maximum external inductance (Lo) Note: Maximum external inductance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM636#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2.9",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductanceResistanceRatio",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABB145#001 maximum external inductance/resistance ratio (Lo/Ro) Note: External Inductance to Resistance ratio "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM634#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              }
                            ],
                            "modelType": "SubmodelElementCollection"
                          }
                        ],
                        "modelType": "SubmodelElementCollection"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "idShort": "AssetSpecificProperties",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: defined as “Asset specific nameplate information” per ECLASS "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AGZ672#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "GuidelineSpecificProperties{00}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD205#001"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "OneToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "GuidelineForConformityDeclaration",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO856#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "{arbitrary}",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "www.example.com/ids/cd/3325_9020_5022_1074"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "OneToMany"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "{arbitrary}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "www.example.com/ids/cd/3325_9020_5022_1964"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "OneToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              }
            ],
            "modelType": "Submodel"
          }
    },
    {
        id: 3,
        name: 'VARIO-X_ASSEMBLY-BPC200-CTRL-FEEDIO',
        rawJson: {
            "category": "CONSTANT",
            "idShort": "Nameplate",
            "displayName": [
              {
                "language": "en",
                "text": "Digital Nameplate"
              },
              {
                "language": "de",
                "text": "Digitales Namensschild"
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Contains the nameplate information attached to the product."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "administration": {
              "version": "1",
              "revision": "0",
              "templateId": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
            },
            "id": "https://aas.murrelektronik.com/V000-ASSY0-0100002/sm/1/0/de02143657/nameplate",
            "kind": "Instance",
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
                }
              ]
            },
            "qualifiers": [],
            "submodelElements": [
              {
                "category": "CONSTANT",
                "idShort": "URIOfTheProduct",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABN590#001 URI of product instance."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAY811#001"
                    }
                  ]
                },
                "qualifiers": [],
                "valueType": "xs:string",
                "value": "https://aas.murrelektronik.com/V000-ASSY0-0100002",
                "modelType": "Property"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerName",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA565#007 manufacturer Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO677#002"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Murrelektronik"
                  },
                  {
                    "language": "de",
                    "text": "Murrelektronik"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductDesignation",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA567#007 name of product Note: Short designation of the product is meant. Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAW338#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "VARIO-X_ASSEMBLY-BPC200-CTRL-FEEDIO"
                  },
                  {
                    "language": "de",
                    "text": "VARIO-X_ASSEMBLY-BPC200-CTRL-FEEDIO"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ContactInformation",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "The SMC “ContactInformation” contains information on how to contact the manufacturer or an authorised service provider, e.g. when a maintenance service is required. Note: physical address is a mandatory Property according to EU Machine Directive 2006/42/EC"
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "NationalCode",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61360_4#ADA005#001 country code. country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO134#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "DE"
                      },
                      {
                        "language": "de",
                        "text": "DE"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "CityTown",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA129#001 city/town. Mandatory Property according to EU Machine Directive 2006/42/EC."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO132#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Oppenweiler"
                      },
                      {
                        "language": "de",
                        "text": "Oppenweiler"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Company",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAW001#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Murrelektronik"
                      },
                      {
                        "language": "de",
                        "text": "Murrelektronik"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Department",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO127#003"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Sales"
                      },
                      {
                        "language": "de",
                        "text": "Sales"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "IPCommunication{00}",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "AddressOfAdditionalLink",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAQ326#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "shop@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "AvailableTime",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 to 17:00"
                          },
                          {
                            "language": "de",
                            "text": "Monday – Friday 07:30 to 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Phone",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Phone"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "TelephoneNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO136#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-4490"
                          },
                          {
                            "language": "de",
                            "text": "+49 7191 47-4490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfTelephone",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": " enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS755#001 (office mobile), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home), 0173-1#07-AAS759#001 (private mobile)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO137#003"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Fax",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ834#005"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "FaxNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO195#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-494490"
                          },
                          {
                            "language": "de",
                            "text": "+49 7191 47-494490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfFaxNumber",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS758#001 (home)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO196#003"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Email",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ836#005"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "category": "CONSTANT",
                        "idShort": "EmailAddress",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO198#002"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "info@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "category": "CONSTANT",
                        "idShort": "TypeOfEmailAddress",
                        "displayName": [
                          {
                            "language": "en",
                            "text": ""
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                          },
                          {
                            "language": "de",
                            "text": ""
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO199#003"
                            }
                          ]
                        },
                        "qualifiers": [],
                        "valueType": "xs:string",
                        "value": "0173-1#07-AAS754#001",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Street",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA286#001 street. Mandatory Property according to EU Machine Directive 2006/42/EC"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO128#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Falkenstraße 3"
                      },
                      {
                        "language": "de",
                        "text": "Falkenstraße 3"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "Zipcode",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA281#001 ZIP/Postal code. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO129#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "71570"
                      },
                      {
                        "language": "de",
                        "text": "71570"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "POBox",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO130#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "P.O. Box 1165"
                      },
                      {
                        "language": "de",
                        "text": "P.O. Box 1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "ZipCodeOfPOBox",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO131#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "1165"
                      },
                      {
                        "language": "de",
                        "text": "1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "StateCounty",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO133#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Baden-Württemberg"
                      },
                      {
                        "language": "de",
                        "text": "Baden-Württemberg"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "ManufacturerProductFamily",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: conditionally mandatory Property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU731#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Feldbus, Dezentrale Peripherie - Funktions-/Technologie-Modul "
                  },
                  {
                    "language": "de",
                    "text": "Feldbus, Dezentrale Peripherie - Funktions-/Technologie-Modul "
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ProductArticleNumberOfManufacturer",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA581#006 article number Note: Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO676#003"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "V000-ASSY0-0100002"
                  },
                  {
                    "language": "de",
                    "text": "V000-ASSY0-0100002"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "YearOfConstruction",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAP906#001"
                    }
                  ]
                },
                "qualifiers": [],
                "valueType": "xs:string",
                "value": "2023",
                "modelType": "Property"
              },
              {
                "category": "CONSTANT",
                "idShort": "CompanyLogo",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/CompanyLogo"
                    }
                  ]
                },
                "qualifiers": [],
                "value": "/aasx/suppl/Murrelektronik_Logo.png",
                "contentType": "image/png",
                "modelType": "File"
              }
            ],
            "modelType": "Submodel"
          },
    },
    {
        id: 4,
        name: 'RMM 11/24VDC WITH GROUND BRIDGE OUTPUT RELAY',
        rawJson: {
            "idShort": "Nameplate",
            "description": [
              {
                "language": "en",
                "text": "Contains the nameplate information attached to the product"
              }
            ],
            "administration": {
              "version": "1",
              "revision": "0"
            },
            "id": "https://aas.murrelektronik.com/51851/sm/1/0/de02143657/Nameplate",
            "kind": "Instance",
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "ConceptDescription",
                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
                }
              ]
            },
            "submodelElements": [
              {
                "idShort": "URIOfTheProduct",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABN590#001 URI of product instance "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAY811#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "ManufacturerName",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA565#007 manufacturer Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO677#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "de",
                    "text": "Murrelektronik GmbH"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductDesignation",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA567#007 name of product Note: Short designation of the product is meant. Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAW338#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": "RMM 11/24VDC WITH GROUND BRIDGE OUTPUT RELAY"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ContactInformation",
                "description": [
                  {
                    "language": "en",
                    "text": "The SMC “ContactInformation” contains information on how to contact the manufacturer or an authorised service provider, e.g. when a maintenance service is required. Note: physical address is a mandatory property according to EU Machine Directive 2006/42/EC"
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "RoleOfContactPerson",
                    "description": [
                      {
                        "language": "en",
                        "text": "enumeration: 0173-1#07-AAS927#001 (administrativ contact), 0173-1#07-AAS928#001 (commercial contact), 0173-1#07-AAS929#001 (other contact), 0173-1#07-AAS930#001 (hazardous goods contact), 0173-1#07-AAS931#001 (technical contact). Note: the above mentioned ECLASS enumeration should be declared as “open” for further addition. ECLASS enumeration IRDI is preferable. If no IRDI available, custom input as String may also be accepted."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO204#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "NationalCode",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61360_4#ADA005#001 country code. country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes. Mandatory property according to EU Machine Directive 2006/42/EC. Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO134#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "DE"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Language",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: language codes defined accord. to ISO 639-1. Note: as per ECLASS definition, Expression and representation of thoughts, information, feelings, ideas through characters."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Language"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "en",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "TimeZone",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: notation accord. to ISO 8601 Note: for time in UTC the zone designator “Z” is to be used"
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/TimeZone"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "UTC+2",
                    "modelType": "Property"
                  },
                  {
                    "idShort": "CityTown",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA129#001 city/town. Mandatory property according to EU Machine Directive 2006/42/EC."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO132#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Oppenweiler"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Company",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAW001#001"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Murrelektronik GmbH"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Department",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO127#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Sales"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Phone",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Phone"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "TelephoneNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO136#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-4490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfTelephone",
                        "description": [
                          {
                            "language": "en",
                            "text": " enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS755#001 (office mobile), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home), 0173-1#07-AAS759#001 (private mobile)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO137#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "AvailableTime",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 bis 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Fax",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ834#005"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "FaxNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO195#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "+49 7191 47-494490"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfFaxNumber",
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS758#001 (home)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO196#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Email",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ836#005"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "EmailAddress",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO198#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": " info@murrelektronik.de",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "PublicKey",
                        "description": [
                          {
                            "language": "en",
                            "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO200#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [],
                        "modelType": "MultiLanguageProperty"
                      },
                      {
                        "idShort": "TypeOfEmailAddress",
                        "description": [
                          {
                            "language": "en",
                            "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO199#003"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "1",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "TypeOfPublicKey",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO201#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "IPCommunication{00}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "AddressOfAdditionalLink",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAQ326#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "https://stage.shop.murrelektronik.de/51851",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "TypeOfCommunication",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ ContactInformations/ContactInformation/IPCommunication/TypeOfCommunication"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "AvailableTime",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "language": "en",
                            "text": "Monday – Friday 07:30 bis 17:00"
                          }
                        ],
                        "modelType": "MultiLanguageProperty"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Street",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA286#001 street. Mandatory property according to EU Machine Directive 2006/42/EC"
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO128#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "de",
                        "text": "Falkenstraße 3"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Zipcode",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABA281#001 ZIP/Postal code. Mandatory property according to EU Machine Directive 2006/42/EC. Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO129#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "de",
                        "text": "71570 "
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "POBox",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO130#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "P.O. Box 1165"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "ZipCodeOfPOBox",
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO131#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": ""
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "StateCounty",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO133#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "Baden-Württemberg"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "NameOfContact",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO205#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "FirstName",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO206#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "MiddleNames",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO207#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "Title",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO208#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "AcademicTitle",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO209#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "FurtherDetailsOfContact",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO210#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "idShort": "AddressOfAdditionalLink",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ326#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "https://stage.shop.murrelektronik.de/51851",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "idShort": "ManufacturerProductRoot",
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU732#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductFamily",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: conditionally mandatory property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAU731#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Standard all-or-nothing relay"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ManufacturerProductType",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA300#006 code of product Note: conditionally mandatory property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO057#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "OrderCodeOfManufacturer",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA950#006 order code of product Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO227#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "ProductArticleNumberOfManufacturer",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA581#006 article number Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO676#003"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": "51851"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "SerialNumber",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA951#007 serial number "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM556#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "YearOfConstruction",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: mandatory property according to EU Machine Directive 2006/42/EC. "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAP906#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "DateOfManufacture",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABB757#007 date of manufacture Note: format by lexical representation: CCYY-MM-DD "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAR972#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:date",
                "value": "",
                "modelType": "Property"
              },
              {
                "idShort": "HardwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA926#006 hardware version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAN270#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "FirmwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA302#004 firmware version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM985#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "SoftwareVersion",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA601#006 software version Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAM737#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "idShort": "CountryOfOrigin",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61360_4#ADA034#001 country of origin Note: Country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO259#004"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "valueType": "xs:string",
                "value": "DE",
                "modelType": "Property"
              },
              {
                "idShort": "CompanyLogo",
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/CompanyLogo"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": "/MurrLogo.png",
                "contentType": "",
                "modelType": "File"
              },
              {
                "idShort": "Markings",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: CE marking is declared as mandatory according to EU Machine Directive 2006/42/EC."
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AGZ673#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "Marking00",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "MarkingName",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "CE Marking",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "DesignationOfCertificateOrApproval",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "IssueDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/IssueDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExpiryDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also ([IRDI] 0173-1#02-AAO997#001 Validity date Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExpiryDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "MarkingFile",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": "/aasx/Nameplate/marking_ce.png",
                        "contentType": "",
                        "modelType": "File"
                      },
                      {
                        "idShort": "MarkingAdditionalText",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-AAM954#002 details of other certificate "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingAdditionalText"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToMany"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExplosionSafeties",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "idShort": "ExplosionSafety",
                            "semanticId": {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety"
                                }
                              ]
                            },
                            "qualifiers": [
                              {
                                "type": "Multiplicity",
                                "valueType": "xs:string",
                                "value": "OneToMany"
                              }
                            ],
                            "embeddedDataSpecifications": [],
                            "value": [
                              {
                                "idShort": "DesignationOfCertificateOrApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABH783#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "KEMA99IECEX1105/128",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "TypeOfApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA231#008 type of hazardous area approval Note: name of the approval system, e.g. ATEX, IECEX, NEC, EAC, CCC, CEC Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM812#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "ATEX"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "ApprovalAgencyTestingAgency",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA634#004 approval agency/testing agency Note: name of the agency, which has issued the certificate, e.g. PTB, KEMA, CSA, SIRA Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM632#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "PTB"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "TypeOfProtection",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAQ325#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "db",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "RatedInsulationVoltage",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Um(eff) Note: Insulation voltage, if specified in the certificate "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAN532#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "250",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "InstructionsControlDrawing",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Reference to the instruction manual or control drawing "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABO102#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": {
                                  "type": "ModelReference",
                                  "keys": []
                                },
                                "modelType": "ReferenceElement"
                              },
                              {
                                "idShort": "SpecificConditionsForUse",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: X if any, otherwise no entry"
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/SpecificConditionsForUse"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "X",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "IncompleteDevice",
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/IncompleteDevice"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "U",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "AmbientConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/AmbientConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial definiton: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "2G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC standards. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Gb"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "Class I, Division 2",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MinimumAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA621#007 minimum ambient temperature Note: editorial defnition: lower limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated minimum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAZ952#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA623#007 maximum ambient temperature Note: editorial definition: upper limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated maximum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-BAA039#010"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature of the device (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "100",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ProcessConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ProcessConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial defnition: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "1G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial defnition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC or other standards, e.g. Ga (IEC), Class I/Division 1 (US), Zone (EAC) Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IS",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "ia",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "LowerLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated minimum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN309#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "UpperLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated maximum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN307#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "85",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ExternalElectricalCircuit",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If several external circuits can be connected to the device, this block shall provide a cardinality with the number of circuits Note: If for one external IS circuit several sets of safety parameters are provided (e.g. for several material groups), each set is specified in a separate block as a separate circuit. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToMany"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DesignationOfElectricalTerminal",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: For each circuit the designation of the terminals shall be specified. If several circuits are provided with the same parameters, their terminal pairs are listed and separated by a semicolon. If several circuits belong to one channel this shall be described in the instructions. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0112/2///61987#ABB147#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "+/-",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex)) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: EPL according to IEC standards Note: value should be chosen from an enumeration list with values “Ga, Gb, Gc, Da, Db, Dc, Ma, Mb”  Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Characteristics",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: linear/ non-linear "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Characteristics"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "linear",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Fisco",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Fisco"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TwoWISE",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/TwoWISE"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForPassiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC586#001 Safety related properties for passive behaviour Note: IS-parameters for passive circuits, if relevant (e.g. 2 wire field devices, valves) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ380#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxInputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA981#001 maximum input power (Pi) Note: Limit value for input power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ372#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "1250",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA982#001 maximum input voltage (Ui) Note: Limit value for input voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM638#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "30",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA983#001 maximum input current (Ii) Note: Limit value for input current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM642#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "100",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA984#001 maximum internal capacitance (Ci) Note: Maximum internal capacitance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM640#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA985#001 maximum internal inductance (Li) Note: Maximum internal inductance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM639#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForActiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC585#001 Safety related properties for active behaviour Note: IS-parameters for active circuits, if relevant (e.g. power supply, IS-barriers) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ381#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxOutputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA987#001 maximum output power (Po) Note: Limit value for output power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ371#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "960",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA989#001 maximum output voltage (Uo) Note: Limit value for open circuits output voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM635#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "15.7",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA988#001maximum output current (Io) Note: Limit value for closed circuit output current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM641#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "245",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA990#001 maximum external capacitance (Co) Note: Maximum external capacitance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM637#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2878",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA991#001 maximum external inductance (Lo) Note: Maximum external inductance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM636#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2.9",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductanceResistanceRatio",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABB145#001 maximum external inductance/resistance ratio (Lo/Ro) Note: External Inductance to Resistance ratio "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM634#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              }
                            ],
                            "modelType": "SubmodelElementCollection"
                          }
                        ],
                        "modelType": "SubmodelElementCollection"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "Marking01",
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD206#001"
                        }
                      ]
                    },
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "MarkingName",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "UKCA Marking",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "DesignationOfCertificateOrApproval",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0112/2///61987#ABH783#001"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "IssueDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/IssueDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExpiryDate",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also ([IRDI] 0173-1#02-AAO997#001 Validity date Note: format by lexical representation: CCYY-MM-DD Note: to be specified to the day "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExpiryDate"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "MarkingFile",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": "/aasx/Nameplate/UK_CA.png",
                        "contentType": "",
                        "modelType": "File"
                      },
                      {
                        "idShort": "MarkingAdditionalText",
                        "description": [
                          {
                            "language": "en",
                            "text": "Note: see also [IRDI] 0173-1#02-AAM954#002 details of other certificate "
                          }
                        ],
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingAdditionalText"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToMany"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "ExplosionSafeties",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "ZeroToOne"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "value": [
                          {
                            "idShort": "ExplosionSafety",
                            "semanticId": {
                              "type": "ExternalReference",
                              "keys": [
                                {
                                  "type": "GlobalReference",
                                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety"
                                }
                              ]
                            },
                            "qualifiers": [
                              {
                                "type": "Multiplicity",
                                "valueType": "xs:string",
                                "value": "OneToMany"
                              }
                            ],
                            "embeddedDataSpecifications": [],
                            "value": [
                              {
                                "idShort": "DesignationOfCertificateOrApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABH783#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "KEMA99IECEX1105/128",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "TypeOfApproval",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA231#008 type of hazardous area approval Note: name of the approval system, e.g. ATEX, IECEX, NEC, EAC, CCC, CEC Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM812#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "ATEX"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "ApprovalAgencyTestingAgency",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA634#004 approval agency/testing agency Note: name of the agency, which has issued the certificate, e.g. PTB, KEMA, CSA, SIRA Note: only values from the enumeration should be used as stated. For additional systems further values can be used. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAM632#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "language": "en",
                                    "text": "PTB"
                                  }
                                ],
                                "modelType": "MultiLanguageProperty"
                              },
                              {
                                "idShort": "TypeOfProtection",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAQ325#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "db",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "RatedInsulationVoltage",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Um(eff) Note: Insulation voltage, if specified in the certificate "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0173-1#02-AAN532#003"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "250",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "InstructionsControlDrawing",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: Reference to the instruction manual or control drawing "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "0112/2///61987#ABO102#001"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": {
                                  "type": "ModelReference",
                                  "keys": []
                                },
                                "modelType": "ReferenceElement"
                              },
                              {
                                "idShort": "SpecificConditionsForUse",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: X if any, otherwise no entry"
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/SpecificConditionsForUse"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "X",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "IncompleteDevice",
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/IncompleteDevice"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "valueType": "xs:string",
                                "value": "U",
                                "modelType": "Property"
                              },
                              {
                                "idShort": "AmbientConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/AmbientConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial definiton: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "2G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC standards. According to the current nameplate, also the combination “GD” is permitted Note: The combination “GD” is no longer accepted and was changed in the standards. Currently the marking for “G” and “D” must be provided in a separate marking string. Older devices may still exist with the marking “GD”. Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Gb"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "Class I, Division 2",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MinimumAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA621#007 minimum ambient temperature Note: editorial defnition: lower limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated minimum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAZ952#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxAmbientTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA623#007 maximum ambient temperature Note: editorial definition: upper limit of the temperature range of the environment in which the component, the pipework or the system can be operated Note: Rated maximum ambient temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-BAA039#010"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature of the device (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "100",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ProcessConditions",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If the device is mounted in the process boundary, ambient and process conditions are provided separately. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ProcessConditions"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToOne"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DeviceCategory",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA467#002 equipment/device category Note: editorial defnition: Category of device in accordance with directive 2014/34/EU Note: Equipment category according to the ATEX system. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAK297#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "1G",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial defnition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: Equipment protection level according to the IEC or other standards, e.g. Ga (IEC), Class I/Division 1 (US), Zone (EAC) Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "RegionalSpecificMarking",
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/RegionalSpecificMarking"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IS",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex) Note: Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "ia",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "LowerLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated minimum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN309#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "-40",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "UpperLimitingValueOfProcessTemperature",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Rated maximum process temperature Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAN307#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "120",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "MaxSurfaceTemperatureForDustProof",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABB159#004 maximum surface temperature for dust-proof Note: Maximum surface temperature (dust layer ≤ 5 mm) for specified maximum ambient and maximum process temperature, relevant for Group III only Note: Positive temperatures are listed without “+” sign. If several temperatures ranges are marked, only the most general range shall be indicated in the template, which is consistent with the specified temperature class or maximum surface temperature. Other temperature ranges and temperature classes/maximum surface temperatures may be listed in the instructions."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM666#005"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "85",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TemperatureClass",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA593#002 temperature class Note: editorial definition: classification system of electrical apparatus, based on its maximum surface temperature, intended for use in an explosive atmospheres with flammable gas, vapour or mist. Note: Temperature class for specified maximum ambient and maximum process temperature, relevant for Group II only (Further combinations may be provided in the instruction manual). "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAO371#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "T4",
                                    "modelType": "Property"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              },
                              {
                                "idShort": "ExternalElectricalCircuit",
                                "description": [
                                  {
                                    "language": "en",
                                    "text": "Note: If several external circuits can be connected to the device, this block shall provide a cardinality with the number of circuits Note: If for one external IS circuit several sets of safety parameters are provided (e.g. for several material groups), each set is specified in a separate block as a separate circuit. "
                                  }
                                ],
                                "semanticId": {
                                  "type": "ExternalReference",
                                  "keys": [
                                    {
                                      "type": "GlobalReference",
                                      "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit"
                                    }
                                  ]
                                },
                                "qualifiers": [
                                  {
                                    "type": "Multiplicity",
                                    "valueType": "xs:string",
                                    "value": "ZeroToMany"
                                  }
                                ],
                                "embeddedDataSpecifications": [],
                                "value": [
                                  {
                                    "idShort": "DesignationOfElectricalTerminal",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: For each circuit the designation of the terminals shall be specified. If several circuits are provided with the same parameters, their terminal pairs are listed and separated by a semicolon. If several circuits belong to one channel this shall be described in the instructions. "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0112/2///61987#ABB147#004"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "+/-",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TypeOfProtection",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA589#002 type of protection (Ex)) Note:  ·       Type of protection for the device as listed in the certificate ·       Symbol(s) for the Type of protection. Several types of protection are separated by a semicolon “;” ·       If several TypeOfProtection are listed in the same certificate, for each TypeOfProtection a separate SMC “Explosion Safety” shall be provided "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ325#003"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "db",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "EquipmentProtectionLevel",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA464#005 equipment protection level Note: editorial definition: Level of protection assigned to equipment based on its likelihood of becoming a source of ignition Note: EPL according to IEC standards Note: value should be chosen from an enumeration list with values “Ga, Gb, Gc, Da, Db, Dc, Ma, Mb”  Note: Recommendation: property declaration as MLP is required by its semantic definition. As the property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAM668#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "language": "en",
                                        "text": "Ga"
                                      }
                                    ],
                                    "modelType": "MultiLanguageProperty"
                                  },
                                  {
                                    "idShort": "ExplosionGroup",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABA961#007 permitted gas group/explosion group Note: editorial definition: classification of dangerous gaseous substances based on their ability to be ignited Note: Equipment grouping according to IEC 60079-0 is meant by this property Note: Symbol(s) for the gas group (IIA…IIC) or dust group (IIIA…IIIC) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAT372#001"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "IIC",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Characteristics",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: linear/ non-linear "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Characteristics"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "linear",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "Fisco",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/Fisco"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "TwoWISE",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: Enter “x” if relevant "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/ExplosionSafeties/ExplosionSafety/ExternalElectricalCircuit/TwoWISE"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "valueType": "xs:string",
                                    "value": "x",
                                    "modelType": "Property"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForPassiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC586#001 Safety related properties for passive behaviour Note: IS-parameters for passive circuits, if relevant (e.g. 2 wire field devices, valves) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ380#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxInputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA981#001 maximum input power (Pi) Note: Limit value for input power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ372#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "1250",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA982#001 maximum input voltage (Ui) Note: Limit value for input voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM638#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "30",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA983#001 maximum input current (Ii) Note: Limit value for input current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM642#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "100",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA984#001 maximum internal capacitance (Ci) Note: Maximum internal capacitance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM640#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxInternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA985#001 maximum internal inductance (Li) Note: Maximum internal inductance of the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM639#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "0",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  },
                                  {
                                    "idShort": "SafetyRelatedPropertiesForActiveBehaviour",
                                    "description": [
                                      {
                                        "language": "en",
                                        "text": "Note: see also [IRDI] 0112/2///61987#ABC585#001 Safety related properties for active behaviour Note: IS-parameters for active circuits, if relevant (e.g. power supply, IS-barriers) "
                                      }
                                    ],
                                    "semanticId": {
                                      "type": "ExternalReference",
                                      "keys": [
                                        {
                                          "type": "GlobalReference",
                                          "value": "0173-1#02-AAQ381#006"
                                        }
                                      ]
                                    },
                                    "qualifiers": [
                                      {
                                        "type": "Multiplicity",
                                        "valueType": "xs:string",
                                        "value": "ZeroToOne"
                                      }
                                    ],
                                    "embeddedDataSpecifications": [],
                                    "value": [
                                      {
                                        "idShort": "MaxOutputPower",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA987#001 maximum output power (Po) Note: Limit value for output power "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAQ371#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "960",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputVoltage",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA989#001 maximum output voltage (Uo) Note: Limit value for open circuits output voltage "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM635#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "15.7",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxOutputCurrent",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA988#001maximum output current (Io) Note: Limit value for closed circuit output current "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM641#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "245",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalCapacitance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA990#001 maximum external capacitance (Co) Note: Maximum external capacitance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM637#004"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2878",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductance",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABA991#001 maximum external inductance (Lo) Note: Maximum external inductance to be connected to the circuit "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM636#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "2.9",
                                        "modelType": "Property"
                                      },
                                      {
                                        "idShort": "MaxExternalInductanceResistanceRatio",
                                        "description": [
                                          {
                                            "language": "en",
                                            "text": "Note: see also [IRDI] 0112/2///61987#ABB145#001 maximum external inductance/resistance ratio (Lo/Ro) Note: External Inductance to Resistance ratio "
                                          }
                                        ],
                                        "semanticId": {
                                          "type": "ExternalReference",
                                          "keys": [
                                            {
                                              "type": "GlobalReference",
                                              "value": "0173-1#02-AAM634#003"
                                            }
                                          ]
                                        },
                                        "qualifiers": [
                                          {
                                            "type": "Multiplicity",
                                            "valueType": "xs:string",
                                            "value": "ZeroToOne"
                                          }
                                        ],
                                        "embeddedDataSpecifications": [],
                                        "valueType": "xs:string",
                                        "value": "",
                                        "modelType": "Property"
                                      }
                                    ],
                                    "modelType": "SubmodelElementCollection"
                                  }
                                ],
                                "modelType": "SubmodelElementCollection"
                              }
                            ],
                            "modelType": "SubmodelElementCollection"
                          }
                        ],
                        "modelType": "SubmodelElementCollection"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "idShort": "AssetSpecificProperties",
                "description": [
                  {
                    "language": "en",
                    "text": "Note: defined as “Asset specific nameplate information” per ECLASS "
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AGZ672#001"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "embeddedDataSpecifications": [],
                "value": [
                  {
                    "idShort": "GuidelineSpecificProperties{00}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#01-AHD205#001"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "OneToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "value": [
                      {
                        "idShort": "GuidelineForConformityDeclaration",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "0173-1#02-AAO856#002"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "One"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      },
                      {
                        "idShort": "{arbitrary}",
                        "semanticId": {
                          "type": "ExternalReference",
                          "keys": [
                            {
                              "type": "GlobalReference",
                              "value": "www.example.com/ids/cd/3325_9020_5022_1074"
                            }
                          ]
                        },
                        "qualifiers": [
                          {
                            "type": "Multiplicity",
                            "valueType": "xs:string",
                            "value": "OneToMany"
                          }
                        ],
                        "embeddedDataSpecifications": [],
                        "valueType": "xs:string",
                        "value": "",
                        "modelType": "Property"
                      }
                    ],
                    "modelType": "SubmodelElementCollection"
                  },
                  {
                    "idShort": "{arbitrary}",
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "www.example.com/ids/cd/3325_9020_5022_1964"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "OneToMany"
                      }
                    ],
                    "embeddedDataSpecifications": [],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              }
            ],
            "modelType": "Submodel"
          }
    },
    {
        id: 5,
        name: 'Festo_3S7PM0CP4BD',
        description: 'This is the fifth demo item. Customers love its innovative design.',
        price: 50,
        quantity: 5,
    },
    {
      id: 6,
      name: 'SE_Tesys_Island_Power',
      description: 'This is the sixth demo item. It comes with advanced features for tech enthusiasts.',
      price: 60,
      quantity: 6,
  },
  {
      id: 7,
      name: 'PeFu_267075_100078',
      description: 'This is the seventh demo item. It is known for its elegant design and durability.',
      price: 70,
      quantity: 7,
  },
  {
      id: 8,
      name: 'Siemens_S7_CPU1515',
      description: 'This is the eighth demo item. It is a popular choice for outdoor activities.',
      price: 80,
      quantity: 8,
  }
];

}